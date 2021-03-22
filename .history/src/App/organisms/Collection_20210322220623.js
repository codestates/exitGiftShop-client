import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReadMeModal from "../molecules/Collcetion/ReadMeModal";
import { useSelector, useDispatch } from "react-redux";
import { getAuctions, selectedCollection } from "../../reducers/auction";

const StyledMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 86%;
  overflow: auto;

  @media screen and (max-width: 1300px) {
    flex-wrap: wrap;
    border: none;
  }
`;

const GridSection = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  width: 1400px;
  margin: auto;

  > div {
    height: 300px;
  }
`;

const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;

  > :first-child {
    width: 60%;
    height: 85%;
    background-color: rgba(97, 97, 97, 1);
    margin-right: 50px;
  }
  > :last-child {
    display: flex;
    width: 100%;
    height: 85%;
    flex-direction: column;
    justify-content: flex-end;
    font-size: 20px;
  }
  h1 {
    margin-bottom: 20px;
    line-height: 150%;
    font-size: 35px;
  }
  p {
    line-height: 150%;
  }
  button {
    background-color: rgba(0, 0, 0, 0);
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    opacity: 0.8;
    margin-top: 20px;
    font-size: 20px;
    text-align: left;
  }
`;

function Collection() {
  const [CollectionModalOn, setCollectionModalOn] = useState(false);
  const dispatch = useDispatch();
  const file_path = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/file/`;
  const handleModalOn = (e) => {
    setCollectionModalOn(true);
  };

  const handleModalOff = () => {
    setCollectionModalOn(false);
  };
  // todo: 하드코딩 > data.map으로 데이터뿌려주기
  const { auctions } = useSelector((state) => state.auction);
  useEffect(() => {
    dispatch(getAuctions());
  }, [dispatch]);

  return (
    <>
      <StyledMain>
        <GridSection>
          {auctions.map((auction, i) => {
            return (
              <ItemBox>
                <img src={file_path + auction.art_uu.art_file_id} alt="img" />
                <div>
                  <h1>{auction.art_uu.art_title}</h1>
                  <p>{auction.art_uu.art_desc}</p>

                  {CollectionModalOn && (
                    <ReadMeModal
                      visible={CollectionModalOn}
                      closable={true}
                      maskClosable={true}
                      onClose={handleModalOff}
                    ></ReadMeModal>
                  )}
                </div>
              </ItemBox>
            );
          })}
          <button
            onClick={() => {
              dispatch(selectedCollection(auction));
              handleModalOn();
            }}
          >
            Read more
          </button>
        </GridSection>
      </StyledMain>
    </>
  );
}

export default Collection;

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
  overflow-y: hidden;
  &::-webkit-scrollbar {
    /* 세로 스크롤 넓이 */
    width: 8px;

    /* 가로 스크롤 높이 */
    height: 8px;

    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }

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
    height: 53%;
    flex-direction: column;
    justify-content: flex-end;
    font-size: 20px;
    }
  }
  h1 {
    margin-bottom: 20px;
    line-height: 110%;
    font-family: "Roboto Mono", monospace;
    font-size: 40px;
    font-weight: 800;
  }
  p {
    line-height: 400%;
  }
  button {
    background-color: rgba(0, 0, 0, 0);
    color: white;
    font-family:'Roboto', sans-serif;
    font-size:15px;
    border-width: thin;
    border: none;
    outline: none;
    cursor: pointer;
    opacity: 0.8;
    margin-top: 20px;
    text-align: left;
  }
`;

const ImgWrapper = styled.div`
  width: 25%;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 100%;
    height: auto;
    -webkit-transform: translate(0%, -25%);
    -ms-transform: translate(0%, -25%);
    transform: translate(0%, -25%);
  }
`;

function Collection() {
  const dispatch = useDispatch();
  const file_path = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/file/`;
  const [CollectionModalOn, setCollectionModalOn] = useState(false);
  const handleModalOn = (e) => {
    setCollectionModalOn(true);
  };

  const handleModalOff = () => {
    setCollectionModalOn(false);
  };

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
              <ItemBox key={i}>
                <ImgWrapper>
                  <img src={file_path + auction.art_uu.art_file_id} alt="img" />
                </ImgWrapper>
                <div>
                  <h1>{auction.art_uu.art_title}</h1>
                  <p>
                    {auction.art_uu.art_desc}
                    <span>
                      <button
                        onClick={() => {
                          dispatch(selectedCollection(auction));
                          handleModalOn();
                        }}
                      >
                        Read more
                      </button>
                    </span>
                  </p>
                </div>
              </ItemBox>
            );
          })}
          {CollectionModalOn && (
            <ReadMeModal
              visible={CollectionModalOn}
              closable={true}
              maskClosable={true}
              onClose={handleModalOff}
            ></ReadMeModal>
          )}
        </GridSection>
      </StyledMain>
    </>
  );
}

export default Collection;

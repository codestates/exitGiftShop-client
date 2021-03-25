import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReadMeModal from "../molecules/Collcetion/ReadMeModal";
import { useSelector, useDispatch } from "react-redux";
import { getAuctions, selectedCollection } from "../../reducers/auction";

const StyledMain = styled.div`
  display: flex;
  box-sizing: content-box;
  justify-content: space-between;
  object-position: center center;
  height: 51em;
  overflow-y: hidden;
  padding-top: 1em;
  padding-left: 20em;
  padding-right: 20em;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    /* 세로 스크롤 넓이 */
    width: 10px;
    /* 가로 스크롤 높이 */
    height: 6px;

    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
  scroll-y: hidden;
  @media screen and (max-width: 1300px) {
    flex-wrap: wrap;
    border: none;
  }
`;

const GridSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100em;
  margin: 1em;

  > div {
    height: 310px;
  }
`;

const ItemBox = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 1em;
  justify-content: space-between;
  padding-bottom: 2em;

  > :first-child {
    box-sizing: content-box;
    width: 55em;
    object-fit: cover;
    overflow: hidden;
    margin-right: 50px;
    border-radius: 15px;
    padding: 0.5em;
  }
  > :last-child {
    display: flex;
    width: 100%;
    height: 35%;
    flex-direction: column;
    justify-content: flex-end;
    font-size: 20px;
  }

  h1 {
    margin-bottom: 0.1em;
    font-family: "Roboto Mono", monospace;
    font-size: 35px;
    color: #dedede;
    font-weight: 800;
  }
  div {
    height: 300px;
    display: flex;
    flex-direction: column;
  }
  :not(:first-child) div {
    padding-bottom: 15px;
  }
  button {
    background-color: rgba(0, 0, 0, 0);
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    color: #dedede;
    border-width: thin;
    border: none;
    outline: none;
    cursor: pointer;
    opacity: 0.8;
    text-align: left;
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
                <img src={file_path + auction.art_uu.art_file_id} alt="img" />
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
              className="modal"
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

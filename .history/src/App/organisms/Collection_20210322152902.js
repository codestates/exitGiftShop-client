import React, { useState } from "react";
import styled from "styled-components";
import ReadMeModal from "../molecules/Collcetion/ReadMeModal";
import Readmore from "../molecules/Collcetion/Readmore";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { getVideos, selected } from "../../../reducers/auction";

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

const Collection = () => {
  const [loginModalOn, setLoginModalOn] = useState(false);

  const handleModalOn = (e) => {
    setLoginModalOn(true);
  };

  const handleModalOff = () => {
    setLoginModalOn(false);
  };
  // todo: 하드코딩 > data.map으로 데이터뿌려주기
  const { videos, loading, error } = useSelector((state) => state.video);
  const file_path = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/file/`;

  const renderVideo = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Cannot display</p>;
    return videos.map((video, i) => (
      <SelectBtn
        key={i}
        onClick={() => dispatch(selected(video))}
        onKeyUp={() => fn()}
        role="menuitem"
      >
        <SlideImg
          src={file_path + video.art_uu.art_file_id}
          alt="piture"
          style={{ display: "block", width: "100%" }}
        />
        <FontStyle>
          <FontAwesomeIcon icon={faSearch} size="2x" />
        </FontStyle>
      </SelectBtn>
    ));
  };

  return (
    <>
      <StyledMain>
        <GridSection>
          <ItemBox>
            <div></div>
            <div>
              <h1>
                Virtual tour: 20th Century<br></br>at Christie's London
              </h1>
              <Readmore>
                A 360-view of our upcoming auctions in London, showcasing works
                by some of the most renowned names in Impressionist, modern,
                post-war and contemporary art.
              </Readmore>
              <button onClick={handleModalOn}>Read more</button>
              {loginModalOn && (
                <ReadMeModal
                  visible={loginModalOn}
                  closable={true}
                  maskClosable={true}
                  onClose={handleModalOff}
                ></ReadMeModal>
              )}
            </div>
          </ItemBox>
          <ItemBox>
            <div></div>
            <div>
              <h1>
                Virtual tour: 20th Century<br></br>at Christie's London
              </h1>
              <p>
                A 360-view of our upcoming auctions in London, showcasing works
                by some of the most renowned names in Impressionist, modern,
                post-war and contemporary art.
              </p>
              <button value="" onClick={handleModalOn}>
                Read more
              </button>
              {loginModalOn && (
                <ReadMeModal
                  visible={loginModalOn}
                  closable={true}
                  maskClosable={true}
                  onClose={handleModalOff}
                ></ReadMeModal>
              )}
            </div>
          </ItemBox>
          <ItemBox>
            <div></div>
            <div>
              <h1>
                Virtual tour: 20th Century<br></br>at Christie's London
              </h1>
              <p>
                A 360-view of our upcoming auctions in London, showcasing works
                by some of the most renowned names in Impressionist, modern,
                post-war and contemporary art.
              </p>
              <button onClick={handleModalOn}>Read more</button>
              {loginModalOn && (
                <ReadMeModal
                  visible={loginModalOn}
                  closable={true}
                  maskClosable={true}
                  onClose={handleModalOff}
                ></ReadMeModal>
              )}
            </div>
          </ItemBox>
          <ItemBox>
            <div></div>
            <div>
              <h1>
                Virtual tour: 20th Century<br></br>at Christie's London
              </h1>
              <p>
                A 360-view of our upcoming auctions in London, showcasing works
                by some of the most renowned names in Impressionist, modern,
                post-war and contemporary art.
              </p>
              <button onClick={handleModalOn}>Read more</button>
              {loginModalOn && (
                <ReadMeModal
                  visible={loginModalOn}
                  closable={true}
                  maskClosable={true}
                  onClose={handleModalOff}
                ></ReadMeModal>
              )}
            </div>
          </ItemBox>
          <ItemBox>
            {" "}
            <div></div>
            <div>
              <h1>
                Virtual tour: 20th Century<br></br>at Christie's London
              </h1>
              <p>
                A 360-view of our upcoming auctions in London, showcasing works
                by some of the most renowned names in Impressionist, modern,
                post-war and contemporary art.
              </p>
              <button onClick={handleModalOn}>Read more</button>
              {loginModalOn && (
                <ReadMeModal
                  visible={loginModalOn}
                  closable={true}
                  maskClosable={true}
                  onClose={handleModalOff}
                ></ReadMeModal>
              )}
            </div>
          </ItemBox>
        </GridSection>
      </StyledMain>
    </>
  );
};

export default Collection;

import React, { useEffect } from "react";
import styled from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Coverflow from "react-coverflow";
import { useSelector, useDispatch } from "react-redux";
import { fetchArt } from "../../reducers/slideContent";

const StyleCover = styled.div`
  .coverflow__container__1P-xE {
    background-color: rgba(0, 0, 0, 0);
  }
  .coverflow__figure__3bk_C {
    box-shadow: none;
  }
`;

const SelectBtn = styled.div`
  position: relative;
  &:hover {
    opacity: 0.7;
  }
  div {
    &:hover {
      opacity: 1;
    }
    transition: opacity 0.5s ease-in-out;
  }
  transition: opacity 0.5s ease-in-out;
`;

const SlideImg = styled.img`
  border-radius: 10px;
`;
const FontStyle = styled.div`
  position: absolute;
  width: 300px;
  height: 380px;
  opacity: 0;
  top: 0px;
  text-align: center;
  svg {
    position: absolute;
    top: 90px;
    left: 90px;
    color: rgba(20, 20, 20, 0.7);
  }
`;

const fn = function () {};

function SlideContent() {
  const dispatch = useDispatch();
  const { arts, loading, error } = useSelector((state) => state.slideContent);
  
  // componentDidMount, componentDidUpdate와 같은 방식으로
  useEffect(() => {
    dispatch(fetchArt());
  },[]);

  if (error) {
    return <p>Something went wrong! please, try again.</p>;
  }

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <>
      <StyleCover>
        <Coverflow
          width={600}
          height={500}
          displayQuantityOfSide={1}
          navigation={false}
          enableHeading={false}
          currentFigureScale={2}
        >
          <SelectBtn onClick={() => fn()} onKeyUp={() => fn()} role="menuitem">
            <SlideImg
              src={`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/file/${arts[0].art_file_id}`}
              alt="piture"
              style={{ display: "block", width: "100%" }}
            />
            <FontStyle>
              <FontAwesomeIcon icon={faSearch} size="2x" />
            </FontStyle>
          </SelectBtn>
          <SelectBtn onClick={() => fn()} onKeyUp={() => fn()} role="menuitem">
            <SlideImg
              src={`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/file/${arts[1].art_file_id}`}
              alt="piture"
              style={{ display: "block", width: "100%" }}
            />
            <FontStyle>
              <FontAwesomeIcon icon={faSearch} size="2x" />
            </FontStyle>
          </SelectBtn>

          <SelectBtn onClick={() => fn()} onKeyUp={() => fn()} role="menuitem">
            <SlideImg
              src={`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/file/${arts[2].art_file_id}`}
              alt="piture"
              style={{ display: "block", width: "100%" }}
            />
            <FontStyle>
              <FontAwesomeIcon icon={faSearch} size="2x" />
            </FontStyle>
          </SelectBtn>
        </Coverflow>
      </StyleCover>
    </>
  );
}
export default SlideContent;

// const SlideImg = styled.img`
//   width: 300px;
//   height: 300px;
//   border-radius: 20px;
//   margin: 10px;
// `;

// const ImgBox = styled.div`
//   display: flex;
//   overflow: hidden;
//   justify-content: center;
//   align-items: center;
// `;

// const CenterImg = styled.a`
//   width: 100%;
//   height: 100%;
//   cursor: pointer;
// `;

// const Sex = styled(CenterImg)`

// `;

// function SlideContent() {
//   return (
//     <>
//       <ImgBox>
//         <Sex>
//           <SlideImg src={beeple} alt="beeple" />
//         </Sex>
//         <Sex>
//           <SlideImg src={beeple2} alt="beeple2" />
//         </Sex>
//         <Sex>
//           <SlideImg src={beeple3} alt="beeple3" />
//         </Sex>
//       </ImgBox>
//     </>
//   );
// }

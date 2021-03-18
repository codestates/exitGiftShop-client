import React, { useEffect } from "react";
import styled from "styled-components";
import beeple from "../../images/beeple.jpg";
import beeple2 from "../../images/beeple2.jpg";
import beeple3 from "../../images/beeples.jpg";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Coverflow from "react-coverflow";

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
  width: 220px;
  height: 240px;
  opacity: 0;
  top: 0px;
  text-align: center;
  svg {
    position: absolute;
    top: 80px;
    left: 85px;
    color: rgba(20, 20, 20, 0.7);
  }
`;

const fn = function () {};

function SlideContent() {
  useEffect(() => {});
  // todo: onClick=false > onClick=true state 변화
  // todo: 첫번째 클릭하고 나면 디테일이 바뀌고 그뒤로는 모달창이 뜨는 클릭으로 바뀜

  return (
    <>
      <StyleCover>
        <Coverflow
          width={650}
          height={450}
          displayQuantityOfSide={1}
          navigation={false}
          enableHeading={false}
        >
          <SelectBtn onClick={() => fn()} onKeyUp={() => fn()} role="menuitem">
            <SlideImg
              src={beeple3}
              alt="piture"
              style={{ display: "block", width: "100%" }}
            />
            <FontStyle>
              <FontAwesomeIcon icon={faSearch} size="4x" />
            </FontStyle>
          </SelectBtn>
          <SelectBtn onClick={() => fn()} onKeyUp={() => fn()} role="menuitem">
            <SlideImg
              src={beeple}
              alt="piture"
              style={{ display: "block", width: "100%" }}
            />
            <FontStyle>
              <FontAwesomeIcon icon={faSearch} size="4x" />
            </FontStyle>
          </SelectBtn>

          <SelectBtn onClick={() => fn()} onKeyUp={() => fn()} role="menuitem">
            <SlideImg
              src={beeple2}
              alt="piture"
              style={{ display: "block", width: "100%" }}
            />
            <FontStyle>
              <FontAwesomeIcon icon={faSearch} size="4x" />
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

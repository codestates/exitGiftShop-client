import React from "react";
import styled from "styled-components";
import beeple from "../../images/beeple.jpg";
import beeple2 from "../../images/beeple2.jpg";
import beeple3 from "../../images/beeples.jpg";
import Coverflow from "react-coverflow";

const StyleCover = styled.div`
  .coverflow__container__1P-xE {
    background-color: rgba(0, 0, 0, 0);
  }
  .coverflow__figure__3bk_C {
    box-shadow: none;
  }
`;

// const SelectBtn = styled.div`
//   &:active {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 250px;
//   }
// `;

const fn = function () {};

function SlideContent() {
  return (
    <>
      <StyleCover>
        <Coverflow
          width={600}
          height={450}
          displayQuantityOfSide={1}
          navigation={false}
          enableHeading={false}
        >
          <div onClick={() => fn()} onKeyDown={() => fn()} role="menuitem">
            <img
              src={beeple3}
              alt="piture"
              style={{ display: "block", width: "100%" }}
            />
          </div>
          <div>
            <img
              src={beeple}
              alt="piture"
              style={{ display: "block", width: "100%" }}
            />
          </div>
          <img src={beeple2} alt="piture" />
        </Coverflow>
      </StyleCover>
    </>
  );
}

export default SlideContent;

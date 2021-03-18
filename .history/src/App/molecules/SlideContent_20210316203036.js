import React from "react";
import styled from "styled-components";
import beeple from "../../images/beeple.jpg";
import beeple2 from "../../images/beeple2.jpg";
import beeple3 from "../../images/beeples.jpg";
import AuctionTime from "../atoms/AuctionTime";
import Coverflow from "react-coverflow";

const fn = function () {
  /* do you want */
};
function SlideContent() {
  return (
    <>
      <Coverflow
        width={550}
        height={450}
        displayQuantityOfSide={1}
        navigation={false}
        enableHeading={false}
      >
        <div
          onClick={() => fn()}
          onKeyDown={() => fn()}
          role="menuitem"
          tabIndex="0"
        >
          <img
            src={beeple3}
            alt="title or description"
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <img
          src={beeple}
          alt="title or description"
          // data-action=""
        />
        <img
          src={beeple2}
          alt="title or description"
          // data-action=""
        />
      </Coverflow>
    </>
  );
}

export default SlideContent;

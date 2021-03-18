import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AuctionTime() {
  const TimeStlye = styled.div`
    margin-top: 5px;
    font-size: 40px;
  `;
  const TimeBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    svg {
      font-size: 45px;
      margin-right: 15px;
    }
  `;

  return (
    <>
      <TimeBox>
        <FontAwesomeIcon icon={faClock} />
        <TimeStlye>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </TimeStlye>
      </TimeBox>
    </>
  );
}

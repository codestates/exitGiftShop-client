import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const timer = () {
const [minutes, setMinutes] = useState(2);
const [seconds, setSeconds] = useState(0);

useEffect(() => {
  const countdown = setInterval(() => {
    if (parseInt(seconds) > 0) {
      setSeconds(parseInt(seconds) - 1);
    }
    if (parseInt(seconds) === 0) {
      if (parseInt(minutes) === 0) {
        clearInterval(countdown);
      } else {
        setMinutes(parseInt(minutes) - 1);
        setSeconds(59);
      }
    }
  }, 1000);
  return () => clearInterval(countdown);
}, [minutes, seconds]);

function AuctionTime() {
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

export default AuctionTime;

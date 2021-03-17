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

<<<<<<< HEAD:src/App/atoms/AuctionTime.js
export default function AuctionTime() {
  // TO_DO_LOGIC:
  // 정해진 시간에 경매가 종료된다,
  // 경매 참여 시, 추가 시간 = 추가 시간 + 30분
  // 정해진 시간 =  정해진 시간 + 추가 시간

  // const [hours, setHours] = useState(24);
  const [minutes, setMinutes] = useState(60);
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
    }, 1000); // run by 1 second
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

=======
function AuctionTime() {
>>>>>>> 4ebf6d88e28400880cae497d6af4b70998437ba1:src/App/atoms/AuctionTime/AuctionTime.js
  return (
    <>
      <TimeBox>
        <FontAwesomeIcon icon={faClock} />
<<<<<<< HEAD:src/App/atoms/AuctionTime.js
        <TimeStlye>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </TimeStlye>
=======
        <TimeStlye>Time</TimeStlye>
>>>>>>> 4ebf6d88e28400880cae497d6af4b70998437ba1:src/App/atoms/AuctionTime/AuctionTime.js
      </TimeBox>
    </>
  );
}
<<<<<<< HEAD:src/App/atoms/AuctionTime.js
=======

export default AuctionTime;
>>>>>>> 4ebf6d88e28400880cae497d6af4b70998437ba1:src/App/atoms/AuctionTime/AuctionTime.js

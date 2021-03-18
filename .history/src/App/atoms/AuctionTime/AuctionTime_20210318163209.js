import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TimeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  svg {
    font-size: 30px;
    margin-right: 15px;
  }
`;

const TimerStlye = styled.div`
  margin-top: 5px;
  font-size: 20px;
  display: flex;
  flex: column;
  align-items: center;
  justify-content: center;
  padding-botton: 7em;
  padding-top: 2em;
  width: 100%;
  height: 100%;
`;

const TimerChild = styled.section`
  text-align: center;
`;

const AuctionTime = () => {
  // TO_DO_LOGIC:
  // 정해진 시간에 경매가 종료된다,
  // 경매 참여 시, 추가 시간 = 추가 시간 + 30분
  // 정해진 시간 =  정해진 시간 + 추가 시간
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("March 31, 2021 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current); // from ref
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  // componentDidMount lifecycle
  useEffect(() => {
    startTimer();
    return () => {
      // eslint-disable-next-line
      clearInterval(interval.current);
    };
  });

  return (
    <>
      <TimeBox>
        <TimerStlye>
          <TimerChild>
            <p>{timerDays}</p>
            <p>
              <small>Days</small>
            </p>
          </TimerChild>
          <span>:</span>
          <TimerChild>
            <p>{timerHours}</p>
            <p>
              <small>Hours</small>
            </p>
          </TimerChild>
          <span>:</span>
          <TimerChild>
            <p>{timerMinutes}</p>
            <p>
              <small>Minutes</small>
            </p>
          </TimerChild>
          <span>:</span>
          <TimerChild>
            <p>{timerSeconds}</p>
            <p>
              <small>seconds</small>
            </p>
          </TimerChild>
        </TimerStlye>
      </TimeBox>
    </>
  );
};

export default AuctionTime;

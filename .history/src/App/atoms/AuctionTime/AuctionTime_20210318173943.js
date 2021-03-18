import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

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
  font-family: "Roboto Mono", monospace;
  font-size: 35px;
  font-weight: bold;
  display: flex;
  flex: column;
  align-items: center;
  justify-content: center;
  padding-
  width: 100%;
  height: 100%;
`;

const TimerChild = styled.section`
  box-sizing: border-box;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
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
    const countdownDate = new Date("March 25, 2021 16:05:00").getTime();

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
              <small>DAY</small>
            </p>
          </TimerChild>
          <span>:</span>
          <TimerChild>
            <p>{timerHours}</p>
            <p>
              <small>HOUR</small>
            </p>
          </TimerChild>
          <span>:</span>
          <TimerChild>
            <p>{timerMinutes}</p>
            <p>
              <small>MIN</small>
            </p>
          </TimerChild>
          <span>:</span>
          <TimerChild>
            <p>{timerSeconds}</p>
            <p>
              <small>SEC</small>
            </p>
          </TimerChild>
        </TimerStlye>
      </TimeBox>
    </>
  );
};

export default AuctionTime;

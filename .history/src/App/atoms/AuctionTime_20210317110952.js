import React from "react";
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

function AuctionTime() {
  const countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

  const x = setInterval(function () {
    const now = new Date().getTime();

    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    })}
  return (
    <>
      <TimeBox>
        <FontAwesomeIcon icon={faClock} />
        <div>
          `${days} : {hours} + "h " + {minutes} + "m " + {seconds} + "s "
        </div>
      </TimeBox>
    </>
  );
}

export default AuctionTime;

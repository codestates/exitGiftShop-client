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
  // Set the date we're counting down to
  const countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

  // Update the count down every 1 second
  const x = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
  return (
    <>
      <TimeBox>
        <FontAwesomeIcon icon={faClock} />
        <div>
          {days} : {hours} + "h " + {minutes} + "m " + {seconds} + "s "
        </div>
      </TimeBox>
    </>
  );
}

export default AuctionTime;

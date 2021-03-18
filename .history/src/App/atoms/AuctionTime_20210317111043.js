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

function AutionTime() {
  return (
    <>
      <TimeBox>
        <FontAwesomeIcon icon={faClock} />
        <TimeStlye>23 : 59 : 21</TimeStlye>
      </TimeBox>
    </>
  );
}

export default AutionTime;

import React from "react";
import styled from "styled-components";

const Btn = styled.div`
  width: 100%;
  button {
    width: 96.5%;
    height: 50px;
    border-radius: 10px;
    margin-top: 20px;
    outline: none;
    cursor: pointer;
    margin-left: 10px;
    background-color: #e98d8d;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: white;
  }
`;

function FollowBtn() {
  return (
    <Btn>
      <button>Follow Auction</button>
    </Btn>
  );
}

export default FollowBtn;

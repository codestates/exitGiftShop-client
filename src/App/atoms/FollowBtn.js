import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 48%;
  height: 50px;
  border-radius: 10px;
  margin-top: 20px;
  outline: none;
  cursor: pointer;
  margin-left: 10px;
  background-color: #e98d8d;
  font-size: 20px;
  color: white;
  font-weight: 600;
`;

function FollowBtn() {
  return <Btn>Follow auction</Btn>;
}

export default FollowBtn;

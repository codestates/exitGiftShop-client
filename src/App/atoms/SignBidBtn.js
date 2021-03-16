import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 48%;
  height: 50px;
  border-radius: 10px;
  margin-top: 20px;
  outline: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
`;

const loginTap = () => {
  window.open("/signup", "_");
};

function SignBidBtn() {
  return <Btn onClick={loginTap}>Sign in to bid</Btn>;
}

export default SignBidBtn;

import React, { useState, useEffect } from "react";
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
function SignBidBtn() {
  const [loginModalOn, setLoginModalOn] = useState(false);

  const handlModalControl = () => {
    setLoginModalOn(true);
  };
  return <Btn onClick={handlModalControl}>Sign in to bid</Btn>;
}

export default SignBidBtn;

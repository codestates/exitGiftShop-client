import React, { useState } from "react";
import styled from "styled-components";
import LoginModal from "./LoginModal";
import { useSelector } from "react-redux";

const Btn = styled.div`
  width: 100%;
  > button {
    width: 95%;
    height: 50px;
    border-radius: 10px;
    margin-top: 20px;
    outline: none;
    cursor: pointer;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 500;
  }
`;
const BtnStyle = styled.button`
  &:active {
    transform: translate3d(2px, 2px, 0px);
  }
`;

function SignBidBtn() {
  const [loginModalOn, setLoginModalOn] = useState(false);
  const { islogin } = useSelector((state) => state.user);

  const handleModalOn = () => {
    setLoginModalOn(true);
  };

  const handleModalOff = () => {
    setLoginModalOn(false);
  };

  const handleBiding = () => {};
  return (
    <Btn>
      {islogin ? (
        <>
          <BtnStyle onClick={handleBiding}>Bid</BtnStyle>
        </>
      ) : (
        <>
          <button onClick={handleModalOn}>Sign in to Bid</button>
        </>
      )}

      {loginModalOn && (
        <LoginModal
          visible={loginModalOn}
          closable={true}
          maskClosable={true}
          onClose={handleModalOff}
        ></LoginModal>
      )}
    </Btn>
  );
}

export default SignBidBtn;

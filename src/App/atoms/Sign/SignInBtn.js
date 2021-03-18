import React, { useState } from "react";
import styled from "styled-components";
import LoginModal from "./LoginModal";

const Btn = styled.div`
  width: 100%;
  > button {
    width: 95%;
    height: 50px;
    border-radius: 10px;
    margin-top: 20px;
    outline: none;
    cursor: pointer;
    font-size: 20px;
  }
`;
function SignBidBtn() {
  const [loginModalOn, setLoginModalOn] = useState(false);

  const handleModalOn = () => {
    setLoginModalOn(true);
  };

  const handleModalOff = () => {
    setLoginModalOn(false);
  };
  return (
    <Btn>
      <button onClick={handleModalOn}>Sign in to bid</button>
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

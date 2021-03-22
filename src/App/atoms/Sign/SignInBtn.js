import React, { useState } from "react";
import styled from "styled-components";
import LoginModal from "./LoginModal";
import { siginin } from "../../../reducers/login";
import { useSelector, useDispatch } from "react-redux";

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
  const { islogin } = useSelector((state) => state.login);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleModalOn = () => {
    setLoginModalOn(true);
  };

  const handleModalOff = () => {
    setLoginModalOn(false);
  };
  const handleIslogin = () => {
    console.log(currentUser, "ddddddddddddd");
    if (currentUser.uuid) {
      dispatch(siginin());
    }
  };

  const handleBiding = () => {};
  return (
    <Btn>
      {islogin ? (
        <>
          <button onClick={handleBiding}>Bid</button>
        </>
      ) : (
        <>
          <button onClick={handleModalOn}>Sign in to bid</button>
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

import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import googleImg from "../../../images/google.jpg";
import gmailImg from "../../../images/gmail.png";

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0px;
  bottom: 0;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  outline: 0;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  height: 500px;
  width: 350px;
  max-width: 960px;
  top: 10%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 15px 20px;
  color: black;
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const ModalBtn = styled.button`
  background-color: #4285f4;
  color: white;
  border: none;
  margin: 0px 3px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-size: 1.2rem;
  outline: none;
  cursor: pointer;
`;
const ModalBtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;

const ModalInput = styled.input`
  width: 100%;
  height: 40px;
  margin: 10px 0px;
  border-radius: 5px;
  border: 1px solid rgba(20, 20, 20, 0.3);
`;

const LogInInfo = styled.div`
  font-size: 1rem;
  span {
    opacity: 0.5;
  }
`;

const ForgotPasswordBox = styled.div`
  text-align: center;
  margin-top: 15px;
`;

const GoogleLogInBtn = styled.button`
  background-color: #4285f4;
  color: white;
  height: 50px;
  border-radius: 3px;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 2px 3px;
  outline: none;
`;

const GoogleLogInBtnBox = styled.div`
  border-top: 1px solid rgba(20, 20, 20, 0.2);
  border-bottom: 1px solid rgba(20, 20, 20, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0px;
  padding: 15px 0px;
  width: 100%;
`;

const GoogleImg = styled.img`
  height: 100%;
  margin-right: 5px;
`;

const SignUpText = styled.div`
  display: flex;
  h1 {
    opacity: 0.5;
    margin-right: 3px;
  }
  font-size: 1rem;
  font-weight: 450;
`;

const LinkUnderStyle = styled(Link)`
  text-decoration: underline;
  opacity: 1px solid rgba(20, 20, 20, 0.2);
`;

const GmailImg = styled.img`
  width: 70%;
  height: 70%;
`;
const LogoBox = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid black;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AllLogoBox = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
`;

const OrStlye = styled.span`
  font-size: 1rem;
  position: absolute;
  bottom: 260px;
  width: 40px;
  text-align: center;
  background-color: rgba(255, 255, 255, 1);
`;

// const CloseBtn = styled.button``;

function LoginModal({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
}) {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  // const close = (e) => {
  //   if (onClose) {
  //     onClose(e);
  //   }
  // };

  useEffect(() => {}, []);
  // todo: 구글,exitgift로고 상태변화
  // todo: axios email, password post요청
  // todo: OAuth 구글 자동로그인
  // todo: sign up 누르면 회원가입창으로 이동
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        onClick={maskClosable ? onMaskClick : null}
        className={className}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner tabIndex="0" className="modal-inner">
          <AllLogoBox>
            {/* <LogoBox>
              <GmailImg src={gmailImg} alt="gmail" />
            </LogoBox> */}
            {/* // todo: GoogleLogInBtn 눌리면 exitgift로고랑 같이나옴 useEffect()*/}
            <LogoBox>
              <GmailImg src={gmailImg} alt="gmail" />
            </LogoBox>
          </AllLogoBox>

          <SignUpText>
            <h1>Dont`t have an accout?</h1>
            <LinkUnderStyle to=""> Sign up</LinkUnderStyle>
          </SignUpText>

          <GoogleLogInBtnBox>
            <GoogleLogInBtn onClick={() => {}}>
              <GoogleImg src={googleImg} alt="google"></GoogleImg>
              Continue with Google
            </GoogleLogInBtn>
          </GoogleLogInBtnBox>
          <OrStlye>Or</OrStlye>
          <LogInInfo>
            <div>
              <span>Email</span>
              <ModalInput />
              <span>Password</span>
              <ModalInput />
            </div>

            <ModalBtnBox>
              <ModalBtn>Explore</ModalBtn>
              <ModalBtn>Login</ModalBtn>
            </ModalBtnBox>
            <ForgotPasswordBox>
              <LinkUnderStyle to="">I forgot my password</LinkUnderStyle>
            </ForgotPasswordBox>
          </LogInInfo>

          {/* {closable && (
            <CloseBtn className="modal-close" onClick={close}>
              닫기
            </CloseBtn>
          )} */}
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

export default LoginModal;

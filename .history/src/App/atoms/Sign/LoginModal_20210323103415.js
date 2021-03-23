import React, { useState } from "react";
import styled from "styled-components";
import googleImg from "../../../images/google.jpg";
import gmailImg from "../../../images/gmail.png";
import SignUp from "../SignUp/SignUp";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../../reducers/user";
import { siginin } from "../../../reducers/login";

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: -200px;
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

const SignUpTextBtn = styled.button`
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  text-decoration: underline;
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

  // todo: 구글,exitgift로고 상태변화
  // todo: axios email, password post요청
  // todo: OAuth 구글 자동로그인
  // todo: sign up 누르면 회원가입창으로 이동
  const [signUpModal, SetSignUpModal] = useState(false);

  const handleSignOn = (e) => {
    SetSignUpModal(true);
    maskClosable = null;
  };
  const handleSignOff = () => {
    SetSignUpModal(false);
  };

  const dispatch = useDispatch();
  const { currentUser, currentUserLoading, currentUserError } = useSelector(
    (state) => state.user
  );
  const { islogin } = useSelector((state) => state.login);

  const [inputs, setInputs] = useState({
    user_email: "",
    user_password: "",
    accessToken: "",
  });

  const [isClicklogin, setIsClicklogin] = useState(false);

  const handleIslogin = (e) => {
    if (currentUser) {
      dispatch(siginin());
      onClose(e);
    }
  };
  const { user_email, user_password } = inputs;

  // if (currentUserError) {
  //   return <p>Something went wrong! please, try again.</p>;
  // }

  // if (currentUserLoading) {
  //   return <p>Loading</p>;
  // }

  const inputHandler = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <>
      {!signUpModal ? (
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
              <GoogleLogInBtnBox>
                <GoogleLogInBtn onClick={() => {}}>
                  <GoogleImg src={googleImg} alt="google"></GoogleImg>
                  Continue with Google
                </GoogleLogInBtn>
              </GoogleLogInBtnBox>
              <OrStlye>Or</OrStlye>
              <LogInInfo>
                <form>
                  <div>
                    <span>Email</span>
                    <ModalInput
                      required
                      type="email"
                      name="user_email"
                      onChange={(e) => {
                        inputHandler(e);
                      }}
                    />
                    <span>Password</span>
                    <ModalInput
                      required
                      type="password"
                      name="user_password"
                      onChange={(e) => {
                        inputHandler(e);
                      }}
                    />
                  </div>

                  <ModalBtnBox>
                    <ModalBtn>Explore</ModalBtn>
                    <ModalBtn
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(fetchUser({ user_password, user_email }));
                        handleIslogin();
                      }}
                    >
                      Login
                    </ModalBtn>
                  </ModalBtnBox>
                </form>

                <ForgotPasswordBox>
                  <SignUpTextBtn onClick={handleSignOn}> Sign up</SignUpTextBtn>
                </ForgotPasswordBox>
              </LogInInfo>
              {/* 
              {closable && (
                <CloseBtn className="modal-close" onClick={close}>
                  닫기
                </CloseBtn>
              )} */}
              {children}
            </ModalInner>
          </ModalWrapper>
        </>
      ) : (
        <>
          <SignUp
            visible={signUpModal}
            closable={true}
            maskClosable={true}
            onClose={handleSignOff}
          />
        </>
      )}
    </>
  );
}

export default LoginModal;

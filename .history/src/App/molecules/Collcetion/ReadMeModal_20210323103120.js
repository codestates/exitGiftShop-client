import React, { useEffect } from "react";
import styled from "styled-components";
<<<<<<< HEAD
import { useSelector, useDispatch } from "react-redux";
=======
>>>>>>> 073ea8f7ea8d8efc98df06290f3c3b08fc0a578d

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  left: 0px;
  bottom: 0;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  display: ${(props) => (props.visible ? "block" : "none")};
  z-index: 1000;
  outline: 0;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
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

function ReadMeModal({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
}) {
<<<<<<< HEAD
  const dispatch = useDispatch();

=======
>>>>>>> 073ea8f7ea8d8efc98df06290f3c3b08fc0a578d
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

<<<<<<< HEAD
  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };

  const { selectedCollection } = useSelector((state) => state.auction);
  // useEffect(() => {
  //   dispatch(selectedCollection());
  // }, [dispatch]);
=======
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
>>>>>>> 073ea8f7ea8d8efc98df06290f3c3b08fc0a578d
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        onClick={maskClosable ? onMaskClick : null}
        className={className}
        tabIndex="-1"
        visible={visible}
      >
<<<<<<< HEAD
        {selectedCollection.art_uu.art_desc}
        <ModalInner
          tabIndex="0"
          className="modal-inner"
          onClick={close}
        ></ModalInner>
=======
        <ModalInner tabIndex="0" className="modal-inner"></ModalInner>
>>>>>>> 073ea8f7ea8d8efc98df06290f3c3b08fc0a578d
      </ModalWrapper>
    </>
  );
}

export default ReadMeModal;

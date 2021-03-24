import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: relative;
  top: -1000px;
  left: 0px;
  bottom: 0;
  right: 0px;
  z-index: 1;
`;

const ModalWrapper = styled.div`
  box-sizing: content-box;
  position: absolute;
  background-color: white;
  margin: 20px;
  padding: 20px;
  top: 1889px;
  left: 80px;
  width: 1400px;
  display: ${(props) => (props.visible ? "block" : "none")};
  z-index: 2;
  transform: scale(0.95);
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: -webkit-sticky;
  position: sticky;
  top: 200px;
  box-shadow: 10px 10px
  background-color: #fff;
  border-radius: 10px;
  transform: translateY(-50%);
  padding: 20px;
  color: black;
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

function ReadMeModal({ className, onClose, maskClosable, visible }) {
  // const file_path = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/file/`;
  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch]);

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };

  const { selectedCollection } = useSelector((state) => state.auction);
  useEffect(() => {}, [dispatch]);
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        onClick={maskClosable ? onMaskClick : null}
        className={className}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner tabIndex="0" className="modal-inner" onClick={close}>
          <div>{selectedCollection.art_uu.art_title}</div>
          <div>{selectedCollection.art_uu.art_desc}</div>
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

export default ReadMeModal;

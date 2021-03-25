import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const ModalOverlay = styled.div`
  box-sizing: border-box;
  position: fixed;
  display: ${(props) => (props.visible ? "block" : "none")};
  z-index: 1;
`;

const ModalWrapper = styled.div`
  box-sizing: border-box;
  background-color: white;
  position: fixed;
  border-radius: 10px;
  display: ${(props) => (props.visible ? "block" : "none")};
  z-index: 2;
  transform: scale(0.95);
`;

const ModalInner = styled.div`
  box-sizing: content-box;
  display: flex;
  flex-direction: row;
  background-color: #cfcfcf;
  box-shadow: 15px 10px 6px #8a8a8a;
  border: 3px solid black;
  position: fixed;
  float: center;
  border-radius: 10px;
  padding: 20px;
  height: 50em;
  width: 85em;
  color: black;
  outline: none;
  display: flex;
  text-align: left;
  animation: fadeIn 1s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  // animation: fadeOut 2s;
  // @keyframes fadeOut {
  //   from {
  //     opacity: 1;
  //   }
  //   to {
  //     opacity: 0;
  //   }
  // }
  span {
    padding: 2em;
    padding-top: 0;
  }
  img {
    box-sizing: content-box;
    padding: 0.6em;
    width: 41em;
    object-fit: cover;
    overflow: hidden;
  }
  h1 {
    margin-bottom: 0.5em;
    font-family: "Roboto Mono", monospace;
    font-size: 40px;
    color: black;
    font-weight: 900;
  }
  div {
    font-family: "Roboto", sans-serif;
    font-size: 18px;
  }
`;

function ReadMeModal({ className, onClose, maskClosable, visible }) {
  const file_path = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/file/`;
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
          <img
            src={file_path + selectedCollection.art_uu.art_file_id}
            alt="img"
          />
          <span>
            <h1>{selectedCollection.art_uu.art_title}</h1>
            <div>{selectedCollection.art_uu.art_desc}</div>
          </span>
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

export default ReadMeModal;

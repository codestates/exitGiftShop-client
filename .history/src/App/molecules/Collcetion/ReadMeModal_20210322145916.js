import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchArt } from "../../reducers/slideContent";

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

function ReadMore({ children, maxCharacterCount = 100 }) {
  const text = children;
  const [isTruncated, setIsTruncated] = useState(true);
  const resultString = isTruncated ? text.slice(0, 100) : text;

  return (
    <p className="has-text-left">
      {resultString}
      <span className="tag is-info is-small">Read More</span>
    </p>
  );
}

function ReadMeModal({
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
  // todo: art_uu의 art_desc를 이니셜 state로 설정
  // slideContent의 대표이미지 클릭시,
  // ReadMeModal에 있는 해당 art_desc가 현재state로 변경
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        onClick={maskClosable ? onMaskClick : null}
        className={className}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner tabIndex="0" className="modal-inner"></ModalInner>
      </ModalWrapper>
    </>
  );
}

export default { ReadMore, ReadMeModal };

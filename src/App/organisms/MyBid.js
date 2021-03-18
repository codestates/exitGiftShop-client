import React from "react";
import styled from "styled-components";
import Mypage from "../molecules/Mypage";
import Slider from "@farbenmeer/react-spring-slider";

const StyledMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  height: 600px;
  background-color: white;

  @media screen and (max-width: 1080px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const MainSectionLeft = styled.section`
  width: 100%;
  height: 100%;
  border-right: 1px solid rgba(62, 62, 62, 0.8);
  padding: 45px 85px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1080px) {
    border: none;
  }
`;

const MainSectionRight = styled.section`
  width: 100%;
  height: 100%;
  border-left: 1px solid rgba(62, 62, 62, 0.8);
  padding: 45px 85px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1080px) {
    border: none;
  }
`;

const LeftBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 5px;
  button {
    margin: 3px;
    width: 80px;
    height: 35px;
    background-color: #979797;
    border-radius: 3px;
  }
`;

function Mybid() {
  return (
    <>
      <StyledMain>
        <MainSectionLeft>
          <LeftBtnBox>
            <div onClick={() => {}}>Account</div>
            <div>Wallet</div>
            <div>Invite</div>
          </LeftBtnBox>
        </MainSectionLeft>
        <MainSectionRight></MainSectionRight>
      </StyledMain>
    </>
  );
}

export default Mybid;
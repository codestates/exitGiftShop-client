import React from "react";
import styled from "styled-components";
import AutionTime from "../atoms/AuctionTime";
import DetailContent from "../molecules/DetailTitleTextBox";
import SlideContent from "../molecules/SlideContent";

const StyledMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  height: 600px;
  padding: 0 80px;

  @media screen and (max-width: 1080px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const MainSectionLeft = styled.section`
  /* background-color: blue; */
  width: 100%;
  height: 100%;
  border-right: 1px solid rgba(62, 62, 62, 0.8);
  padding: 45px 85px;

  @media screen and (max-width: 1080px) {
    border: none;
  }
`;

const MainSectionRight = styled.section`
  /* background-color: green; */
  height: 100%;
  width: 100%;
  border-left: 1px solid rgba(62, 62, 62, 0.8);
  padding: 45px 85px;
  @media screen and (max-width: 1080px) {
    border: none;
  }
`;

function Main() {
  return (
    <StyledMain>
      <MainSectionLeft>
        <SlideContent />
        <AutionTime />
      </MainSectionLeft>
      <MainSectionRight>
        <DetailContent />
      </MainSectionRight>
    </StyledMain>
  );
}

export default Main;

import React from "react";
import styled from "styled-components";

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1080px) {
    border: none;
  }
`;

const MainSectionRight = styled.section`
  /* background-color: green; */
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

function MyBid() {
  return (
    <StyledMain>
      <MainSectionLeft></MainSectionLeft>

      <MainSectionRight></MainSectionRight>
    </StyledMain>
  );
}

export default MyBid;

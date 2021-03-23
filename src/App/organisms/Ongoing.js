import React, {useEffect} from "react";
import styled from "styled-components";
import AuctionTime from "../atoms/AuctionTime/AuctionTime";
import DetailContent from "../molecules/onGoing/DetailTitleTextBox";
import SlideContent from "../molecules/onGoing/SlideContent";
import { getAuctions } from "../../reducers/auction";
import { useDispatch } from "react-redux";

const StyledMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 600px;
  margin-top: 20px;

  @media screen and (max-width: 1300px) {
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

  @media screen and (max-width: 1300px) {
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
  align-items: center;

  @media screen and (max-width: 1300px) {
    border: none;
    margin-top: 20px;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

function Ongoing() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuctions());
  }, [dispatch]);
  return (
    <StyledMain>
      <MainSectionLeft>
        <SlideContent />
        <AuctionTime />
      </MainSectionLeft>

      <MainSectionRight>
        <DetailContent />
      </MainSectionRight>
    </StyledMain>
  );
}

export default Ongoing;

import React, { useEffect } from "react";
import styled from "styled-components";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import Countdown from 'react-countdown';



const TimeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -80px;
  margin-bottom: 50px;
  svg {
    font-size: 30px;
    margin-right: 15px;
  }
`;

const TimerStlye = styled.div`
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 48px;
  color: #fff;
  font-weight: bold;
  padding-top: 35px;
  display: flex;
  flex: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-shadow: 0 0 10px red;
`;

const TimerChild = styled.section`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
  small {
    font-size: 24px;
  }
`;


const Completionist = () => <span>loading...</span>;

const AuctionTime = () => {
  const {  auctions, selectedAuction } = useSelector((state) => state.auction);
  const dispatch = useDispatch();

 
  useEffect(() => {
  },[dispatch]);
  
  return (
    <>
      <TimeBox>
        <TimerStlye>
        <Countdown date={
          Object.keys(auctions).length === 0 ? +moment().add(7,`d`) :
            Object.keys(selectedAuction).length !== 0 
            ? +moment(selectedAuction.auction_end_time) 
            : +moment(auctions[0].auction_end_time)
        }>
        <Completionist />
        </Countdown>
        </TimerStlye>
      </TimeBox>
    </>
  );
};
export default AuctionTime;

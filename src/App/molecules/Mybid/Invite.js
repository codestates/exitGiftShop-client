import React from "react";
import styled from "styled-components";

const MybidBox = styled.div`
  background-color: white;
  width: 80%;
  height: 100%;
  border-radius: 10px;
  color: black;
  box-shadow: 0px 5px 4px 1px rgba(0, 0, 0, 0.3);
  padding: 15px 15px;
`;

const BidTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  margin-bottom: 10px;
  font-size: 15px;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  h1 {
    font-size: 20px;
    margin-bottom: 15px;
  }
  span {
    margin-top: 2px;
    opacity: 0.6;
  }
`;

const BidDetail = styled.div`
  padding: 10px 150px;
  > div:first-child {
    width: 100%;
    height: 120px;
    border: 1px solid black;
    border-radius: 15px;
    margin-bottom: 40px;
  }
  > div:nth-child(2) {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
  > div:nth-child(2) div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
`;

const Invite = () => {
  return (
    <>
      <MybidBox>
        <BidTitle>
          <h1>YOU HAVE 8 INVITATION CARDS</h1>
          <span>Who's a great potential addition to ExitGift.Shop?</span>
          <span>You'll get credit for the invite on their profile?</span>
        </BidTitle>
        <BidDetail>
          <div></div>
          <div>
            <div>
              <span>Refernal Code :</span> <span>bitly.is/30fbjQ6</span>
            </div>
            <div>
              <span>Invited :</span> <span>32 Peolple</span>
            </div>
            <div>
              <span>Rewards :</span> <span>0.52 Puzzle</span>
            </div>
          </div>
        </BidDetail>
      </MybidBox>
    </>
  );
};

export default Invite;

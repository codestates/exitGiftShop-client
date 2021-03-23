import React from "react";
import styled from "styled-components";

const MybidBox = styled.div`
  background-color: white;
  width: 70%;
  height: 100%;
  border-radius: 10px;
  color: black;
  box-shadow: 0px 5px 4px 1px rgba(0, 0, 0, 0.3);
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BidDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  > div:nth-child(2) div:last-child {
    background-color: #f3f3f3;
  }
`;

const DetailBodyBox = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  padding-bottom: 22px;
  padding-top: 10px;

  span {
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    margin-top: 5px;
    padding-top: 5px;
    opacity: 0.5;
  }

  div:last-child {
    margin-top: 10px;
    width: 100%;
    padding: 15px;
    border: 1px solid #d4aea9;
    border-radius: 5px;
  }
  div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    top: -10px;
    font-size: 22px;
  }
`;

const Account = () => {
  return (
    <>
      <MybidBox>
        <BidDetailBox>
          <DetailBodyBox>
            <div>
              <h1>Profile</h1>
            </div>
            <span>Username</span>
            <div>RHEEUNION</div>
          </DetailBodyBox>
          <DetailBodyBox>
            <div>
              <h1>Email</h1>
            </div>
            <span>Primary Login</span>
            <div>rheeunion@gmail.com</div>
          </DetailBodyBox>
          <DetailBodyBox>
            <div>
              <h1>Password</h1>
            </div>
            <span>
              You cannot change a password as your current login method does not
              have a password.
            </span>
          </DetailBodyBox>
        </BidDetailBox>
      </MybidBox>
    </>
  );
};

export default Account;

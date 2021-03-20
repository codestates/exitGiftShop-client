import React from "react";
import {
  faChevronLeft,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MybidBox = styled.div`
  background-color: white;
  width: 80%;
  height: 100%;
  border-radius: 10px;
  color: black;
  box-shadow: 0px 5px 4px 1px rgba(0, 0, 0, 0.3);
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BidTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  h1 {
    font-size: 20px;
    margin-left: 210px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    padding: 8px;
  }
`;
const DetailBodyBox = styled.div`
  width: 100%;
  div {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }
  input {
    width: 100%;
    height: 100px;
    margin-top: 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    outline: none;
    font-size: 25px;
  }
`;
const BidBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  button {
    margin-bottom: 15px;
    width: 100%;
    height: 80px;
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    outline: none;
    cursor: pointer;
    background-color: #e98d8d;
    font-size: 20px;
    &:hover {
      background-color: rgba(0, 0, 0, 1);
      color: white;
      transition: 0.3s ease-in-out;
    }
    &:active {
      box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.3);
    }
  }
`;

function FaucetBeta() {
  return (
    <>
      <MybidBox>
        <BidTitle>
          <Link to="/mybid/wallet">
            <FontAwesomeIcon icon={faChevronLeft} />
          </Link>
          <h1>faucet beta</h1>
        </BidTitle>
        <DetailBodyBox>
          <input></input>
          <div>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <input></input>
        </DetailBodyBox>
        <BidBtnBox>
          <button>
            Connect<br></br>Wallet
          </button>
        </BidBtnBox>
      </MybidBox>
    </>
  );
}

export default FaucetBeta;

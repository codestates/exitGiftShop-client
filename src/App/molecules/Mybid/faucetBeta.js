import React, { useState } from "react";
import {
  faChevronLeft,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link } from "react-router-dom";
import bitcoin from "../../../images/bitcoin.png";
import paddle from "../../../images/paddle.png";
import puzzle from "../../../images/puzzle.png";

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
  justify-content: space-between;
  font-size: 25px;
  h1 {
    font-size: 20px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    padding: 8px;
    margin-right: 10px;
  }
`;
const DetailBodyBox = styled.div`
  width: 100%;
  div {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }
  > :last-child div select {
    background-color: rgba(52, 44, 44, 0.4);
    border-radius: 10px;
    width: 134px;
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

const DetailInputBox = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  outline: none;
  font-size: 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 10px;
  h1 {
    font-size: 20px;
    height: 100%;
  }
  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 45px;
  }
  select {
    border: none;
    background-color: white;
    width: 150px;
    font-size: 20px;
    outline: none;
    padding-left: 10px;
  }
`;

const ImgLogo = styled.img`
  width: 45px;
  height: 45px;
  margin-top: 4px;
`;

function FaucetBeta() {
  const [logo, setLogo] = useState(puzzle);

  const handleChange = (e) => {
    if (e.target.value === "puzzle") {
      setLogo(puzzle);
    } else if (e.target.value === "bitcoin") {
      setLogo(bitcoin);
    } else if (e.target.value === "paddle") {
      setLogo(paddle);
    }
  };
  return (
    <>
      <MybidBox>
        <BidTitle>
          <Link to="/mybid/wallet">
            <FontAwesomeIcon icon={faChevronLeft} />
          </Link>
          <h1>faucet beta</h1>
          <div></div>
        </BidTitle>
        <DetailBodyBox>
          <DetailInputBox>
            <h1>From</h1>
            <div>
              <input placeholder="0.0"></input>
              <ImgLogo src={logo} alt="puzzle" />
              <select onChange={handleChange}>
                <option value="puzzle">puzzle</option>
                <option value="bitcoin">bitcoin</option>
                <option value="paddle">paddle</option>
              </select>
            </div>
          </DetailInputBox>

          <div>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>

          <DetailInputBox>
            <h1>To</h1>
            <div>
              <input placeholder="0.0"></input>
              <select>
                <option value="bitcoin">puzzle</option>
                <option value="bitcoin">bitcoin</option>
                <option value="bitcoin">paddle</option>
              </select>
            </div>
          </DetailInputBox>
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

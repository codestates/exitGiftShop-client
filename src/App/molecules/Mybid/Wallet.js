import React from "react";
import { faWallet, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import paddle from "../../../images/paddle.png";
import bitcoin from "../../../images/bitcoin.png";
import puzzle from "../../../images/puzzle.png";
import { Link } from "react-router-dom";

const MybidBox = styled.div`
  background-color: white;
  width: 80%;
  height: 100%;
  border-radius: 10px;
  color: black;
  box-shadow: 0px 5px 4px 1px rgba(0, 0, 0, 0.3);
  padding: 15px 15px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 30px;
  }
  span {
    font-size: 20px;
    opacity: 0.6;
  }
  div {
    background-color: gray;
    border-radius: 10px;
    height: 25px;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
  }
`;

const LogoImg = styled.img`
  width: 40px;
  height: 40px;
  margin: 0px 10px;
`;

const BidTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const BidDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    height: 80px;
    display: flex;
    align-items: center;
  }
`;
const DetailHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 12px;
    opacity: 0.7;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);

    /* border-bottom: 5px solid
      ${(props) => (props.current ? "#00A1EE" : "transparent")}; */
  }
`;

const DetailBodyBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

function Wallet() {
  return (
    <>
      <MybidBox>
        <BidTitle>
          <Link to="/mybid/faucetbeta">
            <FontAwesomeIcon icon={faWallet} size="2x" />
          </Link>
          <TextBox>
            <h1>Mr.Rhee</h1>
            <span>￦ 23,950,000,000</span>
            <div>0x3937b58f</div>
          </TextBox>
          <Link to="/mybid/settings">
            <FontAwesomeIcon icon={faCog} size="2x" />
          </Link>
        </BidTitle>

        <BidDetail>
          <DetailHeaderBox>
            <div>
              <span>ASSETS</span>
            </div>
            <div>
              <span>COLLECTABLES</span>
            </div>
          </DetailHeaderBox>

          <DetailBodyBox>
            <div>
              <LogoImg src={puzzle} alt="" />
              <span>Puzzle</span>
            </div>
            <div>
              <span>12</span>
            </div>
          </DetailBodyBox>
          <DetailBodyBox>
            <div>
              <LogoImg src={bitcoin} alt="" />
              <span>Bitcoin</span>
            </div>
          </DetailBodyBox>
          <DetailBodyBox>
            <div>
              <LogoImg src={paddle} alt="" />
              <span>Paddle</span>
            </div>
          </DetailBodyBox>
        </BidDetail>
      </MybidBox>
    </>
  );
}

export default Wallet;

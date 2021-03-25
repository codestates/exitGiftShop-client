import React, { useState, useEffect } from "react";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import paddle from "../../../images/paddle.png";
import bitcoin from "../../../images/bitcoin.png";
import puzzle from "../../../images/puzzle.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const MybidBox = styled.div`
  background-color: white;
  width: 70%;
  height: 100%;
  border-radius: 10px;
  color: black;
  box-shadow: 0px 5px 4px 1px rgba(0, 0, 0, 0.3);
  padding: 15px 30px;
`;


const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-family: "Abhaya Libre", serif;
    font-size: 2.5em;
  }
  span {
    font-size: 1.5em;
    opacity: 0.6;
  }
  div {
    background-color: #ccc;
    font-size: 1em;
    border-radius: 10px;
    height: 30px;
    width: 120%;
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
  margin-left: 15px;
`;


const BidDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 20px;
  height: 300px;
  > :first-child {
    display: flex;
    margin-top: 20px;
  }
  > :not(:first-child) div {
    height: 80px;
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: white;
    outline: none;
    border: none;
    font-size: 20px;
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
    opacity: 0.7;

    /* border-bottom: 5px solid
      ${(props) => (props.current ? "#00A1EE" : "transparent")}; */
  }
  button {
    font-size: 16px;

    width: 100%;
    outline: none;
    border: none;
    background-color: white;
    cursor: pointer;
    padding-bottom: 10px;
  }
  .handle_click {
    border-bottom: 5px solid #00a1ee;
  }
`;

const DetailBodyBox = styled(Link)`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

function Wallet() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
  }, [dispatch]);


  const [click, setClick] = useState(true);

  const handlCilck = () => {
    setClick(true);
  };
  const handleClick2 = () => {
    setClick(false);
  };

  return (
    <>
      <MybidBox>
        <BidTitle>
          {/* <Link to="/mybid/faucetbeta"></Link> */}
          <div></div>
          <TextBox>
            <h1>{currentUser.user_nick}</h1>
            <span>{currentUser.wallet_now_deposit.toLocaleString(`ko-KR`, { style: `currency`, currency: `KRW` })}</span>
            <div>{currentUser.uuid}</div>
          </TextBox>
          <Link to="/mybid/settings">
            <FontAwesomeIcon icon={faCog} size="2x" />
          </Link>
        </BidTitle>

        <BidDetail>
          <DetailHeaderBox>
            <div>
              <button
                onClick={handlCilck}
                className={click ? "handle_click" : ""}
              >
                <span>ASSETS</span>
              </button>
              <button
                onClick={handleClick2}
                className={click ? "" : "handle_click"}
              >
                <span>COLLECTABLES</span>
              </button>
            </div>
          </DetailHeaderBox>

          {click ? (
            <>
              <DetailBodyBox to="/mybid/faucetbeta">
                <div>
                  <LogoImg src={puzzle} alt="puzzle" />
                  <span>Puzzle</span>
                </div>
                <div>
                  <span>{currentUser.puzzles.length}</span>
                </div>
              </DetailBodyBox>
              <DetailBodyBox to="/mybid/faucetbeta">
                <div>
                  <LogoImg src={bitcoin} alt="bitcoin" />
                  <span>Bitcoin</span>
                </div>
                <div>
                  <span>{currentUser.wallet_now_coin}</span>
                </div>
              </DetailBodyBox>
              <DetailBodyBox to="/mybid/faucetbeta">
                <div>
                  <LogoImg src={paddle} alt="paddle" />
                  <span>Paddle</span>
                </div>
                <div>
                  <span>{currentUser.pd}</span>
                </div>
              </DetailBodyBox>
            </>
          ) : (
            <>
              <DetailBodyBox to="/mybid/faucetbeta">
                <div>
                  <LogoImg src={puzzle} alt="puzzle" />
                  <span>Puzzle</span>
                </div>
                <div>
                  <span>COLLECTABLES</span>
                </div>
              </DetailBodyBox>
              <DetailBodyBox to="/mybid/faucetbeta">
                <div>
                  <LogoImg src={bitcoin} alt="bitcoin" />
                  <span>Bitcoin</span>
                </div>
              </DetailBodyBox>
              <DetailBodyBox to="/mybid/faucetbeta">
                <div>
                  <LogoImg src={paddle} alt="paddle" />
                  <span>Paddle</span>
                </div>
              </DetailBodyBox>
            </>
          )}
        </BidDetail>
      </MybidBox>
    </>
  );
}

export default Wallet;

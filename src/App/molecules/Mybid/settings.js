import React from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

  > div:nth-child(2) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

const BidTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  font-size: 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  > div {
    display: flex;
    h2 {
      margin-left: 15px;
    }
  }
`;

const DetailBodyBox = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 30px;

  p {
    opacity: 0.5;
    margin-top: 5px;
  }

  select {
    width: 100%;
    height: 55px;
    font-size: 20px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    outline: none;
    background-color: white;
    margin-top: 20px;
    padding: 0 10px;
    cursor: pointer;
  }
`;

function Settings() {
  return (
    <>
      <MybidBox>
        <BidTitle>
          <div>
            <Link to="/mybid/wallet">
              <FontAwesomeIcon icon={faChevronLeft} />
            </Link>
            <h2>Settings</h2>
          </div>

          <div></div>
        </BidTitle>
        <DetailBodyBox>
          <h1>Currency</h1>
          <p>Updated based on Asia/Seoul Timezone.</p>
          <select>
            <option value="KRW">KRW - Korean Won</option>
            <option value="USD">USD - Dollar</option>
          </select>
        </DetailBodyBox>
        <DetailBodyBox>
          <h1>Language</h1>
          <p>Current Language : Korean (South)</p>
          <select>
            <option value="Korean">Korean</option>
            <option value="english">English</option>
          </select>
        </DetailBodyBox>
      </MybidBox>
    </>
  );
}

export default Settings;

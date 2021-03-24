import React, { useEffect } from "react";
import styled from "styled-components";
import moment from 'moment';
import Countdown from 'react-countdown';

const MybidBox = styled.div`
  width: 80%;
  height: 100%;
  border-radius: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    /* 세로 스크롤 넓이 */
    width: 8px;
    /* 가로 스크롤 높이 */
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;
const DetailBodyBox = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
  }
  width: 100%;
  img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin-right: 20px;
    margin-bottom: 15px;
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 15px;
  padding-left: 5px;
  div {
    font-family: "Roboto Mono", monospace;
    font-size: 20px;
  }
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 15px;
`;
const Completionist = () => <span>loading...</span>;

const TxHistory = () => {
  const file_path = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/file/`;
  return (
    <>
      <MybidBox>
          <DetailBodyBox>
          <div>
            <img src={file_path + "2"} alt="" />
            <TextBox>
              <div>apple</div>
              <span>bid price : {(1000).toLocaleString(`ko-KR`, { style: `currency`, currency: `KRW` })}</span>
              <Countdown date={+moment().add(1000000, 's')}>
                <Completionist />
              </Countdown>
            </TextBox>
          </div>
        </DetailBodyBox>
      </MybidBox>
      <MybidBox>
          <DetailBodyBox>
          <div>
            <img src={file_path + "3"} alt="" />
            <TextBox>
              <div>pie</div>
              <span>bid price : {(700000).toLocaleString(`ko-KR`, { style: `currency`, currency: `KRW` })}</span>
              <Countdown date={+moment().add(333000, 's')}>
                <Completionist />
              </Countdown>
            </TextBox>
          </div>
        </DetailBodyBox>
      </MybidBox>
      <MybidBox>
          <DetailBodyBox>
          <div>
            <img src={file_path + "4"} alt="" />
            <TextBox>
              <div>beeple</div>
              <span>bid price : {(10000000).toLocaleString(`ko-KR`, { style: `currency`, currency: `KRW` })}</span>
              <Countdown date={+moment().add(3453, 's')}>
                <Completionist />
              </Countdown>
            </TextBox>
          </div>
        </DetailBodyBox>
      </MybidBox>
    </>
  );
};

export default TxHistory;

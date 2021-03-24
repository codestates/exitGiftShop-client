/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import styled from "styled-components";
// import picture from "../../../images/picture.png";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import Countdown from 'react-countdown';
import moment from 'moment';

const MybidBox = styled.div`
  width: 80%;
  height: 100%;
  border-radius: 10px;
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

const ActiveBid = () => {
  const dispatch = useDispatch();
  const { auctions } = useSelector((state) => state.auction);
  useEffect(() => {}, [dispatch]);
  const file_path = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/file/`;
  return (
    <>
      <MybidBox>
        { auctions.map((auction, i) => {
            return <DetailBodyBox key={i}>
              <div>
                <img src={file_path + auction.art_uu.art_file_id} alt="" />
                <TextBox>
                  <div>{auction.art_uu.art_title}</div>
                  <span>Recent bid : KRW {auction.bids[0].bid_price}</span>
                  <Countdown date={+moment(auction.auction_end_time) }>
                    <Completionist />
                  </Countdown>
                </TextBox>
              </div>

              {/* <IconBox>
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faSignOutAlt} rotation={270} />
              </IconBox> */}
            </DetailBodyBox>
          })
        }
      </MybidBox>
    </>
  );
};

export default ActiveBid;

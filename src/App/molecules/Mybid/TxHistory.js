import React, { useEffect } from "react";
import styled from "styled-components";
// import picture from "../../../images/picture.png";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserBids
} from "../../../reducers/user";
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
  const dispatch = useDispatch();
  const { currentUser, getBids } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUserBids(currentUser.uuid));
  }, [dispatch]);
  const file_path = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/file/`;
  return (
    <>
      <MybidBox>
      {getBids.map((bid, i) => {
        return <DetailBodyBox key={i}>
          <div>
            <img src={file_path + bid.bid_auction_uu.art_uu.art_file_id} alt="" />
            <TextBox>
              <div>{bid.bid_auction_uu.art_uu.art_title}</div>
              <span>bid price : {bid.bid_price.toLocaleString(`ko-KR`, { style: `currency`, currency: `KRW` })}</span>
              <Countdown date={+moment(bid.bid_auction_uu.auction_end_time) }>
                <Completionist />
              </Countdown>
            </TextBox>
          </div>

          {/* <IconBox>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faSignOutAlt} rotation={270} />
          </IconBox> */}
        </DetailBodyBox>
        })}
      </MybidBox>
    </>
  );
};

export default TxHistory;

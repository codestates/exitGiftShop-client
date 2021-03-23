import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LoginModal from "./LoginModal";
import { siginin } from "../../../reducers/user";
import { selected, postBid } from "../../../reducers/auction";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

const Btn = styled.div`
  width: 100%;
  > button {
    width: 95%;
    height: 50px;
    border-radius: 10px;
    margin-top: 20px;
    outline: none;
    cursor: pointer;
    font-size: 20px;
  }
`;
function SignBidBtn() {
  const [loginModalOn, setLoginModalOn] = useState(false);
  const { currentUser, islogin } = useSelector((state) => state.user);
  const { auctions, selectedAuction } = useSelector((state) => state.auction);
  const dispatch = useDispatch();

  const handleModalOn = () => {
    setLoginModalOn(true);
  };

  useEffect(() => {
    // dispatch(getAuctions());
  }, [dispatch])


  const handleModalOff = () => {
    setLoginModalOn(false);
  };
  const handleIslogin = () => {
    console.log(currentUser, "ddddddddddddd");
    if (currentUser.uuid) {
      dispatch(siginin());
    }
  };

  const handleBiding = async () => {
    let bidObj = {};
    let auctionObj = {};
    if(Object.keys(selectedAuction).length === 0) {
      bidObj.auction_uuid = auctions[0].uuid;
      bidObj.user_uuid = currentUser.uuid;
      bidObj.price = Math.floor((auctions[0].auction_now_price + 1000) * 1.5);
      const endTime = moment(auctions[0].auction_end_time).add(30, 'minutes').format();
      auctionObj.end_time = endTime;
      auctionObj.now_price = Math.floor((auctions[0].auction_now_price + 1000) * 1.5);
    } else {
      bidObj.auction_uuid = selectedAuction.uuid;
      bidObj.user_uuid = currentUser.uuid;
      bidObj.price = Math.floor((selectedAuction.auction_now_price + 1000) * 1.5);
      const endTime = moment(selectedAuction.auction_end_time).add(30, 'minutes').format();
      auctionObj.end_time = endTime;
      auctionObj.now_price = Math.floor((selectedAuction.auction_now_price + 1000) * 1.5);
    }
    const bid = await dispatch(postBid({bidObj, auctionObj}));
    if(!bid) {
      return;
    }
    dispatch(selected(bid.payload));
  };
  return (
    <Btn>
      {islogin ? (
        <>
          <button onClick={handleBiding}>Bid</button>
        </>
      ) : (
        <>
          <button onClick={handleModalOn}>Sign in to bid</button>
        </>
      )}

      {loginModalOn && (
        <LoginModal
          visible={loginModalOn}
          closable={true}
          maskClosable={true}
          onClose={handleModalOff}
        ></LoginModal>
      )}
    </Btn>
  );
}

export default SignBidBtn;

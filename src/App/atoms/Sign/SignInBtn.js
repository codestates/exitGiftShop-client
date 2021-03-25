import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LoginModal from "./LoginModal";
import { currentUserUp } from "../../../reducers/user";
import { postBid } from "../../../reducers/auction";
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
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 500;
  }
`;
const BtnStyle = styled.button`
  &:active {
    transform: translate3d(2px, 2px, 0px);
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
  }, [dispatch]);

  const handleModalOff = () => {
    setLoginModalOn(false);
  };

  const handleBiding = async () => {
    let bidObj = {};
    let auctionObj = {};
    let userObj = {};
    if (Object.keys(selectedAuction).length === 0) {
      if (currentUser.wallet_now_deposit < auctions[0].auction_now_price) {
        alert(`현금이 부족합니다`);
        return;
      }
      if (currentUser.pd <= 0) {
        alert(`패들이 부족합니다`);
        return;
      }
      userObj.wallet_now_deposit =
        currentUser.wallet_now_deposit - auctions[0].auction_now_price;
      userObj.pd = currentUser.pd - 1;
      bidObj.auction_uuid = auctions[0].uuid;
      bidObj.user_uuid = currentUser.uuid;
      bidObj.price = Math.floor((auctions[0].auction_now_price + 1000) * 1.5);
      const endTime = moment(auctions[0].auction_end_time)
        .add(30, "minutes")
        .format();
      auctionObj.end_time = endTime;
      auctionObj.now_price = Math.floor(
        (auctions[0].auction_now_price + 1000) * 1.5
      );
    } else {
      if (currentUser.wallet_now_deposit < selectedAuction.auction_now_price) {
        return;
      }
      if (currentUser.pd <= 0) {
        return;
      }
      userObj.wallet_now_deposit =
        currentUser.wallet_now_deposit - selectedAuction.auction_now_price;
      userObj.pd = currentUser.pd - 1;
      bidObj.auction_uuid = selectedAuction.uuid;
      bidObj.user_uuid = currentUser.uuid;
      bidObj.price = Math.floor(
        (selectedAuction.auction_now_price + 1000) * 1.5
      );
      const endTime = moment(selectedAuction.auction_end_time)
        .add(30, "minutes")
        .format();
      auctionObj.end_time = endTime;
      auctionObj.now_price = Math.floor(
        (selectedAuction.auction_now_price + 1000) * 1.5
      );
    }
    const bid = await dispatch(postBid({ bidObj, auctionObj, userObj }));
    if (!bid) {
      return;
    }
    dispatch(currentUserUp(bid.payload.user));
  };
  return (
    <Btn>
      {islogin ? (
        <>
          <BtnStyle onClick={handleBiding}>Bid</BtnStyle>
        </>
      ) : (
        <>
          <button onClick={handleModalOn}>Sign in to Bid</button>
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

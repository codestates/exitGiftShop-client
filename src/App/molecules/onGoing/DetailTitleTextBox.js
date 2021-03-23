import React, { useEffect } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignBidBtn from "../../atoms/Sign/SignInBtn";
import FollowBtn from "../../atoms/FollowBtn";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
// import {
//   put,
//   selected
// } from "../../../reducers/auction";

const DetailTitleTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  h1 {
    font-size: 50px;
  }
  div {
    font-size: 30px;
  }
  div svg {
    margin-left: 5px;
  }
`;
const DetailMainTextBox = styled.div`
  h2 {
    margin: 15px 0px;
  }
  padding-right: 25px;
  font-size: 25px;
  margin: 10px 0;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-stretch;
`;

const BtnBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 37px;
`;

const StyleTwit = styled.div`
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2.5px;
    margin-top: 20px;
  }
`;

function DetailContent() {
  const dispatch = useDispatch();
  const { auctions, selectedAuction, loading, error } = useSelector(
    (state) => state.auction
  );
  useEffect(() => {
  }, [dispatch]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Cannot display</p>;
  return (
    <>
      <DetailWrapper>
        <DetailTitleTextBox>
          <h1>
            {Object.keys(selectedAuction).length === 0
              ? auctions.map((auction, i) => {
                  if (i === 0) {
                    return auction.art_uu.art_title;
                  }
                  return '';
                })
              : selectedAuction.art_uu.art_title}
          </h1>
          <div>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faSignOutAlt} rotation={270} />
          </div>
        </DetailTitleTextBox>

        <DetailMainTextBox>
          <span>
            Last Bid(
            {Object.keys(selectedAuction).length === 0
              ? auctions.map((auction, i) => {
                  if (i === 0) {
                    return auction.bids.length;
                  }
                  return '';
                })
              : selectedAuction.bids.length}
            Bids)
          </span>
          <h2>
            KRW{" "}
            {Object.keys(selectedAuction).length === 0
              ? auctions.map((auction, i) => {
                  if (i === 0) {
                    return auction.auction_now_price;
                  }
                  return '';
                })
              : selectedAuction.auction_now_price}
          </h2>
          <h2>
            Hammer Price KRW{" "}
            {Object.keys(selectedAuction).length === 0
              ? auctions.map((auction, i) => {
                  if (i === 0) {
                    if (auction.auction_hammer_price === 0) {
                      return `-`;
                    }
                    return auction.auction_hammer_price;
                  }
                  return '';
                })
              : selectedAuction.auction_hammer_price === 0
              ? `-`
              : selectedAuction.auction_hammer_price}
          </h2>
        </DetailMainTextBox>

        <StyleTwit>
          <TwitterTweetEmbed
            tweetId={"463440424141459456"}
            options={{ cards: "hidden", width: 550 }}
          />
        </StyleTwit>

        <BtnBox>
          <SignBidBtn />
          <FollowBtn />
        </BtnBox>
      </DetailWrapper>
    </>
  );
}

export default DetailContent;

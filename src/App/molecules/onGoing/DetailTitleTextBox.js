import React, { useEffect } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignBidBtn from "../../atoms/Sign/SignInBtn";
// import FollowBtn from "../../atoms/FollowBtn";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  postLike
} from "../../../reducers/auction";

const DetailTitleTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  h1 {
    font-family: "Abhaya Libre", serif;
    font-weight: 800;
    font-size: 50px;
  }
  div {
    font-size: 25px;
    justify-content: space-between;
  }
  div svg {
    margin-left: 5px;
  }
`;
const DetailMainTextBox = styled.div`
  display: flex;
  flex-direction: column;
  // div {
  //   display: flex;
  //   flex-direction: row;
  //   font-family: "Roboto", sans-serif;
  //   font-size: 20px;
  // }
  // span {
  //   display: flex;
  //   align-items: flex-end;
  //   font-family: "Roboto", sans-serif;
  //   font-size: 14px;
  // }
  // h1 {
  //   font-family: "Roboto", sans-serif;
  //   font-size: 20px;
  //   font-weight: 800;
  // }
`;

const LastBid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  padding-top: 20px;
  padding-bottom: 10px;
  span {
    display: flex;
    align-items: flex-end;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
  }
  div {
    margin-left: auto;
    font-weight: 800;
  }
`;

const HammerPrice = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  span {
    font-weight: 800;
  }
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-stretch;
  padding-right: 60px;
  padding-top: 60px;
`;

const BtnBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 37px;
  margin-left: 2.5px;
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
  const { auctions, selectedAuction, loading, error } = useSelector((state) => state.auction);
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {}, [dispatch]);
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
                  return "";
                })
              : selectedAuction.art_uu.art_title}
          </h1>
          <div>
            { Object.keys(currentUser).length === 0 ?
              <FontAwesomeIcon icon={faHeart} />
              :
              Object.keys(selectedAuction).length === 0
              ? <FontAwesomeIcon icon={faHeart} onClick={() => dispatch(postLike(
                { auction_uuid: auctions[0].uuid, user_uuid: currentUser.uuid }
              ))} />
              : <FontAwesomeIcon icon={faHeart} onClick={() => dispatch(postLike(
                { auction_uuid: selectedAuction.uuid, user_uuid: currentUser.uuid }
              ))} />
            }
            {/* <FontAwesomeIcon icon={faShareAlt} rotation={270} /> */}
          </div>
        </DetailTitleTextBox>

        <DetailMainTextBox>
          <LastBid>
            Last Bid
            <span>
              (
              {Object.keys(selectedAuction).length === 0
                ? auctions.map((auction, i) => {
                    if (i === 0) {
                      return auction.bids.length;
                    }
                    return "";
                  })
                : selectedAuction.bids.length}
              Bids)
            </span>
            <div>
              {Object.keys(selectedAuction).length === 0
                ? auctions.map((auction, i) => {
                    if (i === 0) {
                      return auction.auction_now_price.toLocaleString(`ko-KR`, { style: `currency`, currency: `KRW` });
                    }
                    return "";
                  })
                : selectedAuction.auction_now_price.toLocaleString(`ko-KR`, { style: `currency`, currency: `KRW` })}
            </div>
          </LastBid>
          <HammerPrice>
            <div>Hammer Price </div>
            <span>
              {Object.keys(selectedAuction).length === 0
                ? auctions.map((auction, i) => {
                    if (i === 0) {
                      if (auction.auction_hammer_price === 0) {
                        return `-`;
                      }
                      return auction.auction_hammer_price.toLocaleString(`ko-KR`, { style: `currency`, currency: `KRW` });
                    }
                    return "";
                  })
                : selectedAuction.auction_hammer_price === 0
                ? `-`
                : selectedAuction.auction_hammer_price.toLocaleString(`ko-KR`, { style: `currency`, currency: `KRW` })}
            </span>
          </HammerPrice>
        </DetailMainTextBox>

        <StyleTwit>
          <TwitterTweetEmbed
            tweetId={"463440424141459456"}
            options={{ cards: "hidden", width: 550 }}
          />
        </StyleTwit>

        <BtnBox>
          <SignBidBtn />
          {/* <FollowBtn /> */}
        </BtnBox>
      </DetailWrapper>
    </>
  );
}

export default DetailContent;

import React, { useEffect } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignBidBtn from "../atoms/Sign/SignInBtn";
import FollowBtn from "../atoms/FollowBtn";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchArtDetail } from "../../reducers/artDetail";

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
  const { artDetails, loading, error } = useSelector(
    (state) => state.auctionDetail
  );
  // todo: onClick=false > onClick=true state 변화
  // todo: 첫번째 클릭하고 나면 디테일이 바뀌고 그뒤로는 모달창이 뜨는 클릭으로 바뀜
  useEffect(() => {
    dispatch(fetchArtDetail());
  }, []);

  if (error) {
    return <p>Something went wrong! please, try again.</p>;
  }

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <>
      <DetailWrapper>
        <DetailTitleTextBox>
          <h1>
            Beepel'S<br></br>
            CROSSROAD #1/4
          </h1>
          <div>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faSignOutAlt} rotation={270} />
          </div>
        </DetailTitleTextBox>

        <DetailMainTextBox>
          <h2>Last Bid(24Bids) KRW 33,965,000,000</h2>
          <h2>Hammer Price KRW -</h2>
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

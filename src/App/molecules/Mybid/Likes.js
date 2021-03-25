import React, { useEffect } from "react";
import styled from "styled-components";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserLikes
} from "../../../reducers/user";
import moment from 'moment';


const MybidBox = styled.div`
  width: 80%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 15px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    /* 세로 스크롤 넓이 */
    width: 2px;

    /* 가로 스크롤 높이 */
    height: 8px;

    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
  scroll-y: hidden;
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

// const IconBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   margin-bottom: 15px;
// `;

const Likes = () => {
  const dispatch = useDispatch();
  const { currentUser, getLikes } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUserLikes(currentUser.uuid));
  });

  // const [click, setClick] = useState(true);
  // const handlCilck = () => {
  //   setClick(true);
  // };
  // const handleClick2 = () => {
  //   setClick(false);
  // };
  const file_path = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/file/`;
  return (
    <>
      <MybidBox>
        {getLikes.map((like, i) => {
        return <DetailBodyBox key={i}>
          <div>
            <img src={file_path + like.likes_auction_uu.art_uu.art_file_id} alt="" />
            <TextBox>
              <div>{like.likes_auction_uu.art_uu.art_title}</div>
              <span>Recent bid : {like.likes_auction_uu.auction_now_price.toLocaleString(`ko-KR`, { style: `currency`, currency: `KRW` })}</span>
              <span>{moment(like.updatedAt).format('[[]MM/DD[]] h:mm:ss a')}</span>
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

export default Likes;

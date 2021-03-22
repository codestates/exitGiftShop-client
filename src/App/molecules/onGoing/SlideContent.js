import React, { useEffect  } from "react";
import styled from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Coverflow from "react-coverflow";
import { useSelector, useDispatch } from "react-redux";
import { 
  getAuctions,
  selected
} from "../../../reducers/auction";

const StyleCover = styled.div`
  .coverflow__container__1P-xE {
    background-color: rgba(0, 0, 0, 0);
  }
  .coverflow__figure__3bk_C {
    box-shadow: none;
  }
`;

const SelectBtn = styled.div`
  position: relative;
  &:hover {
    opacity: 0.7;
  }
  div {
    &:hover {
      opacity: 1;
    }
    transition: opacity 0.5s ease-in-out;
  }
  transition: opacity 0.5s ease-in-out;
`;

const SlideImg = styled.img`
  border-radius: 10px;
`;
const FontStyle = styled.div`
  position: absolute;
  width: 300px;
  height: 380px;
  opacity: 0;
  top: 0px;
  text-align: center;
  svg {
    position: absolute;
    top: 90px;
    left: 90px;
    color: rgba(20, 20, 20, 0.7);
  }
`;

const fn = (e) => {
};


function SlideContent() {
  const dispatch = useDispatch();
  const {auctions, loading, error} = useSelector((state) => state.auction);
  const file_path = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/file/`
  
  useEffect(() => {
    dispatch(getAuctions());
  },[dispatch]);

  const renderSlide = () => {
    if (loading) return <p>Loading...</p>
    if (error) return <p>Cannot display</p>
    return auctions.map((auction, i) =>
      <SelectBtn key={i} onClick={() => dispatch(selected(auction))} onKeyUp={() => fn()} role="menuitem">
        <SlideImg
          src={file_path + auction.art_uu.art_file_id}
          alt="piture"
          style={{ display: "block", width: "100%" }}
        />
        <FontStyle>
          <FontAwesomeIcon icon={faSearch} size="2x" />
        </FontStyle>
      </SelectBtn>
    )
    
  }

  return (
    <>
      <StyleCover>
        <Coverflow
          width={600}
          height={500}
          displayQuantityOfSide={1}
          navigation={false}
          enableHeading={false}
          currentFigureScale={2}
          active={1}
        >
          {renderSlide()}
        </Coverflow>
      </StyleCover>
    </>
  );
}
export default SlideContent;


import React from "react";
import styled from "styled-components";
import beeple from "../../images/beeple.jpg";
import beeple2 from "../../images/beeple2.jpg";
import beeple3 from "../../images/beeples.jpg";
import AutionTime from "../atoms/AutionTime";
import Coverflow from "react-coverflow";

// const ContentStyle = styled(Slider)`
//   width: 600px;

//   .slick-slide div {
//     outline: none;
//     border-radius: 70px;
//     overflow: hidden;
//   }
//   .single-item {
//     width: 200px;
//   }
//   .slick-slide {
//     opacity: 0.3;
//     transition: opacity 0.3s ease-out;
//   }

//   .slick-active {
//     opacity: 1;
//     transition: opacity 0.3s ease-in;
//   }

//   .slick-cloned {
//     opacity: 0.3;
//     position: relative;
//   }
//   .slick-list {
//     border-radius: 70px;
//   }
//   .slick-dots {
//     display: flex;
//     background-color: white;
//     border-radius: 0 0 15px 15px;
//   }
// `;

// const SlideWrapper = styled.div`
//   text-align: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   > div {
//     margin-bottom: 10px;
//     font-size: 20px;
//   }
// `;

// const ImgStyle = styled.img`
//   height: 27rem;
//   width: 100%;
//   padding: 0 7px;
// `;

// function MainContent() {
//   const settings = {
//     lazyLoad: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     centerMode: true,
//     focusOnSelect: true,
//   };

//   return (
//     <>
//       <SlideWrapper>
//         <div>Live | Preview</div>
//         <ContentStyle {...settings}>
//           <div>
//             <ImgStyle src={beeple2} alt=""></ImgStyle>
//           </div>
//           <div>
//             <ImgStyle src={beeple} alt=""></ImgStyle>
//           </div>
//           <div>
//             <ImgStyle src={beeple3} alt=""></ImgStyle>
//           </div>
//         </ContentStyle>
//         <AutionTime />
//       </SlideWrapper>
//     </>
//   );
// }

// export default MainContent;

const fn = function () {
  /* do you want */
};
function SlideContent() {
  return (
    <>
      <Coverflow
        width={550}
        height={450}
        displayQuantityOfSide={1}
        navigation={false}
        enableHeading={false}
      >
        <div
          onClick={() => fn()}
          onKeyDown={() => fn()}
          role="menuitem"
          tabIndex="0"
        >
          <img
            src={beeple3}
            alt="title or description"
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <img
          src={beeple}
          alt="title or description"
          // data-action=""
        />
        <img
          src={beeple2}
          alt="title or description"
          // data-action=""
        />
      </Coverflow>
    </>
  );
}

export default SlideContent;

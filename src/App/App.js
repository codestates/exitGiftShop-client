import React from "react";
import GlobalStyles from "./organisms/GlobalStyles";
import Routers from "./Routers";
import styled from "styled-components";
import mainBg from "../images/mainBg.jpg";

const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;

function App() {
  return (
    <>
      <BackgroundImg src={mainBg} alt="" />
      <Routers />
      <GlobalStyles />
    </>
  );
}

export default App;

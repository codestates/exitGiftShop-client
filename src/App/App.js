import React from "react";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import mainBg from "../images/mainBg.jpg";
import LandingTemplate from "./templates/LandingTemplate";

import { HashRouter as Router } from "react-router-dom";

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
      {/* <BackgroundImg autoPlay={true} src={video} alt="background" /> */}
      <BackgroundImg src={mainBg} alt="background" />
      <Router>
        <LandingTemplate />
      </Router>
      {/* <Router>
        <Switch>
          <Route path="/" exact component={Ongoing} />
          <Route path="/mybid" component={MyBid} />
          <Route path="/collection" component={Collection} />
          <Route path="/support" component={Support} />
          <Route path="/signup" component={SignUp} />
          <Route path="#/mybid/account" component={Account} />
          <Route path="#/mybid/wallet" component={Wallet} />
          <Route path="#/mybid/invite" component={Invite} />
          <Route component={Pagenotfound} />
        </Switch>
      </Router> */}
      <GlobalStyles />
    </>
  );
}

export default App;

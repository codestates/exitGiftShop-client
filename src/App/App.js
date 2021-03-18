import React from "react";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import mainBg from "../images/mainBg.jpg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyBid from "./Pages/LandingSecond";
import Ongoing from "./Pages/LandingFirst";
import Collection from "./Pages/LandingThird";
import Support from "./Pages/LandingLast";
import Pagenotfound from "./Pages/Pagenotfound";
import SignUp from "./molecules/SignUp";
import LandingTemplate from "./templates/LandingTemplate";
import Wallet from "./molecules/Wallet";
import Account from "./molecules/Account";
import Invite from "./molecules/Invite";

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
      <BackgroundImg src={mainBg} alt="background" />
      <Router>
        <Switch>
          <LandingTemplate />
          <Route path="/" exact component={Ongoing} />
          <Route path="/bid" component={MyBid} />
          <Route path="/collection" component={Collection} />
          <Route path="/support" component={Support} />
          <Route path="/signup" component={SignUp} />
          <Route path="#/bid/account" component={Account} />
          <Route path="#/bid/wallet" component={Wallet} />
          <Route path="#/bid/invite" component={Invite} />
          <Route component={Pagenotfound} />
        </Switch>
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;

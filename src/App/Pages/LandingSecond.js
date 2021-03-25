import React from "react";
import { HashRouter as Router } from "react-router-dom";
import MyBid from "../organisms/MyBid";

function LandingSecond() {
  return (
    <>
      <Router>
        <MyBid />
      </Router>
    </>
  );
}

export default LandingSecond;

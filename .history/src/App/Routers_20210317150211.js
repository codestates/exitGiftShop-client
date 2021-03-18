import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./organisms/Landing";
import Home from "../Routes/Home";
import Bid from "../Routes/MyBid";
import Ongoing from "../Routes/Ongoing";
import Collection from "../Routes/Collection";
import Support from "../Routes/Support";
import Pagenotfound from "../Routes/Pagenotfound";
import SignUp from "./atoms/Sign";

function router() {
  return (
    <>
      <Router>
        <Landing />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ongoing" exact component={Ongoing} />
          <Route path="/bid" component={Bid} />
          <Route path="/collection" component={Collection} />
          <Route path="/support" component={Support} />
          <Route path="/signup" component={SignUp} />
          <Route component={Pagenotfound} />
        </Switch>
      </Router>
    </>
  );
}

export default router;

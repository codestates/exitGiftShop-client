import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./organisms/Header";
import Home from "../Routes/Home";
import Bid from "../Routes/Bid";
import Ongoing from "../Routes/Ongoing";
import Collection from "../Routes/Collection";
import Support from "../Routes/Support";
import English from "../Routes/English";
import Pagenotfound from "../Routes/Pagenotfound";
import Main from "./organisms/Main";

function router() {
  return (
    <Router>
      <>
        <Header />
        <Main />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ongoing" exact component={Ongoing} />
          <Route path="/bid" component={Bid} />
          <Route path="/collection" component={Collection} />
          <Route path="/support" component={Support} />
          <Route path="/english" component={English} />
          <Route component={Pagenotfound} />
        </Switch>
      </>
    </Router>
  );
}

export default router;

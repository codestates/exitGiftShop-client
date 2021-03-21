import React from "react";
import styled from "styled-components";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import Account from "../molecules/Mybid/Account";
import Wallet from "../molecules/Mybid/Wallet";
import Invite from "../molecules/Mybid/Invite";
import Pagenotfound from "../Pages/Pagenotfound";
import Ongoing from "./Ongoing";
import FaucetBeta from "../molecules/Mybid/faucetBeta";
import Settings from "../molecules/Mybid/settings";
import Likes from "../molecules/Mybid/Likes";

const StyledMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 70px;
  height: 600px;
  overflow: auto;

  @media screen and (max-width: 1300px) {
    flex-wrap: wrap;
    border: none;
  }
`;

const MainSectionLeft = styled.section`
  width: 100%;
  height: 100%;
  border-right: 1px solid rgba(62, 62, 62, 0.8);
  padding: 45px 85px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1300px) {
    border: none;
  }
`;

const MainSectionRight = styled.section`
  width: 100%;
  height: 100%;
  border-left: 1px solid rgba(62, 62, 62, 0.8);
  padding: 45px 85px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1300px) {
    border: none;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const LeftBtnBox = styled.div`
  width: 80%;
  display: flex;
  margin-bottom: 25px;
  font-size: 20px;
  color: black;
`;

const MybidBtnBox = styled.button`
  outline: none;
  cursor: pointer;
  margin: 0px 5px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
  width: 120px;
  height: 45px;
  border-radius: 3px;
  background-color: ${(props) => (props.current ? "white" : "gray")};
`;

function Mybid({ location: { pathname } }) {
  return (
    <>
      <StyledMain>
        <MainSectionLeft>
          <LeftBtnBox>
            <Link to="/mybid/account">
              <MybidBtnBox current={pathname === "/mybid/account"}>
                Account
              </MybidBtnBox>
            </Link>
            <Link to="/mybid/wallet">
              <MybidBtnBox current={pathname === "/mybid/wallet"}>
                Wallet
              </MybidBtnBox>
            </Link>
            <Link to="/mybid/invite">
              <MybidBtnBox current={pathname === "/mybid/invite"}>
                Invite
              </MybidBtnBox>
            </Link>
          </LeftBtnBox>
          <Switch>
            <Route path="/" exact component={Ongoing} />
            <Route path="/mybid" exact component={Wallet} />
            <Route path="/mybid/account" component={Account} />
            <Route path="/mybid/wallet" component={Wallet} />
            <Route path="/mybid/invite" component={Invite} />
            <Route path="/mybid/faucetbeta" component={FaucetBeta} />
            <Route path="/mybid/settings" component={Settings} />
            <Route component={Pagenotfound} />
          </Switch>
        </MainSectionLeft>

        <MainSectionRight>
          <LeftBtnBox>
            <Link>
              <MybidBtnBox>Active Bid</MybidBtnBox>
            </Link>
            <Link>
              <MybidBtnBox>Tx History</MybidBtnBox>
            </Link>
            <Link>
              <MybidBtnBox>Likes</MybidBtnBox>
            </Link>
          </LeftBtnBox>
          <Switch>
            <Route path="/mybid" component={Likes} />
            <Route component={Pagenotfound} />
          </Switch>
        </MainSectionRight>
      </StyledMain>
    </>
  );
}

export default withRouter(Mybid);

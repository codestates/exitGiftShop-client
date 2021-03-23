import React from "react";
import styled from "styled-components";
import {
  ScrollToTopOnMount,
  SectionsContainer,
  Section,
  Header,
} from "react-fullpage";
import LandingFirst from "../Pages/LandingFirst";
import LandingSecond from "../Pages/LandingSecond";
import LandingThird from "../Pages/LandingThird";
import LandingLast from "../Pages/LandingLast";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyleNav = styled.div`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  height: 130px;
  display: flex;
  align-items: center;
  padding: 0px 50px;
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  /* background-color: rgba(5, 5, 5, 1);
  box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.2); */
  z-index: 1;
`;

const ListStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  height: 100%;
  width: 100%;
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 0 30px;

  @media screen and (max-width: 1080px) {
    padding: 0 10px;
  }
`;

const NavHome = styled.a`
  display: flex;
  ::before {
    content: "EXITGIFT";
    color: #ce7777;
  }
`;

const StyleLink = styled.a`
  color: #ce7777;
  &:hover {
    color: white;
  }
  transition: color 0.3s ease-in-out;
`;

const NavList = styled.div`
  display: flex;
  overflow: visible;
`;

const LogoutBtn = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: #ce7777;
  margin-right: 160px;
  margin-left: 30px;
`;
function LandingTemplate() {
  let options = {
    sectionClassName: "section",
    anchors: ["/ongoing", "/mybid/wallet", "/collection", "/support"],
    // anchors: ["sectionOne", "sectionTwo", "sectionThree"],
    scrollbars: false,
    navigation: true,
    verticalAlign: false,
    sectionPaddingTop: "0px",
    sectionPaddingBottom: "0px",
    fitToSectionDelay: 500,
    autoScrolling: false,
    normalScrollElements: "collection",
  };
  return (
    <>
      <Header>
        <StyleNav>
          <ListStyle>
            <Item>
              <NavHome href="/">
                <h1>.SHOP</h1>
              </NavHome>
            </Item>
            <NavList>
              <Item>
                <StyleLink className="ongoing" href="#/ongoing">
                  Ongoing
                </StyleLink>
              </Item>
              <Item>
                <StyleLink className="mybid" href="#/mybid/wallet">
                  MyBid
                </StyleLink>
              </Item>
              <Item>
                <StyleLink className="collection" href="#/collection">
                  Collection
                </StyleLink>
              </Item>
              <Item>
                <StyleLink className="support" href="#/support">
                  Support
                </StyleLink>
              </Item>
            </NavList>
          </ListStyle>
          <LogoutBtn icon={faPowerOff} />
        </StyleNav>
      </Header>
      <ScrollToTopOnMount />

      <SectionsContainer {...options}>
        <Section>
          <LandingFirst />
        </Section>
        <Section>
          <LandingSecond />
        </Section>
        <Section>
          <LandingThird />
        </Section>
        <Section>
          <LandingLast />
        </Section>
      </SectionsContainer>
    </>
  );
}

export default LandingTemplate;

import React from "react";
import styled from "styled-components";
import {
  ScrollToTopOnMount,
  SectionsContainer,
  Section,
  Header,
} from "react-fullpage";
import MyBid from "../App/Pages/MyBid";
import Colletion from "../App/Pages/Collection";
import Ongoing from "../organisms/Ongoing";
import Support from "../App/Pages/Support";
import mainBg from "../images/mainBg.jpg";

const StyleNav = styled.div`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  height: 120px;
  display: flex;
  align-items: center;
  padding: 0px 50px;
  font-size: 28px;
  font-weight: 600;
  width: 100%;
  background-color: rgba(5, 5, 5, 1);
  box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
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
  height: 100%;

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
`;

const StyleScroll = styled(SectionsContainer)``;

let options = {
  sectionClassName: "section",
  anchors: ["/", "/bid", "/collection", "/support"],
  // anchors: ["sectionOne", "sectionTwo", "sectionThree"],
  keyboardScrolling: false,
  scrollBar: false,
  navigation: true,
  verticalAlign: false,
  sectionPaddingTop: "50px",
  sectionPaddingBottom: "50px",
  arrowNavigation: false,
  autoScrolling: false,
};

function LandingTemplate() {
  return (
    <>
      <Header>
        <StyleNav>
          <ListStyle>
            <Item>
              <NavHome href="#/">
                <h1>.SHOP</h1>
              </NavHome>
            </Item>
            <NavList>
              <Item>
                <StyleLink href="#/">Ongoing</StyleLink>
              </Item>
              <Item>
                <StyleLink href="#/bid">MyBid</StyleLink>
              </Item>
              <Item>
                <StyleLink href="#/collection">Collection</StyleLink>
              </Item>
              <Item>
                <StyleLink href="#/support">Support</StyleLink>
              </Item>
            </NavList>
          </ListStyle>
        </StyleNav>
      </Header>
      <ScrollToTopOnMount />

      <StyleScroll {...options}>
        <Section>
          <Ongoing />
        </Section>
        <Section>
          <MyBid />
        </Section>
        <Section>
          <Colletion />
        </Section>
        <Section>
          <Support />
        </Section>
      </StyleScroll>
      <BackgroundImg src={mainBg} alt="background" />
    </>
  );
}

export default LandingTemplate;

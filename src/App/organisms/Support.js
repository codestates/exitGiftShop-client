import React from "react";
import styled from "styled-components";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainStyle = styled.div`
  display: flex;
  padding-top: 1em;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ContactStyle = styled.div`
  text-align: center;
  font-family: "Roboto Mono", monospace;
  font-size: 20px;
  color: #e8eaf6;
  padding-bottom: 12.5px;
  h1 {
    text-align: center;
    font-family: "Roboto Mono", monospace;
    font-size: 40px;
    font-weight: 800;
  }
  span {
    text-align: center;
    font-family: "Roboto Mono", monospace;
    font-size: 40px;
    font-weight: 800;
  }
`;
const ContactCards = styled.h1`
  display: flex;
  float: center;
  flex-direction: row;
  text-align: center;
  width: 100%;
  padding: 20px;
  padding-bottom: 50px;
  margin: 0.5em;
  div {
    display: flex;
    font-family: "Roboto", sans-serif;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: content-box;
    box-shadow: 10px 5px 2px #c08296;
    height: 200px;
    background-color: #f4b2c7;
    color: black;
    width: 300px;
    border: 5px solid black;
    margin-left: 1.2em;
    margin-right: 1.2em;
    text-align: left;
  }
  text {
    font-size: 15px;
    padding: 20px;
  }
  p {
    font-size: 12px;
    padding: 20px;
    float: bottom;
  }
`;

const Partners = styled.div`
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */
  max-width: 70%;
  max-height: 80%;
  padding-right: 50px;
  padding-left: 50px;
  text-align: center;
  a {
    box-sizing: content-box;
    height: 150px;
    width: 300px;
    margin-top: -30px;
    margin-right: -50px;
  }
  b {
    box-sizing: content-box;
    height: 200px;
    width: 450px;
    margin-top: -15px;
    margin-right: -50px;
  }
  c {
    box-sizing: content-box;
    height: 200px;
    width: 300px;
    margin-top: 15px;
  }
  d {
    box-sizing: content-box;
    height: 200px;
    width: 300px;
    margin-top: 45px;
  }
  e {
    box-sizing: content-box;
    height: 200px;
    width: 300px;
    margin-top: 25px;
  }
  img {
    max-width: 60%;
    max-height: 60%;
  }
`;
const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */
  width: 150em;
  margin: -5em;
  background-color: black;
  > :first-child {
    width: 50em;
    padding-left: 7.8em;
  }
`;
const FootText = styled.div`
  margin: 20px;
  padding-bottom: 2em;
  color: grey;
  div {
    margin-bottom: 10px;
  }
`;
const Socials = styled.div`
  display: flex;
  float: center;
  margin: 100px;
  padding-left: 15em;
  object-fit: cover;
  img {
    max-width: 80%;
    max-height: 80%;
    margin-left: 0.5em;
  }
`;

const Support = () => {
  const file_path = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/file/`;
  return (
    <MainStyle>
      <ContactStyle>
        <h1>WANT TO PARTNER WITH US?</h1>
        <ContactCards>
          <div>
            <text>Are you an artist?</text>
            <p>
              <a href="mailto:rheeunion@gmail.com">
                Department of Publishment
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </p>
          </div>
          <div>
            <text>Are you a private collector?</text>
            <p>
              <a href="mailto:nans910521@gmail.com">
                Department of Curation
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </p>
          </div>
          <div>
            <text>Are you looking for cooperation?</text>
            <p>
              <a href="mailto:rnrb555@gmail.com">
                Department of Business Strategy
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </p>
          </div>
        </ContactCards>
        <span>PARTNERS</span>
      </ContactStyle>
      <Partners>
        <a href="https://www.kakaocorp.com/">
          <img src={file_path + `16`} alt="logo1" />
        </a>
        <b href="http://www.mmca.go.kr/main.do">
          <img src={file_path + `7`} alt="logo2" />
        </b>
        <c href="https://www.bondly.finance/index.html">
          <img src={file_path + `8`} alt="logo3" />
        </c>
        <d href="https://www.navercorp.com/">
          <img src={file_path + `17`} alt="logo4" />
        </d>
        <e href="https://www.bondly.finance/">
          <img src={file_path + `6`} alt="logo5" />
        </e>
      </Partners>
      <Footer>
        <FootText>
          <div>©2021 Exit Labs, Inc.</div>
          <div>
            Officially licensed product of the National Museum of Contemporary
            Art.
          </div>
          Do Not Sell My <span>Personal Information</span>.
        </FootText>
        <Socials>
          <a href="https://www.facebook.com/romanticjay">
            <img src={file_path + `13`} alt="facebook" />
          </a>
          <a href="https://www.youtube.com/watch?v=n53T1MMDpXY">
            <img src={file_path + `15`} alt="Youtube" />
          </a>
          <a href="https://www.linkedin.com/showcase/secretnetwork/">
            <img src={file_path + `14`} alt="LinkedIn" />
          </a>
        </Socials>
      </Footer>
    </MainStyle>
  );
};

export default Support;

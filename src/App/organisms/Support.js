import React from "react";
import styled from "styled-components";

const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ContactStyle = styled.div`
  text-align: center;
  font-family: "Roboto Mono", monospace;
  font-size: 20px;
  h1 {
    text-align: center;
    font-family: "Roboto Mono", monospace;
    font-size: 50px;
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
  flex-direction: row;
  text-align: center;
  width: 100%;
  padding: 20px;
  div {
    box-sizing: content-box;
    height: 200px;
    color: black;
    width: 300px;
    border: 5px solid black;
    margin: 20px;
    background-color: white;
    text-align: left;
  }
  text {
    font-size: 15px;
    padding: 20px;
  }
`;

const Partners = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */
  width: 100%;
  padding: 20px;
  a {
    box-sizing: content-box;
    height: 200px;
    width: 300px;
    background-color: hidden;
    text-align: left;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;
const Footer = styled.div`
  display: flex;
  flex-direction: row;
  place-items: end center;
  margin: -20px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: black;
  > :first-child {
  }
`;
const FootText = styled.div`
  margin: 110px;
  padding-right: 150px;
  div {
    margin-bottom: 10px;
  }
`;
const Socials = styled.div`
  margin: 130px;
  padding-left: 150px;
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
          </div>
          <div>
            <text>Are you a private collector?</text>
          </div>
          <div>
            <text>Are you looking for cooperation?</text>
          </div>
        </ContactCards>
        <span>PARTNERS</span>
      </ContactStyle>
      <Partners>
        <a href="https://www.bondly.finance/index.html">
          <img src={file_path + `6`} alt="logo1" />
        </a>
        <a href="https://www.bondly.finance/index.html">
          <img src={file_path + `7`} alt="logo2" />
        </a>
        <a href="https://www.bondly.finance/index.html">
          <img src={file_path + `8`} alt="logo3" />
        </a>
        <a href="https://www.bondly.finance/index.html">
          <img src={file_path + `9`} alt="logo4" />
        </a>
        <a href="https://www.bondly.finance/index.html">
          <img src={file_path + `10`} alt="logo5" />
        </a>
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
          <a href="https://www.bondly.finance/index.html">
            <img src={file_path + `10`} alt="facebook" />
          </a>
          <a href="https://www.bondly.finance/index.html">
            <img src={file_path + `10`} alt="Youtube" />
          </a>
          <a href="https://www.bondly.finance/index.html">
            <img src={file_path + `10`} alt="LinkedIn" />
          </a>
        </Socials>
      </Footer>
    </MainStyle>
  );
};

export default Support;

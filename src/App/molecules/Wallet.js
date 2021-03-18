import React from "react";
import { faWallet, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const WalletBox = styled.div`
  background-color: white;
  width: 200px;
  height: 200px;
`;

function Wallet() {
  return (
    <>
      <WalletBox>
        <FontAwesomeIcon icon={faWallet} />
        <h1>
          Mr.Rhee<br></br> ￦ 23,950,000,000
        </h1>
        <FontAwesomeIcon icon={faCog} />
      </WalletBox>
    </>
  );
}

export default Wallet;

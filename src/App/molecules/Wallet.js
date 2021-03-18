import React from "react";
import { faWallet, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Wallet() {
  return (
    <>
      <FontAwesomeIcon icon={faWallet} />
      <h1>
        Mr.Rhee<br></br> ￦ 23,950,000,000
      </h1>
      <FontAwesomeIcon icon={faCog} />
    </>
  );
}

export default Wallet;

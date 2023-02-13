import React, { useState } from "react";
import videoBg from "../assets/video/babylon.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchTest = () => {
  const [People, setPeople] = useState("");

  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted />
      <div className="content-bg">
        <h2>BABYLON</h2>
        <p>Plus infos</p>
        <FontAwesomeIcon icon="fa-regular fa-circle-info" />
      </div>
    </div>
  );
};

export default SearchTest;

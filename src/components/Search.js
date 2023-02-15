import React, { useState } from "react";
import videoBg from "../assets/video/babylon.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchTest = () => {
  const [People, setPeople] = useState("");
  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted />
      <div className="content-bg">
        <h2>BABYLON</h2>
        <NavLink to="/Movie/615777">
          <p>Plus infos</p>
        </NavLink>
        <FontAwesomeIcon icon="fa-regular fa-circle-info" />
      </div>
    </div>
  );
};

export default SearchTest;

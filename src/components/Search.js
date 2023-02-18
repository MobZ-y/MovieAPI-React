import React from "react";
import videoBg from "../assets/video/babylon.mp4";
import { NavLink } from "react-router-dom";

const SearchTest = () => {
  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted />
      <div className="content-bg">
        <h2>BABYLON</h2>
        <NavLink to="/Movie/615777">
          <p>Plus infos</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SearchTest;

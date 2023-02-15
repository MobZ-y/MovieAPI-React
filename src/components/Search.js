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
      <div className="nav-container">
        <header>
          <nav>
            <ul>
              <NavLink
                to="/"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                <li>Accueil</li>
              </NavLink>

              <NavLink
                to="/Artist"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                <li>Artistes</li>
              </NavLink>
              <NavLink
                to="/Films"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                <li>Films</li>
              </NavLink>
              <NavLink
                to="/LikePage"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                <li>Favorite</li>
              </NavLink>
              <div className="input-search">
                <input
                  type="text"
                  id="inputSearch"
                  placeholder="Rechercher, acteurs, réalisateur"
                  onChange={(e) => setPeople(e.target.value)}
                />
                <NavLink to={`/SearchPage/${People}`}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} id="icon" />
                </NavLink>
              </div>
            </ul>
          </nav>
        </header>
      </div>
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

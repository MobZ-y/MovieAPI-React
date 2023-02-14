import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [People, setPeople] = useState("");

  return (
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
  );
};

export default Navigation;

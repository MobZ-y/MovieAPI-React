import React from "react";
import { NavLink } from "react-router-dom";

const navigation = () => {
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
        </ul>
      </nav>
    </header>
  );
};

export default navigation;

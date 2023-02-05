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
            <li>accueil</li>
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
        </ul>
      </nav>
    </header>
  );
};

export default navigation;

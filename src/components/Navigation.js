import React from "react";
import { NavLink } from "react-router-dom";

const navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <NavLink to="/">
            <li>accueil</li>
          </NavLink>
          <NavLink to="/About">
            <li>Films</li>
          </NavLink>
          <NavLink to="/Artist">
            <li>Artistes</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default navigation;

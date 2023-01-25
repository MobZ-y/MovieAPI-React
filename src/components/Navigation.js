import React from "react";
import { NavLink } from "react-router-dom";

const navigation = () => {
  return (
    <header>
      <nav className="wrapper">
        <ul>
          <NavLink to="/">
            <li>accueil</li>
          </NavLink>
          <NavLink to="/About">
            <li>
              Films
              <ul className="sub-menu">
                <li>Films du Moments</li>
                <li>Films à venir</li>
              </ul>
            </li>
          </NavLink>
          <li>
            Artistes
            <ul className="sub-menu">
              <li>Artistes populaires</li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default navigation;

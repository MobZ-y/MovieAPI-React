import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [People, setPeople] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navBackgroundColor =
    scrollPosition > 100 ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.5)";
  return (
    <header>
      <nav style={{ backgroundColor: navBackgroundColor }}>
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

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [People, setPeople] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [inputWidth, setInputWidth] = useState("0px");
  const navigate = useNavigate();

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
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${People}`);
  };
  const navBackgroundColor =
    scrollPosition > 10 ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.3)";

  function handleIconClick() {
    setInputWidth(inputWidth === "0px" ? "200px" : "0px");
  }
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
            to="/Favorite"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Favories</li>
          </NavLink>
          <div className="input-search">
            <form onSubmit={handleSubmit}>
              <label htmlFor="inputSearch">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  id="icon"
                  onClick={handleIconClick}
                />
              </label>
              <input
                type="text"
                id="inputSearch"
                placeholder="Rechercher, acteurs, réalisateur"
                required
                value={People}
                onChange={(e) => setPeople(e.target.value)}
                style={{
                  width: inputWidth,
                  border: "none",
                  transition: "width 0.3s ease-in-out",
                }}
              />
            </form>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

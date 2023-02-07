import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SearchTest = () => {
  const [People, setPeople] = useState("");

  return (
    <div>
      <div>
        <div className="filter-container">
          <div className="Titlte-filter-container">
            <h2>Bienvenue !</h2>
          </div>
          <div className="input-search">
            <input
              type="text"
              id="inputSearch"
              placeholder="Rechercher, acteurs, réalisateur"
              onChange={(e) => setPeople(e.target.value)}
            />
            <NavLink to={`./SearchPage/${People}`}>
              <button>Search</button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="people"></div>
    </div>
  );
};

export default SearchTest;

import React from "react";
import { NavLink } from "react-router-dom";

const SearchSer = () => {
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
            />
            <NavLink to="./SearchPage">
              <button>Search</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSer;

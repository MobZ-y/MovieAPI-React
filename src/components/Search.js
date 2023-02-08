import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchTest = () => {
  const [People, setPeople] = useState("");

  return (
    <div>
      <div>
        <div className="content-search">
          <div className="filter-container">
            <div className="input-search">
              <input
                type="text"
                id="inputSearch"
                placeholder="Rechercher, acteurs, réalisateur"
                onChange={(e) => setPeople(e.target.value)}
              />
              <NavLink to={`./SearchPage/${People}`}>
                <FontAwesomeIcon icon={faMagnifyingGlass} id="icon" />;
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTest;

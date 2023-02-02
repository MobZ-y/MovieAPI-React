import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import SearchCard from "./SearchCard";

const Search = () => {
  const [data, setData] = useState([]);
  const [People, setPage] = useState("Ana de Armas");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/person?api_key=dc4fa11dbb0888468121f0e93ac98077&language=en-US&query=${People}`
      )
      .then((res) => setData(res.data.results));
  }, [People]);

  console.log(People);

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
              onChange={(e) => setPage(e.target.value)}
            />
            <NavLink to="./SearchPage">
              <button>S</button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="people">
        {data.map((Search, index) => (
          <SearchCard key={index} Search={Search} />
        ))}
      </div>
    </div>
  );
};

export default Search;

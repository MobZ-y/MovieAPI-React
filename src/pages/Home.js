import React from "react";
import MoviesAndTV from "../components/MoviesAndTV";
import Navigation from "../components/Navigation";
import Actors from "../components/Actors";

const Home = () => {
  return (
    <div>
      <Navigation />
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
          <button>S</button>
        </div>
      </div>
      <MoviesAndTV />
      <Actors />
    </div>
  );
};

export default Home;

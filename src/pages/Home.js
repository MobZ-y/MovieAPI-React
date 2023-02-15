import React from "react";
import MoviesAndTV from "../components/MoviesAndTV";
import Navigation from "../components/Navigation";
import Actors from "../components/Actors";
import Search from "../components/Search";

const Home = () => {
  return (
    <div>
      <Search />
      <MoviesAndTV />
      <Actors />
    </div>
  );
};

export default Home;

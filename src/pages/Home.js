import React, { useState } from "react";
import MoviesAndTV from "../components/MoviesAndTV";
import Navigation from "../components/Navigation";
import Actors from "../components/Actors";
import SearchSer from "../components/SearchSer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <SearchSer />
      <MoviesAndTV />
      <Actors />
    </div>
  );
};

export default Home;

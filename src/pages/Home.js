import React from "react";
import MoviesAndTV from "../components/MoviesAndTV";
import Navigation from "../components/Navigation";
import Actors from "../components/Actors";

const Home = () => {
  return (
    <div>
      <Navigation />
      <MoviesAndTV />
      <Actors />
    </div>
  );
};

export default Home;

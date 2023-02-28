import React from "react";
import MoviesAndTV from "../components/MoviesAndTV";
import Navigation from "../components/Navigation";
import HomeActors from "../components/HomeActors";
import Search from "../components/Search";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Search />
      <MoviesAndTV />
      <HomeActors />
    </div>
  );
};

export default Home;

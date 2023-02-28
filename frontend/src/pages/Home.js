import React from "react";
import HomeMoviesAndTV from "../components/HomeMoviesAndTV";
import Navigation from "../components/Navigation";
import HomeActors from "../components/HomeActors";
import Homebg from "../components/Homebg";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Homebg />
      <HomeMoviesAndTV />
      <HomeActors />
    </div>
  );
};

export default Home;

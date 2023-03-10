import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import CardMovie from "./CardMovie";
import CardTV from "./CardTV";

const HomeMoviesAndTV = () => {
  const [data, setData] = useState([]);
  const [Movie, setMovie] = useState([]);
  const [tv, setTv] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=dc4fa11dbb0888468121f0e93ac98077"
      )
      .then((res) => setData(res.data.results));
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/popular?api_key=dc4fa11dbb0888468121f0e93ac98077"
      )
      .then((res) => setTv(res.data.results));
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=dc4fa11dbb0888468121f0e93ac98077"
      )
      .then((res) => setMovie(res.data.results));
  }, []);

  console.log(data);
  return (
    <div>
      <div className="movies-trending">
        <div className="carousel">
          <h3>Tendances de la semaine</h3>
          <div className="trending">
            {data.map((movie2, index) => (
              <CardMovie key={index} Movies={movie2} />
            ))}
          </div>
        </div>
      </div>
      <div className="movies-trending">
        <div className="carousel">
          <h3>Emisions télévisé Populaires</h3>
          <div className="trending">
            {tv.map((tv) => (
              <CardTV key={tv.id} Tv={tv} />
            ))}
          </div>
        </div>
      </div>
      <div className="movies-trending">
        <div className="carousel">
          <h3>Films Populaires</h3>
          <div className="trending">
            {Movie.map((movie2, index) => (
              <CardMovie key={index} Movies={movie2} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMoviesAndTV;

import React from "react";
import Navigation from "../components/Navigation";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import CardMovie from "../components/CardMovie";

import CardTV from "../components/CardTV";

const Favorite = () => {
  const [listData, setListData] = useState([]);
  const [listDataTv, setListDataTv] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      let moviesId = window.localStorage.movies
        ? window.localStorage.movies.split(",")
        : [];

      const promises = moviesId.map((id) =>
        axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR`
        )
      );

      const results = await Promise.all(promises);
      const data = results.map((result) => result.data);

      setListData(data);
    };

    fetchMovieData();
  }, []);

  useEffect(() => {
    const fetchMovieDatatv = async () => {
      let tvId = window.localStorage.tv
        ? window.localStorage.tv.split(",")
        : [];

      const promises = tvId.map((id) =>
        axios.get(
          `https://api.themoviedb.org/3/tv/${id}?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR`
        )
      );

      const results = await Promise.all(promises);
      const data = results.map((result) => result.data);

      setListDataTv(data);
    };

    fetchMovieDatatv();
  }, []);
  console.log(listData);

  return (
    <div className="user-list-page">
      <Navigation />
      <h3>Vos Films</h3>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie) => <CardMovie Movies={movie} key={movie.id} />)
        ) : (
          <h2>Aucun coup de coeur pour le moment</h2>
        )}
      </div>
      <h3>Vos émissions Tv</h3>
      <div className="result">
        {listDataTv.length > 0 ? (
          listDataTv.map((Tv) => <CardTV Tv={Tv} key={Tv.id} />)
        ) : (
          <h2>Aucun coup de coeur pour le moment</h2>
        )}
      </div>
    </div>
  );
};

export default Favorite;

import React from "react";
import Navigation from "../components/Navigation";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import CardMovie from "../components/CardMovie";
import CardPerson from "../components/CardPerson";

const LikePage = () => {
  const [listData, setListData] = useState([]);

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
  console.log(listData);

  return (
    <div className="user-list-page">
      <Navigation />
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie) => <CardMovie Movies={movie} key={movie.id} />)
        ) : (
          <h2>Aucun coup de coeur pour le moment</h2>
        )}
        {/* {listPerson.length > 0 ? (
          listPerson.map((Person) => (
            <CardPerson Person={Person} key={Person.id} />
          ))
        ) : (
          <h2>Aucun coup de coeur pour le moment</h2>
        )} */}
      </div>
    </div>
  );
};

export default LikePage;

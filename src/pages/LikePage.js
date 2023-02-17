import React from "react";
import Navigation from "../components/Navigation";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import CardMovie from "../components/CardMovie";
import CardPerson from "../components/CardPerson";

const LikePage = () => {
  const [listData, setListData] = useState([]);
  const [listPerson, setListPerson] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR`
        )
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
  }, []);

  useEffect(() => {
    let personId = window.localStorage.person
      ? window.localStorage.person.split(",")
      : [];

    for (let i = 0; i < personId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/person/${personId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR`
        )
        .then((res) =>
          setListPerson((listPerson) => [...listPerson, res.data])
        );
    }
  }, []);

  return (
    <div className="user-list-page">
      <Navigation />
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie) => <CardMovie Movies={movie} key={movie.id} />)
        ) : (
          <h2>Aucun coup de coeur pour le moment</h2>
        )}
        {listPerson.length > 0 ? (
          listPerson.map((Person) => (
            <CardPerson Person={Person} key={Person.id} />
          ))
        ) : (
          <h2>Aucun coup de coeur pour le moment</h2>
        )}
      </div>
    </div>
  );
};

export default LikePage;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";

const CardMovie = ({ Movies }) => {
  const [idMovie, setIdMovie] = useState("");
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setIdMovie(Movies.id);
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];
    setIsAdded(storedData.includes(Movies.id.toString()));
  }, [Movies.id]);

  const addStorage = () => {
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];
    if (!storedData.includes(Movies.id.toString())) {
      storedData.push(Movies.id);
      window.localStorage.movies = storedData;
      setIsAdded(true);
    }
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.movies.split(",");
    let newData = storedData.filter((id) => id != Movies.id);
    window.localStorage.movies = newData;
    setIsAdded(false);
  };

  return (
    <div>
      <div className="card">
        <div className="card-popular">
          <div className="profile-popular">
            {Movies.media_type === "tv" ? (
              <NavLink to={`/tv/${Movies.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${Movies.poster_path}`}
                  alt={Movies.name}
                />
              </NavLink>
            ) : (
              <NavLink to={`/movie/${Movies.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${Movies.poster_path}`}
                  alt={Movies.title}
                />
              </NavLink>
            )}
          </div>
          <div className="profile-meta">
            <p className="name">
              {Movies.name === undefined ? Movies.title : Movies.name}
            </p>
            {Movies.genre_ids ? (
              <div
                className={"btn-add" + (isAdded ? "red" : "")}
                onClick={isAdded ? deleteStorage : addStorage}
              >
                <FontAwesomeIcon
                  icon={isAdded ? faSolidHeart : faRegularHeart}
                />
              </div>
            ) : (
              <div
                className="btn"
                onClick={() => {
                  deleteStorage();
                  window.location.reload();
                }}
              >
                Supprimer de la liste
              </div>
            )}
            <div
              id="canvas"
              className={
                Movies.vote_average === 0
                  ? "grey"
                  : Movies.vote_average > 6
                  ? "green"
                  : Movies.vote_average >= 2 && Movies.vote_average < 3
                  ? "red"
                  : "orange"
              }
            >
              {Movies.vote_average === 0
                ? ""
                : Math.floor(Movies.vote_average * 10).toFixed(0)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;

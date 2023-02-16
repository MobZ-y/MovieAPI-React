import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const CardMovie = ({ Movies }) => {
  const [idMovie, setIdMovie] = useState("");

  useEffect(() => {
    setIdMovie(Movies.id);
  }, [Movies.id]);

  const addStorage = () => {
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    if (!storedData.includes(Movies.id.toString())) {
      storedData.push(Movies.id);
      window.localStorage.movies = storedData;
    }
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.movies.split(",");
    let newData = storedData.filter((id) => id != Movies.id);

    window.localStorage.movies = newData;
  };
  return (
    <div>
      <div className="card">
        <div className="card-popular">
          <div className="profile-popular">
            <NavLink to={`/Movie/${idMovie}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${Movies.poster_path}`}
              />
            </NavLink>
          </div>
          <div className="profile-meta">
            <p className="name">
              {Movies.name === undefined ? Movies.title : Movies.name}
            </p>
            {Movies.genre_ids ? (
              <div className="btn" onClick={() => addStorage()}>
                <FontAwesomeIcon icon={faHeart} />
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

import React from "react";

const Card = ({ Movies }) => {
  return (
    <div>
      <div className="card">
        <div className="card-popular">
          <div className="profile-popular">
            <img src={`https://image.tmdb.org/t/p/w500${Movies.poster_path}`} />
          </div>
          <div className="profile-meta">
            <p className="name">
              {Movies.name === undefined ? Movies.title : Movies.name}
            </p>
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

export default Card;

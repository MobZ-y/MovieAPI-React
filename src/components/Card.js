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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

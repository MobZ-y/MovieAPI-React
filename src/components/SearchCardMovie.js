import React from "react";

const SearchCardMovie = ({ SearchMovie }) => {
  return (
    <div>
      <div className="search-wrap-movie">
        <div className="nav-profile-movie">
          <div className="search-movie">
            <div className="Profile-movie">
              <img
                src={`https://image.tmdb.org/t/p/w500${SearchMovie.poster_path}`}
                alt="drapeau"
                id="pp"
              />
            </div>
            <div className="details-movie">
              <h1>{SearchMovie.original_title}</h1>
              <br />
              <i>{SearchMovie.tagline}</i>
              <h4>Synopsis</h4>
              <p>{SearchMovie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCardMovie;

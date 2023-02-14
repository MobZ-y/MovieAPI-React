import React from "react";

const SearchCardMovie = ({ SearchMovie }) => {
  return (
    <div>
      <div className="search-wrap-movie">
        <div className="nav-profile-movie">
          <div className="search-movie">
            <div className="Profile-movie">
              <h1>{SearchMovie.original_title}</h1>
              <img
                src={`https://image.tmdb.org/t/p/w500${SearchMovie.backdrop_path}`}
                alt="drapeau"
                id="pp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCardMovie;

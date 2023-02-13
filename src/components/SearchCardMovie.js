import React from "react";

const SearchCardMovie = ({ SearchMovie }) => {
  return (
    <div>
      <h1>{SearchMovie.original_title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${SearchMovie.backdrop_path}`}
        alt="drapeau"
        id="pp"
      />
    </div>
  );
};

export default SearchCardMovie;

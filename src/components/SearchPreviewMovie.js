import React from "react";
import { NavLink } from "react-router-dom";

const SearchPreviewMovie = ({ SearchMovie }) => {
  return (
    <div className="Preview-Content-movie">
      <div className="img-preview-content-movie">
        <img
          src={
            SearchMovie.backdrop_path
              ? "https://image.tmdb.org/t/p/w500" + SearchMovie.backdrop_path
              : "https://image.tmdb.org/t/p/w500" + SearchMovie.poster_path
          }
          alt=""
        />
      </div>
      <div className="text-preview-content-movie">
        <h2>{SearchMovie.original_title}</h2>
        <h4>{SearchMovie.release_date}</h4>
        <p>{SearchMovie.overview}</p>
      </div>
    </div>
  );
};

export default SearchPreviewMovie;

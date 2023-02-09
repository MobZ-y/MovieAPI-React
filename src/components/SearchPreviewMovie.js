import React from "react";
import { NavLink } from "react-router-dom";

const SearchPreviewMovie = ({ SearchMovie }) => {
  return (
    <div className="Preview-Content">
      <div className="img-preview-content">
        <img
          src={`https://image.tmdb.org/t/p/w500${SearchMovie.backdrop_path}`}
          alt=""
        />
      </div>
      <div className="text-preview-content">
        <h2>{SearchMovie.original_title}</h2>
      </div>
    </div>
  );
};

export default SearchPreviewMovie;

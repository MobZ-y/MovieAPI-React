import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SearchPreviewMovie = ({ SearchMovie }) => {
  const [idMovie, setIdMovie] = useState("");

  useEffect(() => {
    setIdMovie(SearchMovie.id);
  }, [SearchMovie.id]);
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
        <NavLink to={`/Movie/${idMovie}`}>
          <h2>{SearchMovie.original_title}</h2>
        </NavLink>
        <h4>{SearchMovie.release_date}</h4>
        <p>{SearchMovie.overview}</p>
      </div>
    </div>
  );
};

export default SearchPreviewMovie;

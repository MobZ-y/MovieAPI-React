import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SearchPreviewTV = ({ tv }) => {
  const [idTv, setIdTv] = useState("");

  useEffect(() => {
    setIdTv(tv.id);
  }, [tv.id]);
  return (
    <div>
      <div className="Preview-Content-movie">
        <div className="img-preview-content-movie">
          <img
            src={
              tv.backdrop_path
                ? "https://image.tmdb.org/t/p/w500" + tv.backdrop_path
                : "https://image.tmdb.org/t/p/w500" + tv.poster_path
            }
            alt=""
          />
        </div>
        <div className="text-preview-content-movie">
          <NavLink to={`/Tv/${idTv}`}>
            <h2>{tv.original_name}</h2>
          </NavLink>
          <h4>{tv.first_air_date}</h4>
          <p>{tv.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchPreviewTV;

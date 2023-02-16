import React from "react";

const SearchPreviewTV = ({ tv }) => {
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
          <h2>{tv.original_name}</h2>

          <h4>{tv.release_date}</h4>
          <p>{tv.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchPreviewTV;

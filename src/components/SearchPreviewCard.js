import React from "react";

const SearchPreviewCard = ({ Search }) => {
  return (
    <div className="Preview-Content">
      <div className="img-preview-content">
        <img
          src={`https://image.tmdb.org/t/p/w500${Search.profile_path}`}
          alt=""
        />
      </div>
      <div className="text-preview-content">
        <h2>{Search.name}</h2>
        <p>
          {Search.known_for[0] && Search.known_for[0].title
            ? ` ${Search.known_for[0].title}`
            : Search.known_for[0] && Search.known_for[0].name
            ? ` ${Search.known_for[0].name}`
            : ""}
          ,
          {Search.known_for[1] && Search.known_for[1].title
            ? ` ${Search.known_for[1].title}`
            : Search.known_for[1] && Search.known_for[1].name
            ? ` ${Search.known_for[1].name}`
            : ""}
          {Search.known_for[2] && Search.known_for[2].title
            ? ` ${Search.known_for[2].title}`
            : Search.known_for[2] && Search.known_for[2].name
            ? ` ${Search.known_for[2].name}`
            : ""}
        </p>
      </div>
    </div>
  );
};

export default SearchPreviewCard;

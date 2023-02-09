import React from "react";

const SearchPreviewMovie = ({ SearchMovie }) => {
  return (
    <div>
      <h1>{SearchMovie.original_title}</h1>
    </div>
  );
};

export default SearchPreviewMovie;

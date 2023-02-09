import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SearchPreviewPerson = ({ SearchPerson }) => {
  const [id, setId] = useState("");

  const IdSetup = () => {
    setId(SearchPerson.id);
  };

  useEffect(() => {
    setId(SearchPerson.id);
  }, [SearchPerson.id]);

  return (
    <div className="Preview-Content">
      <div className="img-preview-content">
        <img
          src={`https://image.tmdb.org/t/p/w500${SearchPerson.profile_path}`}
          alt=""
        />
      </div>
      <div className="text-preview-content">
        <NavLink onClick={IdSetup} to={`/ProfileCard/${id}`}>
          <h2>
            {SearchPerson.name
              ? SearchPerson.name
              : SearchPerson.original_title}
          </h2>
        </NavLink>
        <p>
          {SearchPerson.known_for[0] && SearchPerson.known_for[0].title
            ? ` ${SearchPerson.known_for[0].title}`
            : SearchPerson.known_for[0] && SearchPerson.known_for[0].name
            ? ` ${SearchPerson.known_for[0].name}`
            : ""}
          ,
          {SearchPerson.known_for[1] && SearchPerson.known_for[1].title
            ? ` ${SearchPerson.known_for[1].title}`
            : SearchPerson.known_for[1] && SearchPerson.known_for[1].name
            ? ` ${SearchPerson.known_for[1].name}`
            : ""}
          {SearchPerson.known_for[2] && SearchPerson.known_for[2].title
            ? ` ${SearchPerson.known_for[2].title}`
            : SearchPerson.known_for[2] &&
              SearchPerson.SearchPreviewPersonknown_for[2].name
            ? ` ${SearchPerson.known_for[2].name}`
            : ""}
        </p>
      </div>
    </div>
  );
};

export default SearchPreviewPerson;

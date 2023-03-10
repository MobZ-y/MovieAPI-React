import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CardArtist = ({ Artist }) => {
  const [id, setId] = useState("");

  useEffect(() => {
    setId(Artist.id);
  }, [Artist.id]);
  return (
    <div className="card">
      <div className="card-famous">
        <div className="profile-famous">
          <NavLink to={`/ProfileCard/${id}`}>
            {Artist.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${Artist.profile_path}`}
                alt={Artist.name}
              />
            ) : (
              <img src="/nopict.png" alt={Artist.name} />
            )}
          </NavLink>
        </div>
        <div className="profile-meta">
          <p className="name">{Artist.name}</p>
          <p className="sub">
            {Artist.known_for[0] && Artist.known_for[0].title
              ? ` ${Artist.known_for[0].title}`
              : Artist.known_for[0] && Artist.known_for[0].name
              ? ` ${Artist.known_for[0].name}`
              : ""}
            ,
            {Artist.known_for[1] && Artist.known_for[1].title
              ? ` ${Artist.known_for[1].title}`
              : Artist.known_for[1] && Artist.known_for[1].name
              ? ` ${Artist.known_for[1].name}`
              : ""}
            {Artist.known_for[2] && Artist.known_for[2].title
              ? ` ${Artist.known_for[2].title}`
              : Artist.known_for[2] && Artist.known_for[2].name
              ? ` ${Artist.known_for[2].name}`
              : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardArtist;

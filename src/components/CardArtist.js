import React from "react";

const CardArtist = ({ Artist }) => {
  return (
    <div className="card">
      <div className="card-famous">
        <div className="profile-famous">
          <img
            src={
              Artist.profile_path
                ? "https://image.tmdb.org/t/p/w500" + Artist.profile_path
                : "/public/A+.png"
            }
          />
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

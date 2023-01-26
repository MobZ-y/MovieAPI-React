import React from "react";

const CardPerson = ({ Person }) => {
  return (
    <div>
      <div className="card">
        <div className="card-popular">
          <div className="profile-popular">
            <img
              src={`https://image.tmdb.org/t/p/w500${Person.profile_path}`}
            />
          </div>
        </div>
        <div className="profile-meta">
          <p>{Person.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CardPerson;

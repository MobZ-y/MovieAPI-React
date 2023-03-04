import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CardPerson = ({ person }) => {
  const [id, setId] = useState("");
  useEffect(() => {
    setId(person.id);
  }, [person.id]);
  return (
    <div>
      <div className="card">
        <div className="card-popular">
          <div className="profile-popular">
            <NavLink to={`/ProfileCard/${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                alt={person.name}
              />
            </NavLink>
          </div>
        </div>
        <div className="profile-meta">
          <p>{person.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CardPerson;

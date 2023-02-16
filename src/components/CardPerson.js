import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const CardPerson = ({ Person }) => {
  const [id, setId] = useState("");

  useEffect(() => {
    setId(Person.id);
  }, [Person.id]);

  return (
    <div>
      <div className="card">
        <div className="card-popular">
          <div className="profile-popular">
            <NavLink to={`/ProfileCard/${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${Person.profile_path}`}
                alt={Person.name}
              />
            </NavLink>
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

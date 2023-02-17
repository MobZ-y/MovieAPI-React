import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const CardPerson = ({ Person }) => {
  const [id, setId] = useState("");
  const isOnLikePage = window.location.pathname === "/like-page";

  useEffect(() => {
    setId(Person.id);
  }, [Person.id]);

  const addStorage = () => {
    let storedData = window.localStorage.person
      ? window.localStorage.person.split(",")
      : [];

    if (!storedData.includes(Person.id.toString())) {
      storedData.push(Person.id);
      window.localStorage.person = storedData;
    }
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.person.split(",");
    let newData = storedData.filter((id) => id != Person.id);

    window.localStorage.person = newData;
  };

  console.log(Person);
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
          {Person.id ? (
            <div className="btn-add" onClick={() => addStorage()}>
              <FontAwesomeIcon icon={faHeart} />
            </div>
          ) : (
            <div
              className="btn"
              onClick={() => {
                deleteStorage();
                window.location.reload();
              }}
            >
              Supprimer de la liste
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardPerson;

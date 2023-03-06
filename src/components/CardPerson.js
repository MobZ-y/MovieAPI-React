import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";

const CardPerson = ({ person }) => {
  const [id, setId] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  useEffect(() => {
    setId(person.id);
  }, [person.id]);

  console.log(person);

  useEffect(() => {
    if (person?.id) {
      let storedData = window.localStorage.person
        ? window.localStorage.person.split(",")
        : [];
      setIsAdded(storedData.includes(person.id.toString()));
    }
  }, [person]);

  const addStorage = () => {
    let storedData = window.localStorage.person
      ? window.localStorage.person.split(",")
      : [];
    if (!storedData.includes(person.id.toString())) {
      storedData.push(person.id);
      window.localStorage.person = storedData;
      setIsAdded(true);
    }
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.person.split(",");
    let newData = storedData.filter((id) => id != person.id);
    window.localStorage.person = newData;
    setIsAdded(false);
  };
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
          {person.id ? (
            <div
              className={"btn-add" + (isAdded ? "red" : "")}
              onClick={isAdded ? deleteStorage : addStorage}
            >
              <FontAwesomeIcon icon={isAdded ? faSolidHeart : faRegularHeart} />
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

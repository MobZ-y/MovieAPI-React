import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";

const CardTV = ({ Tv }) => {
  const [idTv, setidTv] = useState("");
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setidTv(Tv.id);
  }, [Tv.id]);

  useEffect(() => {
    if (Tv?.id) {
      let storedData = window.localStorage.tv
        ? window.localStorage.tv.split(",")
        : [];
      setIsAdded(storedData.includes(Tv.id.toString()));
    }
  }, [Tv]);
  const addStorage = () => {
    let storedData = window.localStorage.tv
      ? window.localStorage.tv.split(",")
      : [];
    if (!storedData.includes(Tv.id.toString())) {
      storedData.push(Tv.id);
      window.localStorage.tv = storedData;
      setIsAdded(true);
    }
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.tv.split(",");
    let newData = storedData.filter((id) => id != Tv.id);
    window.localStorage.tv = newData;
    setIsAdded(false);
  };
  return (
    <div>
      <div>
        <div className="card">
          <div className="card-popular">
            <NavLink to={`/Tv/${idTv}`}>
              <div className="profile-popular">
                <img src={`https://image.tmdb.org/t/p/w500${Tv.poster_path}`} />
              </div>
            </NavLink>
            <div className="profile-meta">
              <p className="name">
                {Tv.name === undefined ? Tv.title : Tv.name}
              </p>
              {Tv.genre_ids ? (
                <div
                  className={"btn-add" + (isAdded ? "red" : "")}
                  onClick={isAdded ? deleteStorage : addStorage}
                >
                  <FontAwesomeIcon
                    icon={isAdded ? faSolidHeart : faRegularHeart}
                  />
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
              <div
                id="canvas"
                className={
                  Tv.vote_average === 0
                    ? "grey"
                    : Tv.vote_average > 6
                    ? "green"
                    : Tv.vote_average >= 2 && Tv.vote_average < 3
                    ? "red"
                    : "orange"
                }
              >
                {Tv.vote_average === 0
                  ? ""
                  : Math.floor(Tv.vote_average * 10).toFixed(0)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTV;

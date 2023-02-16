import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CardTV = ({ Tv }) => {
  const [idTv, setidTv] = useState("");

  useEffect(() => {
    setidTv(Tv.id);
  }, [Tv.id]);
  return (
    <div>
      <div>
        <div className="card">
          <NavLink to={`/Tv/${idTv}`}>
            <div className="card-popular">
              <div className="profile-popular">
                <img src={`https://image.tmdb.org/t/p/w500${Tv.poster_path}`} />
              </div>
              <div className="profile-meta">
                <p className="name">
                  {Tv.name === undefined ? Tv.title : Tv.name}
                </p>
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
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CardTV;

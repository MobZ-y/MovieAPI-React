import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";

const SearchCardTV = ({ Details, Credits }) => {
  const runtimeInMinutes = Details.runtime;
  const hours = Math.floor(runtimeInMinutes / 60);
  const minutes = runtimeInMinutes % 60;
  const formattedRuntime = `${hours}h ${minutes}min`;
  const [isAdded, setIsAdded] = useState(false);
  const [sortedArray, setSortedArray] = useState([]);

  const divStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${Details.backdrop_path})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  React.useEffect(() => {
    const castArray = Array.isArray(Credits.cast) ? Credits.cast : [];

    const sorted = castArray.sort((a, b) => a.order - b.order);
    setSortedArray(sorted.slice(0, 8));
  }, [Credits]);

  useEffect(() => {
    if (Details?.id) {
      let storedData = window.localStorage.tv
        ? window.localStorage.tv.split(",")
        : [];
      setIsAdded(storedData.includes(Details.id.toString()));
    }
  }, [Details]);
  const addStorage = () => {
    let storedData = window.localStorage.tv
      ? window.localStorage.tv.split(",")
      : [];
    if (!storedData.includes(Details.id.toString())) {
      storedData.push(Details.id);
      window.localStorage.tv = storedData;
      setIsAdded(true);
    }
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.tv.split(",");
    let newData = storedData.filter((id) => id != Details.id);
    window.localStorage.tv = newData;
    setIsAdded(false);
  };

  return (
    <div>
      <div className="header-tv" style={divStyle}>
        <div className="search-tv">
          <div className="search-tv-container">
            <div className="Profile-tv">
              <img
                src={
                  Details.poster_path
                    ? "https://image.tmdb.org/t/p/w500" + Details.poster_path
                    : "/src/assets/img/babylon.jpg"
                }
                alt=""
              />
            </div>
            <div className="details-tv">
              <div className="title">
                <h1>
                  {Details.name ? Details.name : Details.original_name} (
                  {new Date(Details.first_air_date).getFullYear()})
                </h1>
                <div
                  className={"btn-add-movie" + (isAdded ? "red" : "")}
                  onClick={isAdded ? deleteStorage : addStorage}
                >
                  <FontAwesomeIcon
                    icon={isAdded ? faSolidHeart : faRegularHeart}
                  />
                </div>
              </div>
              <ul>
                {Details.genres &&
                  Details.genres.map((info) => <li>{info.name}</li>)}
                <li>{formattedRuntime}</li>
              </ul>

              <div className="second-container">
                <div
                  id="canvas-tv"
                  className={
                    Details.vote_average === 0
                      ? "grey"
                      : Details.vote_average > 6
                      ? "green"
                      : Details.vote_average >= 2 && Details.vote_average < 3
                      ? "red"
                      : "orange"
                  }
                >
                  {Details.vote_average === 0
                    ? ""
                    : Math.floor(Details.vote_average * 10).toFixed(0)}
                </div>
                <p>Notes des utilisateurs</p>
              </div>
              <i>{Details.tagline}</i>
              <h4 id="Synopsis">Synopsis</h4>

              <p>{Details.overview ? Details.overview : "Pas d'information"}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-details">
        <div className="details">
          <div className="carousel-tv">
            <p>Têtes d'affiches</p>
            <ul className="search-carousel-tv">
              {sortedArray.map((item) => (
                <li className="card">
                  <div className="card-popular">
                    <div className="profile-popular">
                      <NavLink to={`/ProfileCard/${item.id}`}>
                        <img
                          src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                          alt={item.name}
                        />
                      </NavLink>
                    </div>

                    <div className="profile-meta">
                      <h3>{item.name}</h3>
                    </div>
                  </div>
                </li>
              ))}
              <NavLink>
                <p id="more">Afficher d'avantage </p>
              </NavLink>
            </ul>
          </div>
          <div className="review-part">
            <div className="header-rewiew">
              <ul>
                <li>Avis</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="details-second">
          <h4>Status du film</h4>
          <p>{Details.status}</p>
          <br />
          <h4>Budget</h4>
          <p>${Details.budget}</p>
          <br />
          <h4>Revenu</h4>
          <p>${Details.revenue}</p>
          <br />
          <h4>Langue d'origine</h4>
          <p>{Details.original_language}</p>
          <br />
          <h4>Mots clés</h4>
          <ul></ul>
        </div>
      </div>
    </div>
  );
};

export default SearchCardTV;

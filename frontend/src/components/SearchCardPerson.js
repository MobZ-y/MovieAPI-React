import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const SearchCard = ({ Search, Credits, CreditsCombined }) => {
  const [sortedArray, setSortedArray] = useState([]);
  const [id, setId] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  const genderStr = Search.gender === 1 ? "Femme" : "Homme";

  useEffect(() => {
    setId(Search.id);
  }, [Search.id]);

  React.useEffect(() => {
    const sorted = [...Credits].sort((a, b) => b.popularity - a.popularity);
    setSortedArray(sorted.slice(0, 8));
  }, [Credits]);

  let birthday = Search.birthday;
  let age = ~~((Date.now() - new Date(birthday)) / 31557600000);

  CreditsCombined.sort((a, b) => {
    if (!a.release_date && !a.first_air_date) {
      return -1; // Met les films sans date en premier
    } else if (!b.release_date && !b.first_air_date) {
      return 1; // Met les films sans date en premier
    } else {
      const aDate = a.release_date || a.first_air_date; // Utilise la propriété appropriée
      const bDate = b.release_date || b.first_air_date; // Utilise la propriété appropriée
      return new Date(bDate) - new Date(aDate); // Tri en fonction de la date de sortie
    }
  });

  useEffect(() => {
    if (Search?.id) {
      let storedData = window.localStorage.person
        ? window.localStorage.person.split(",")
        : [];
      setIsAdded(storedData.includes(Search.id.toString()));
    }
  }, [Search]);

  const addStorage = () => {
    let storedData = window.localStorage.person
      ? window.localStorage.person.split(",")
      : [];
    if (!storedData.includes(Search.id.toString())) {
      storedData.push(Search.id);
      window.localStorage.person = storedData;
      setIsAdded(true);
    }
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.person.split(",");
    let newData = storedData.filter((id) => id != Search.id);
    window.localStorage.person = newData;
    setIsAdded(false);
  };
  return (
    <div>
      <div className="search-wrap">
        <div className="search">
          <div className="Profile">
            <img
              src={`https://image.tmdb.org/t/p/w500${Search.profile_path}`}
              alt="drapeau"
              id="pp"
            />
            <h4>Date de Naissance : </h4>
            <p>
              {Search.birthday} ({age}ans)
            </p>
            <br />
            <h4>Lieu de Naissance :</h4>
            <p>{Search.place_of_birth}</p>
            <br />
            <h4>Genre:</h4>
            <p>{genderStr}</p>
            <br />
            <h4>Alias</h4>
            <ul>
              {Search.also_known_as &&
                Search.also_known_as.map((Alias) => <li>{Alias}</li>)}
            </ul>
            <div className="media">
              <NavLink to={`/PhotoPerson/${id}`}>
                <p>Photo de profile</p>
              </NavLink>
              <FontAwesomeIcon icon={faCamera} id="camera" />
            </div>
          </div>
          <div className="Details">
            <div className="title">
              <h3>{Search.name}</h3>
              <div
                className={"btn-add-movie" + (isAdded ? "red" : "")}
                onClick={isAdded ? deleteStorage : addStorage}
              >
                <FontAwesomeIcon
                  icon={isAdded ? faSolidHeart : faRegularHeart}
                />
              </div>
            </div>
            <p>Biographie :</p>
            <br />
            <p>
              {Search.biography
                ? Search.biography
                : "Aucune biographie pour le moment"}
            </p>
            <div className="lower-content-Carousel">
              <div className="carousel">
                <div className="search-carousel">
                  {sortedArray.map((item) => (
                    <div className="card">
                      <div className="card-popular">
                        <NavLink to={`/Movie/${item.id}`}>
                          <div className="profile-popular">
                            <img
                              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                              alt={item.title}
                              id="pp"
                            />
                          </div>
                        </NavLink>
                        <div className="profile-meta">
                          <h3>{item.title}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <h2 id="Interprétation">Interprétation</h2>
            <div className="table">
              {CreditsCombined.map((info) => (
                <table className="fristLine">
                  <tbody>
                    <tr>
                      <td className="year">
                        {info.release_date
                          ? new Date(info.release_date).getFullYear()
                          : info.first_air_date
                          ? new Date(info.first_air_date).getFullYear()
                          : "TBA-"}{" "}
                      </td>
                      <td className="separator">
                        <span></span>
                      </td>
                      <td className="original-title">
                        <NavLink to={`/Movie/${info.id}`}>
                          <p id="original-title-tile">
                            {info.original_title
                              ? info.original_title
                              : info.original_name}
                          </p>
                        </NavLink>{" "}
                        <p id="in">incarnant </p>
                        <p id="incarne-name">
                          {info.character ? info.character : "Inconnue"}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;

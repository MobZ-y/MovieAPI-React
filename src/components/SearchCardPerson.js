import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SearchCard = ({ Search, Credits, CreditsCombined }) => {
  const [sortedArray, setSortedArray] = useState([]);
  const [id, setId] = useState("");
  const [idMovie, setIdMovie] = useState("");

  useEffect(() => {
    setIdMovie(Credits.id);
  }, [Credits.id]);

  useEffect(() => {
    setId(Search.id);
  }, [Search.id]);

  console.log(Search);

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
  return (
    <div>
      <div className="search-wrap">
        <div className="nav-profile">
          <NavLink to={`/PhotoPerson/${id}`}>
            <p>Médias</p>
          </NavLink>
        </div>
        <div className="search">
          <div className="Profile">
            <img
              src={`https://image.tmdb.org/t/p/w500${Search.profile_path}`}
              alt="drapeau"
              id="pp"
            />
            <h4>Date de Naissance : </h4>
            <br />
            <p>
              {Search.birthday} ({age}ans)
            </p>
            <br />
            <h4>Lieu de Naissance :</h4>
            <br />
            <p>{Search.place_of_birth}</p>
            <br />
            <h4>Alias</h4>
            <ul>
              {Search.also_known_as &&
                Search.also_known_as.map((Alias) => <li>{Alias}</li>)}
            </ul>
          </div>
          <div className="Details">
            <h3>{Search.name}</h3>
            <p>Biographie :</p>
            <br />
            <p>{Search.biography}</p>
            <div className="lower-content-Carousel">
              <div className="carousel">
                <div className="search-carousel">
                  {sortedArray.map((item) => (
                    <div className="card">
                      <div className="card-popular">
                        <NavLink to={`/Movie/${idMovie}`}>
                          <div className="profile-popular">
                            <img
                              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                              alt="drapeau"
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
            <div className="table">
              <h2>Interprétation</h2>
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
                        <p id="original-title-tile">
                          {info.original_title
                            ? info.original_title
                            : info.original_name}
                        </p>
                        incarnant <p id="incarne-name">{info.character}</p>
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

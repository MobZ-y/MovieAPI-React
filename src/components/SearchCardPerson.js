import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SearchCard = ({ Search, Credits }) => {
  const [sortedArray, setSortedArray] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    setId(Search.id);
  }, [Search.id]);

  console.log(id);

  React.useEffect(() => {
    const sorted = [...Credits].sort((a, b) => b.popularity - a.popularity);
    setSortedArray(sorted.slice(0, 8));
  }, [Credits]);

  let birthday = Search.birthday;
  let age = ~~((Date.now() - new Date(birthday)) / 31557600000);
  return (
    <div>
      <div className="search-wrap">
        <div className="nav-profile">
          <NavLink to={`/PhotoPerson/${id}`}>
            <p>Images</p>
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
                        <div className="profile-popular">
                          <img
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            alt="drapeau"
                            id="pp"
                          />
                        </div>
                        <div className="profile-meta">
                          <h3>{item.title}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
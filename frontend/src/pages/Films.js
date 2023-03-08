import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";

const Films = () => {
  const [popular, setPopular] = useState([]);

  const handlePopularClick = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=dc4fa11dbb0888468121f0e93ac98077&language=en-US&page=1`
      )
      .then((res) => setPopular(res.data.results));
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=dc4fa11dbb0888468121f0e93ac98077&language=en-US&page=1`
      )
      .then((res) => setPopular(res.data.results));
  }, []);

  const handleTopRatedClick = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=dc4fa11dbb0888468121f0e93ac98077&language=en-US&page=1`
      )
      .then((res) => setPopular(res.data.results));
  };

  console.log(popular);
  return (
    <div>
      <Navigation />

      <main>
        <div className="content-popular">
          <div className="form">
            <button className="btnSort" onClick={handlePopularClick}>
              Populaires
            </button>
            <button
              className="btnSort"
              id="TopRated"
              onClick={handleTopRatedClick}
            >
              Le mieux notés
            </button>
            <button className="btnSort" id="maxToMin">
              Tri décroissant
            </button>
            <button className="btnSort" id="alpha">
              Tri Alphabétique
            </button>
          </div>
          <div className="famous-films">
            {popular.map((popular) => (
              <div className="card-films">
                <div className="card-films">
                  <div className="profile-films">
                    <NavLink to={`/Movie/${popular.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${popular.poster_path}`}
                        alt={popular.name}
                      />
                    </NavLink>
                  </div>
                  <div className="profile-films">
                    <p className="name">{popular.original_title}</p>
                    <p className="sub"></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Films;

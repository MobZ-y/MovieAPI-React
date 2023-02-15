import React, { useState } from "react";

const SearchCardMovie = ({ SearchMovie, Credits }) => {
  const runtimeInMinutes = SearchMovie.runtime;
  const hours = Math.floor(runtimeInMinutes / 60);
  const minutes = runtimeInMinutes % 60;
  const [sortedArray, setSortedArray] = useState([]);

  const divStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${SearchMovie.backdrop_path})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  React.useEffect(() => {
    const castArray = Array.isArray(Credits.cast) ? Credits.cast : [];

    const sorted = castArray.sort((a, b) => a.order - b.order);
    setSortedArray(sorted.slice(0, 8));
  }, [Credits]);
  console.log(Credits);

  const formattedRuntime = `${hours}h ${minutes}min`;
  return (
    <div>
      <div className="header-movie" style={divStyle}>
        <div className="search-movie">
          <div className="Profile-movie">
            <img
              src={`https://image.tmdb.org/t/p/w500${SearchMovie.poster_path}`}
              alt="drapeau"
              id="pp"
            />
          </div>
          <div className="details-movie">
            <h1>
              {SearchMovie.original_title} (
              {new Date(SearchMovie.release_date).getFullYear()})
            </h1>
            <ul>
              {SearchMovie.genres &&
                SearchMovie.genres.map((info) => <li>{info.name}</li>)}
              <li>{formattedRuntime}</li>
            </ul>

            <div className="second-container">
              <div
                id="canvas-movie"
                className={
                  SearchMovie.vote_average === 0
                    ? "grey"
                    : SearchMovie.vote_average > 6
                    ? "green"
                    : SearchMovie.vote_average >= 2 &&
                      SearchMovie.vote_average < 3
                    ? "red"
                    : "orange"
                }
              >
                {SearchMovie.vote_average === 0
                  ? ""
                  : Math.floor(SearchMovie.vote_average * 10).toFixed(0)}
              </div>
              <p>Notes des utilisateurs</p>
            </div>
            <i>{SearchMovie.tagline}</i>
            <h4 id="Synopsis">Synopsis</h4>

            <p>{SearchMovie.overview}</p>
          </div>
        </div>
        <div className="flex-details">
          <div className="lower-content-Carousel-movie">
            <div className="carousel-movie">
              <p>Têtes d'affiches</p>
              <div className="search-carousel-movie">
                {sortedArray.map((item) => (
                  <div className="card">
                    <div className="card-popular">
                      <div className="profile-popular">
                        <img
                          src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                          alt="drapeau"
                          id="pp"
                        />
                      </div>

                      <div className="profile-meta">
                        <h3>{item.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="details-movie">
            <h4>Budget</h4>
            <p>${SearchMovie.budget}</p>
            <br />
            <h4>Revenu</h4>
            <p>${SearchMovie.revenue}</p>
            <br />
            <h4>Langue d'origine</h4>
            <p>{SearchMovie.original_language}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCardMovie;

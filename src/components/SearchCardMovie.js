import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SearchCardMovie = ({ SearchMovie, Credits, Review, Keywords }) => {
  const runtimeInMinutes = SearchMovie.runtime;
  const hours = Math.floor(runtimeInMinutes / 60);
  const minutes = runtimeInMinutes % 60;
  const [sortedArray, setSortedArray] = useState([]);
  const formattedRuntime = `${hours}h ${minutes}min`;

  const [id, setId] = useState("");

  useEffect(() => {
    setId(Credits.id);
  }, [Credits.id]);

  const divStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${SearchMovie.backdrop_path})`,
    borderBottom: "1px solid var(--primaryColor)",
    backgroundPosition: "left calc((50vw - 170px) - 340px) top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  React.useEffect(() => {
    const castArray = Array.isArray(Credits.cast) ? Credits.cast : [];

    const sorted = castArray.sort((a, b) => a.order - b.order);
    setSortedArray(sorted.slice(0, 8));
  }, [Credits]);

  return (
    <div>
      <div className="card-movie">
        <div className="header-movie" style={divStyle}>
          <div className="background-effet">
            <div className="search-movie">
              <div className="search-movie-container">
                <div className="Profile-movie">
                  <img
                    src={
                      SearchMovie.poster_path
                        ? "https://image.tmdb.org/t/p/w500" +
                          SearchMovie.poster_path
                        : "/src/assets/img/babylon.jpg"
                    }
                    alt=""
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
                    <p>{formattedRuntime}</p>
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

                  <p>
                    {SearchMovie.overview
                      ? SearchMovie.overview
                      : "Pas d'information"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-details">
          <div className="details">
            <div className="carousel-movie">
              <p>Têtes d'affiches</p>
              <ul className="search-carousel-movie">
                {sortedArray.map((item) => (
                  <li className="card">
                    <div className="card-popular">
                      <div className="profile-popular">
                        <NavLink>
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
                <NavLink to={`/Cast/${id}`}>
                  <p id="more">Afficher d'avantage </p>
                </NavLink>
              </ul>
            </div>
            <div className="review-part">
              <div className="header-rewiew">
                <ul>
                  <li>Avis</li>
                  <li>Critique</li>
                </ul>
              </div>
              {Review.map((review) => (
                <div className="review-container">
                  <div className="personal-info">
                    <div className="profile">
                      <span></span>
                    </div>
                    <div className="info">
                      <h3>Critique de {review.author}</h3>
                      <p>{review.created_at}</p>
                    </div>
                  </div>
                  <div className="text-info">
                    <p>{review.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="details-second">
            <h4>Budget</h4>
            <p>${SearchMovie.budget}</p>
            <br />
            <h4>Revenu</h4>
            <p>${SearchMovie.revenue}</p>
            <br />
            <h4>Langue d'origine</h4>
            <p>{SearchMovie.original_language}</p>
            <br />
            <h4>Mots clés</h4>
            <ul>
              {Keywords.map((keywords) => (
                <li>{keywords.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCardMovie;

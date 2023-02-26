import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const SearchCardMovie = ({
  SearchMovie,
  Credits,
  Review,
  Keywords,
  Images,
}) => {
  const runtimeInMinutes = SearchMovie.runtime;
  const hours = Math.floor(runtimeInMinutes / 60);
  const minutes = runtimeInMinutes % 60;
  const [sortedArray, setSortedArray] = useState([]);
  const formattedRuntime = `${hours}h ${minutes}min`;
  const [isAdded, setIsAdded] = useState(false);
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

  useEffect(() => {
    if (SearchMovie?.id) {
      let storedData = window.localStorage.movies
        ? window.localStorage.movies.split(",")
        : [];
      setIsAdded(storedData.includes(SearchMovie.id.toString()));
    }
  }, [SearchMovie]);
  const addStorage = () => {
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];
    if (!storedData.includes(SearchMovie.id.toString())) {
      storedData.push(SearchMovie.id);
      window.localStorage.movies = storedData;
      setIsAdded(true);
    }
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.movies.split(",");
    let newData = storedData.filter((id) => id != SearchMovie.id);
    window.localStorage.movies = newData;
    setIsAdded(false);
  };

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
                  <div className="title">
                    <h2 id="name">{SearchMovie.original_title}</h2>
                    <h4 id="release">
                      {" "}
                      ({""}
                      {new Date(SearchMovie.release_date).getFullYear()})
                    </h4>
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
                    <p id="rate">Notes des utilisateurs</p>
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
                <NavLink to={`/Cast/${id}`}>
                  <p id="more">Afficher d'avantage </p>
                </NavLink>
              </ul>
            </div>
            <div className="review-part">
              <div className="header-rewiew">
                <ul>
                  <li id="header">Review</li>
                </ul>
              </div>
              {Review.length === 0 ? (
                <h3 id="no-comment">
                  Aucun Avis pour le moment
                  <FontAwesomeIcon icon={faCircleInfo} id="reviewIcon" />
                </h3>
              ) : (
                Review.map((review) => (
                  <div className="review-container">
                    <div className="personal-info">
                      <div className="profile">
                        <span>?</span>
                      </div>
                      <div className="info">
                        <h3>Critique de {review.author}</h3>
                        <p>
                          Rédigé par {review.author} le {review.created_at}
                        </p>
                      </div>
                    </div>
                    <div className="text-info">
                      <p>{review.content}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <section className="media-movie">
              <div className="menu">
                <h3>Média</h3>
                <ul>
                  <li>Vidéo</li>
                  <li>Images</li>
                </ul>
              </div>
              <div className="menu-content">
                <div className="video"></div>
              </div>
            </section>
          </div>
          <div className="details-second">
            <h4>Status du film</h4>
            <p>{SearchMovie.status}</p>
            <br />
            <h4>Budget</h4>
            <p>
              {SearchMovie.budget !== undefined
                ? `$${SearchMovie.budget.toLocaleString()}`
                : "-"}
            </p>
            <br />
            <h4>Revenu</h4>
            <p>
              {SearchMovie.revenue !== undefined
                ? `$${SearchMovie.revenue.toLocaleString()}`
                : "-"}
            </p>
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

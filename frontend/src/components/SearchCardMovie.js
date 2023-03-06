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
  recommendations,
  video,
}) => {
  const runtimeInMinutes = SearchMovie.runtime;
  const hours = Math.floor(runtimeInMinutes / 60);
  const minutes = runtimeInMinutes % 60;
  const [sortedArray, setSortedArray] = useState([]);
  const formattedRuntime = `${hours}h ${minutes}min`;
  const [isAdded, setIsAdded] = useState(false);
  const [id, setId] = useState("");
  const maDate = new Date(Review.created_at);

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
                  <div className="poster">
                    <img
                      src={
                        SearchMovie.poster_path
                          ? "https://image.tmdb.org/t/p/w500" +
                            SearchMovie.poster_path
                          : "/frontend/public/nopict.png"
                      }
                      alt=""
                    />
                  </div>
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
                  <div className="info">
                    <ul>
                      {SearchMovie.genres &&
                        SearchMovie.genres.map((info) => <li>{info.name}</li>)}
                      <p>{formattedRuntime}</p>
                    </ul>
                  </div>

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

                    <p id="trailer">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z"
                          fill="rgba(255,255,255,1)"
                        />
                      </svg>
                      <NavLink
                        to={
                          video[0] && video[0].key
                            ? `https://www.youtube.com/watch?v=${video[0].key}`
                            : "-"
                        }
                        target="_blank"
                      >
                        Bande d'annonce
                      </NavLink>
                    </p>
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
        <div className="mainflex">
          <div className="preflex">
            <div className="flex-details">
              <div className="details">
                <div className="carousel-movie">
                  <h3 id="role">Distribution des rôles</h3>
                  <ul className="search-carousel-movie">
                    {sortedArray.map((item) => (
                      <li className="card-movie">
                        <div className="card-popular-movie">
                          <div className="profile-popular-movie">
                            <NavLink to={`/ProfileCard/${item.id}`}>
                              {item.profile_path ? (
                                <img
                                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                                  alt={item.name}
                                />
                              ) : (
                                <img src="/nopict.png" alt={item.name} />
                              )}
                            </NavLink>
                          </div>

                          <div className="profile-meta-movie">
                            <h3>{item.name}</h3>
                            <p>{item.character}</p>
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
                      Aucun avis pour le moment
                      <FontAwesomeIcon icon={faCircleInfo} id="reviewIcon" />
                    </h3>
                  ) : (
                    Review.map((review) => (
                      <div className="review-container">
                        <div className="personal-info">
                          <div className="info">
                            <h3>Critique de {review.author}</h3>
                            <p>
                              Rédigé par {review.author} le{" "}
                              {maDate.toLocaleDateString("fr")}
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

                <section className="recommandation-movie">
                  <div className="recommandations">
                    <h3>Recommandations</h3>
                  </div>
                  <div className="carousel-movie">
                    <ul className="search-carousel-movie">
                      {recommendations.length === 0 ? (
                        <h3 id="no-comment">
                          Aucune recommandation pour le moment
                          <FontAwesomeIcon
                            icon={faCircleInfo}
                            id="reviewIcon"
                          />
                        </h3>
                      ) : (
                        recommendations.map((recommendations) => (
                          <li className="card-recommendations">
                            <div className="card-popular">
                              <div className="profile-popular-recommendations">
                                <NavLink to={`/Movie/${recommendations.id}`}>
                                  {recommendations.backdrop_path ? (
                                    <img
                                      src={`https://image.tmdb.org/t/p/w500${recommendations.backdrop_path}`}
                                      alt={recommendations.name}
                                    />
                                  ) : (
                                    <img
                                      src={`https://image.tmdb.org/t/p/w500${recommendations.poster_path}`}
                                      alt={recommendations.name}
                                    />
                                  )}
                                </NavLink>
                              </div>

                              <div className="profile-meta">
                                <h3>{recommendations.original_title}</h3>
                              </div>
                            </div>
                          </li>
                        ))
                      )}
                    </ul>
                  </div>
                </section>
              </div>
              <div className="details-second">
                <strong>Statut</strong>
                <p>{SearchMovie.status === "Released" ? "Sortie" : ""}</p>
                <br />
                <strong>Budget</strong>
                <p>
                  {SearchMovie.budget !== undefined
                    ? `$${SearchMovie.budget.toLocaleString()}`
                    : "-"}
                </p>
                <br />
                <strong>Revenu</strong>
                <p>
                  {SearchMovie.revenue !== undefined
                    ? `$${SearchMovie.revenue.toLocaleString()}`
                    : "-"}
                </p>
                <br />
                <strong>Langue d'origine</strong>
                <p>{SearchMovie.original_language === "en" ? "Anglais" : ""}</p>
                <br />
                <strong>Mots clés</strong>
                <ul>
                  {Keywords.map((keywords) => (
                    <li>{keywords.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCardMovie;

{
  /* <div>
      <div className="card-movie">
        <div className="header-movie" style={divStyle}>
          <div className="background-effet">
            <div className="search-movie">
              
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div> */
}

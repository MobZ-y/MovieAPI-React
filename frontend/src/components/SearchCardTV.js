import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";

const SearchCardTV = ({ Details, Credits }) => {
  const runtimeInMinutes = Details.episode_run_time;
  const hours = Math.floor(runtimeInMinutes / 60);
  const minutes = runtimeInMinutes % 60;
  const formattedRuntime = `${hours}h ${minutes}min`;
  const [isAdded, setIsAdded] = useState(false);
  const [sortedArray, setSortedArray] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    setId(Credits.id);
  }, [Credits.id]);

  const divStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${Details.backdrop_path})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  React.useEffect(() => {
    const castArray = Array.isArray(Credits.cast) ? Credits.cast : [];
    const crewArray = Array.isArray(Credits.crew) ? Credits.crew : [];
    const mergedArray = [...castArray, ...crewArray];
    const sorted = mergedArray.sort((a, b) => b.popularity - a.popularity);
    const sliced = sorted.slice(0, 8);
    setSortedArray(sliced);
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
      <div className="card-tv">
        <div className="header-tv" style={divStyle}>
          <div className="background-effet">
            <div className="search-tv">
              <div className="search-tv-container">
                <div className="Profile-tv">
                  <img
                    src={
                      Details.poster_path
                        ? "https://image.tmdb.org/t/p/w500" +
                          Details.poster_path
                        : "/src/assets/img/babylon.jpg"
                    }
                    alt=""
                  />
                </div>
                <div className="details-tv">
                  <div className="title">
                    <h2 id="name">{Details.name}</h2>
                    <h4 id="release">
                      {" "}
                      ({""}
                      {new Date(Details.first_air_date).getFullYear()})
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
                      {Details.genres &&
                        Details.genres.map((info) => <li>{info.name}</li>)}
                      <p>{formattedRuntime}</p>
                    </ul>
                  </div>

                  <div className="second-container">
                    <div
                      id="canvas-movie"
                      className={
                        Details.vote_average === 0
                          ? "grey"
                          : Details.vote_average > 6
                          ? "green"
                          : Details.vote_average >= 2 &&
                            Details.vote_average < 3
                          ? "red"
                          : "orange"
                      }
                    >
                      {Details.vote_average === 0
                        ? ""
                        : Math.floor(Details.vote_average * 10).toFixed(0)}
                    </div>
                    <p id="rate">Notes des utilisateurs</p>

                    {/* <p id="trailer">
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
                    </p> */}
                  </div>
                  <i>{Details.tagline}</i>
                  <h4 id="Synopsis">Synopsis</h4>

                  <p>
                    {Details.overview ? Details.overview : "Pas d'information"}
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
                <div className="carousel-tv">
                  <p>Têtes d'affiches</p>
                  <ul className="search-carousel-tv">
                    {sortedArray.map((item) => (
                      <li className="card">
                        <div className="card-popular">
                          <div className="profile-popular">
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

                          <div className="profile-meta">
                            <h3>{item.name}</h3>
                            <h3>{item.character}</h3>
                          </div>
                        </div>
                      </li>
                    ))}
                    <NavLink to={`/CastTV/${id}`}>
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
                  {/* {Review.length === 0 ? (
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
                              Rédigé par {review.author} le {review.created_at}
                            </p>
                          </div>
                        </div>
                        <div className="text-info">
                          <p>{review.content}</p>
                        </div>
                      </div>
                    ))
                  )} */}
                </div>

                <section className="recommandation-tv">
                  <div className="recommandations">
                    <h3>Recommandations</h3>
                  </div>
                  <div className="carousel-tv">
                    <ul className="search-carousel-tv">
                      {/* {recommendations.map((recommendations) => (
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
                      ))} */}
                    </ul>
                  </div>
                </section>
              </div>
              <div className="details-second">
                <h4>Status du film</h4>
                <p>{Details.status}</p>
                <br />
                <h4>Langue d'origine</h4>
                <p>{Details.original_language}</p>
                <br />
                <h4>Mots clés</h4>
                <ul>
                  {/* {Keywords.map((keywords) => (
                    <li>{keywords.name}</li>
                  ))} */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCardTV;

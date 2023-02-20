import React from "react";

const SearchCardTV = ({ Details }) => {
  const runtimeInMinutes = Details.runtime;
  const hours = Math.floor(runtimeInMinutes / 60);
  const minutes = runtimeInMinutes % 60;

  const divStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${Details.backdrop_path})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const formattedRuntime = `${hours}h ${minutes}min`;
  return (
    <div>
      <div className="header-movie" style={divStyle}>
        <div className="search-movie">
          <div className="search-movie-container">
            <div className="Profile-movie">
              <img
                src={
                  Details.poster_path
                    ? "https://image.tmdb.org/t/p/w500" + Details.poster_path
                    : "/src/assets/img/babylon.jpg"
                }
                alt=""
              />
            </div>
            <div className="details-movie">
              <h1>
                {Details.name ? Details.name : Details.original_name} (
                {new Date(Details.first_air_date).getFullYear()})
              </h1>
              <ul>
                {Details.genres &&
                  Details.genres.map((info) => <li>{info.name}</li>)}
                <li>{formattedRuntime}</li>
              </ul>

              <div className="second-container">
                <div
                  id="canvas-movie"
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
    </div>
  );
};

export default SearchCardTV;

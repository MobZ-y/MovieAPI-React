import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import CardMovie from "./CardMovie";
import CardTV from "./CardTV";

const MoviesAndTV = () => {
  const [data, setData] = useState([]);
  const [Movie, setMovie] = useState([]);
  const [Tv, setTv] = useState([]);
  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/trending/all/day?api_key=dc4fa11dbb0888468121f0e93ac98077&page=1"
  );
  const contentTypes = [
    {
      name: "Populaires",
      url: "https://api.themoviedb.org/3/trending/all/day?api_key=dc4fa11dbb0888468121f0e93ac98077&page=1",
    },
    {
      name: "Populaires TV",
      url: "https://api.themoviedb.org/3/tv/popular?api_key=dc4fa11dbb0888468121f0e93ac98077",
    },
  ];

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=dc4fa11dbb0888468121f0e93ac98077"
      )
      .then((res) => setMovie(res.data.results));
  }, []);

  useEffect(() => {
    axios.get(url).then((res) => {
      if (url.includes("tv")) {
        setTv(res.data.results);
      } else {
        setData(res.data.results);
      }
    });
  }, [url]);

  const handleNavLinkClick = (contentType) => {
    const content = contentTypes.find((type) => type.name === contentType);
    setUrl(content.url);
  };

  return (
    <div>
      <div className="movies-trending">
        <div className="Switch">
          {contentTypes.map((contentType) => (
            <NavLink
              key={contentType.name}
              id={contentType.name}
              onClick={() => handleNavLinkClick(contentType.name)}
            >
              <h3>{contentType.name}</h3>
            </NavLink>
          ))}
        </div>
        <div className="carousel">
          <div className="trending">
            {url.includes("tv")
              ? Tv.map((tvShow, index) => <CardTV key={index} Tv={tvShow} />)
              : data.map((movie, index) => (
                  <CardMovie key={index} Movies={movie} />
                ))}
          </div>
        </div>
      </div>
      <div className="movies-trending">
        <div className="carousel">
          <h3>Films Populaires</h3>
          <div className="trending">
            {Movie.map((movie2, index) => (
              <CardMovie key={index} Movies={movie2} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesAndTV;

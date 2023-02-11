import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Card from "./Card";

const MoviesAndTV = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/trending/all/day?api_key=dc4fa11dbb0888468121f0e93ac98077&page=1"
  );
  const contentTypes = [
    {
      name: "Trending",
      url: "https://api.themoviedb.org/3/trending/all/day?api_key=dc4fa11dbb0888468121f0e93ac98077&page=1",
    },
    {
      name: "Trending TV",
      url: "https://api.themoviedb.org/3/tv/popular?api_key=dc4fa11dbb0888468121f0e93ac98077",
    },
    {
      name: "Trending Movie",
      url: "https://api.themoviedb.org/3/movie/popular?api_key=dc4fa11dbb0888468121f0e93ac98077",
    },
  ];

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data.results));
  }, [url]);

  const handleNavLinkClick = (contentType) => {
    setUrl(contentTypes.find((type) => type.name === contentType).url);
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
            {data.map((Movies, index) => (
              <Card key={index} Movies={Movies} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesAndTV;

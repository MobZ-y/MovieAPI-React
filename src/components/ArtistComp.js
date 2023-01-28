import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CardArtist from "./CardArtist";

const ArtistComp = () => {
  const [data, setData] = useState([]);
  let [page, setPage] = useState("1");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/popular?api_key=dc4fa11dbb0888468121f0e93ac98077&language=en-US&page=${page}`
      )
      .then((res) => setData(res.data.results));
  }, [page]);

  return (
    <div className="content">
      <div className="famous-actors">
        {data.map((Artist, index) => (
          <CardArtist key={index} Artist={Artist} />
        ))}
      </div>
      <div className="pages">
        <NavLink>
          <button className="previous">prev</button>
        </NavLink>
        <h2 className="count"></h2>
        <button className="next">
          <p>Next</p>
        </button>
      </div>
    </div>
  );
};

export default ArtistComp;

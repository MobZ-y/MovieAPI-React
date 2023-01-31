import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CardArtist from "./CardArtist";

const ArtistComp = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/popular?api_key=dc4fa11dbb0888468121f0e93ac98077&language=en-US&page=${page}`
      )
      .then((res) => setData(res.data.results));
  };

  useEffect(() => {
    getData();
  }, [page]);

  const setPageUpdateAdd = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const setPageUpdateMinus = () => {
    if (page < 1) {
    } else {
      setPage((nextPage) => nextPage - 1);
      console.log(page);
      getData();
    }
  };
  return (
    <div className="content">
      <div className="famous-actors">
        {data.map((Artist, index) => (
          <CardArtist key={index} Artist={Artist} />
        ))}
      </div>
      <div className="pages">
        <NavLink>
          <button className="previous" onClick={setPageUpdateMinus}>
            prev
          </button>
        </NavLink>
        <h2 className="count"></h2>
        <button className="next" onClick={setPageUpdateAdd}>
          <p>Next</p>
        </button>
      </div>
    </div>
  );
};

export default ArtistComp;

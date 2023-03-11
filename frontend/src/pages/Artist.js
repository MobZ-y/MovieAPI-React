import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CardArtist from "../components/CardArtist";
import Navigation from "../components/Navigation";

const Artist = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/popular?api_key=dc4fa11dbb0888468121f0e93ac98077&language=fr-FR&page=${page}`
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

      getData();
    }
  };
  return (
    <div>
      <Navigation />
      <div className="content">
        <h2>Populaires</h2>
        <div className="famous-actors">
          {data.map((Artist, index) => (
            <CardArtist key={index} Artist={Artist} />
          ))}
        </div>
        <div className="pages">
          <p onClick={setPageUpdateMinus}>Précedent</p>
          <h2 className="count">{page}</h2>
          <p onClick={setPageUpdateAdd}>Suivant</p>
        </div>
      </div>
    </div>
  );
};

export default Artist;

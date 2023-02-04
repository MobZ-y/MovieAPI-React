import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import SearchCard from "./SearchCard";

const Search = () => {
  const [People, setPeople] = useState("Ana de armas");
  const [data, setData] = useState([]);
  let [ids, setId] = useState("224513");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/person?api_key=dc4fa11dbb0888468121f0e93ac98077&language=en-US&query=${People}`
      )
      .then((res) => setId(res.data.results[0].id));
  }, [People]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${ids}?api_key=dc4fa11dbb0888468121f0e93ac98077&language=en-US&query=`
      )
      .then((res) => setData(res.data));
  }, [ids]);

  console.log(ids);
  console.log(data);

  return (
    <div className="people">
      {data.length > 0 && <SearchCard key={0} Search={data[0]} />}
    </div>
  );
};

export default Search;

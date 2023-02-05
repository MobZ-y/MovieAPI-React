import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import SearchCard from "./SearchCard";

const Search = () => {
  const [People, setPeople] = useState("");
  const [data, setData] = useState([]);
  const [Credits, setCredits] = useState([]);
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

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${ids}/movie_credits?api_key=dc4fa11dbb0888468121f0e93ac98077&language=en-US`
      )
      .then((res) => setCredits(res.data.results[0]));
  }, [ids]);

  console.log(Credits);

  return (
    <div className="people">
      <SearchCard key={0} Credits={Credits} Search={data} />
    </div>
  );
};

export default Search;

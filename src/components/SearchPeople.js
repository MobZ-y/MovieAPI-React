import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchCard from "./SearchCard";

const SearchPeople = () => {
  const [data, setData] = useState([]);
  const [People, setPage] = useState("Ana de Armas");

  console.log(People);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/person?api_key=dc4fa11dbb0888468121f0e93ac98077&language=en-US&query=${People}`
      )
      .then((res) => setData(res.data.results));
  }, []);

  return (
    <div>
      <div className="people">
        {data.map((Search, index) => (
          <SearchCard key={index} Search={Search} />
        ))}
      </div>
    </div>
  );
};

export default SearchPeople;

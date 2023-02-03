import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchCard from "./SearchCard";

const Searc2h = () => {
  const [data, setData] = useState([]);
  const [People, setPeople] = useState("Ana de armas");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/person?api_key=dc4fa11dbb0888468121f0e93ac98077&language=en-US&query=${People}`
      )
      .then((res) => setData(res.data.results));
  }, [People]);

  console.log(People);
  return (
    <div>
      {" "}
      <div className="people">
        {data.map((Search, index) => (
          <SearchCard key={index} Search={Search} />
        ))}
      </div>
    </div>
  );
};

export default Searc2h;

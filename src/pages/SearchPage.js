import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import SearchPreviewCard from "../components/SearchPreviewCard";

const SearchPage = () => {
  const [People, setPeople] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/person?api_key=dc4fa11dbb0888468121f0e93ac98077&language=en-US&query=${People}`
      )
      .then((res) => setData(res.data.results));
  }, [People]);

  console.log(data);
  return (
    <div>
      <Navigation />

      <form action="" className="input-form">
        <h3>Chercher un Artiste </h3>
        <input
          type="text"
          placeholder="entrez le nom d'un artiste !"
          onChange={(e) => setPeople(e.target.value)}
        />
      </form>
      {data.map((Search, index) => (
        <SearchPreviewCard key={index} Search={Search} />
      ))}
    </div>
  );
};

export default SearchPage;

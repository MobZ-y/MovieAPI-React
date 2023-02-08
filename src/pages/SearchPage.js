import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import { useParams } from "react-router-dom";
import SearchPreviewCard from "../components/SearchPreviewCard";

const SearchTestPage = () => {
  const { People } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=dc4fa11dbb0888468121f0e93ac98077&language=en-US&query=${People}`
      )
      .then((res) => setData(res.data.results));
  }, [People]);

  console.log(data);

  return (
    <div>
      <Navigation />
      <div className="content-wrapper">
        <div className="selector">
          <ul>
            <li>Actors</li>
            <li>Movie</li>
          </ul>
        </div>
        <div className="Cards">
          {data.map((Search, index) => (
            <SearchPreviewCard key={index} Search={Search} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchTestPage;

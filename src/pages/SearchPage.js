import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import { useParams } from "react-router-dom";
import SearchPreviewMovie from "../components/SearchPreviewMovie";
import SearchPreviewPerson from "../components/SearchPreviewPerson";

const SearchTestPage = () => {
  const { People } = useParams();
  const [data, setData] = useState([]);
  const [dataPerson, setDataPerson] = useState([]);
  const [dataMovie, setDataMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=dc4fa11dbb0888468121f0e93ac98077&language=en-US&query=${People}`
      )
      .then((res) => setData(res.data.results));
  }, [People]);

  const sortedData = data.sort((a, b) => {
    if (a.media_type === "person" && b.media_type === "movie") {
      return -1;
    } else if (a.media_type === "movie" && b.media_type === "person") {
      return 1;
    } else {
      return 0;
    }
  });

  const people = sortedData.filter((item) => item.media_type === "person");
  const movies = sortedData.filter((item) => item.media_type === "movie");

  useEffect(() => {
    setDataPerson(people);
    setDataMovie(movies);
  }, [data]);

  console.log(dataPerson);
  console.log(dataMovie);
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
          {dataPerson.map((SearchPerson, index) => (
            <SearchPreviewPerson key={index} SearchPerson={SearchPerson} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchTestPage;

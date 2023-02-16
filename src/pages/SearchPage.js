import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import { useParams } from "react-router-dom";
import SearchPreviewMovie from "../components/SearchPreviewMovie";
import SearchPreviewPerson from "../components/SearchPreviewPerson";
import SearchPreviewTV from "../components/SearchPreviewTV";

const SearchTestPage = () => {
  const { People } = useParams();
  const [data, setData] = useState([]);

  const [selectedTab, setSelectedTab] = useState("person");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=dc4fa11dbb0888468121f0e93ac98077&language=fr-FR&query=${People}`
      )
      .then((res) => setData(res.data.results));
  }, [People]);

  // Check if the first element is a movie
  useEffect(() => {
    if (data.length > 0) {
      if (data[0].media_type === "movie") {
        setSelectedTab("movie");
      } else if (data[0].media_type === "tv") {
        setSelectedTab("tv");
      }
    }
  }, [data]);

  /// Sort for Movie and Person
  const sortedData = data.sort((a, b) => {
    if (a.media_type === "movie" && b.media_type === "person") {
      return -1;
    } else if (a.media_type === "person" && b.media_type === "movie") {
      return 1;
    } else if (
      a.media_type === "tv" &&
      b.media_type !== "person" &&
      b.media_type !== "movie"
    ) {
      return -1;
    } else if (
      b.media_type === "tv" &&
      a.media_type !== "person" &&
      a.media_type !== "movie"
    ) {
      return 1;
    } else {
      return 0;
    }
  });

  const people = sortedData.filter((item) => item.media_type === "person");
  const movies = sortedData.filter((item) => item.media_type === "movie");
  const tvShows = sortedData.filter((item) => item.media_type === "tv");

  console.log(tvShows);

  return (
    <div>
      <Navigation />
      <div className="content-wrapper">
        <div className="selector-content">
          <div className="selector">
            <h3>Résultats</h3>
            <ul>
              <li onClick={() => setSelectedTab("person")}>Acteurs</li>
              <li onClick={() => setSelectedTab("movie")}>Films</li>
              <li onClick={() => setSelectedTab("tv")}>TV</li>
            </ul>
          </div>
        </div>
        <div className="Cards">
          {selectedTab === "person" &&
            people.map((SearchPerson, index) => (
              <SearchPreviewPerson key={index} SearchPerson={SearchPerson} />
            ))}
          {selectedTab === "movie" &&
            movies.map((SearchMovie, index) => (
              <SearchPreviewMovie key={index} SearchMovie={SearchMovie} />
            ))}
          {selectedTab === "tv" &&
            tvShows.map((tv, index) => <SearchPreviewTV key={index} tv={tv} />)}
        </div>
      </div>
    </div>
  );
};

export default SearchTestPage;

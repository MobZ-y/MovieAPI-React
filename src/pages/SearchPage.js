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
  const [countByType, setCountByType] = useState({});

  const [selectedTab, setSelectedTab] = useState("person");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=dc4fa11dbb0888468121f0e93ac98077&language=fr-FR&query=${People}`
      )
      .then((res) => setData(res.data.results));
  }, [People]);

  // Vérifie le premier élement pour l'affichage
  useEffect(() => {
    if (data.length > 0) {
      if (data[0].media_type === "movie") {
        setSelectedTab("movie");
      } else if (data[0].media_type === "tv") {
        setSelectedTab("tv");
      }
    }
  }, [data]);

  /// Sort pour Movie et Person
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

  // Affichage du nombre par catégorie sur sélector

  useEffect(() => {
    // Count the items in the data array by media type
    const newCountByType = data.reduce((counts, item) => {
      if (!counts[item.media_type]) {
        counts[item.media_type] = 1;
      } else {
        counts[item.media_type]++;
      }
      return counts;
    }, {});

    // Update the state with the new counts
    setCountByType(newCountByType);
  }, [data]);
  console.log(countByType);
  return (
    <div>
      <Navigation />
      <div className="content-wrapper">
        <div className="selector-content">
          <div className="selector">
            <h3>Résultats</h3>
            <ul>
              <li onClick={() => setSelectedTab("person")}>
                <p>Acteurs</p>
                <span>{countByType["person"] || 0}</span>
              </li>
              <li onClick={() => setSelectedTab("movie")}>
                <p>Films</p>
                <span>{countByType["movie"] || 0}</span>
              </li>
              <li onClick={() => setSelectedTab("tv")}>
                <p>TV</p>
                <span>{countByType["tv"] || 0}</span>
              </li>
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

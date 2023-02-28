import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import SearchCardMovie from "../components/SearchCardMovie";

const SearchMovie = () => {
  const [data, setData] = useState([]);
  const [credits, setCredits] = useState([]);
  const [review, setReview] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const { idMovie } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${idMovie}?api_key=dc4fa11dbb0888468121f0e93ac98077&language=fr-FR&query=`
      )
      .then((res) => setData(res.data));
  }, [idMovie]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${idMovie}/credits?api_key=dc4fa11dbb0888468121f0e93ac98077&language=fr-FR&query=`
      )
      .then((res) => setCredits(res.data));
  }, [idMovie]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${idMovie}/reviews?api_key=dc4fa11dbb0888468121f0e93ac98077&language=fr-FR&query=`
      )
      .then((res) => setReview(res.data.results));
  }, [idMovie]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${idMovie}/recommendations?api_key=dc4fa11dbb0888468121f0e93ac98077&language=fr-FR&query=`
      )
      .then((res) => setRecommendations(res.data.results));
  }, [idMovie]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${idMovie}/keywords?api_key=dc4fa11dbb0888468121f0e93ac98077&language=fr-FR&query=`
      )
      .then((res) => setKeywords(res.data.keywords));
  }, [idMovie]);

  console.log(recommendations);
  return (
    <div>
      <Navigation />

      <SearchCardMovie
        key={data.id}
        SearchMovie={data}
        Credits={credits}
        Review={review}
        Keywords={keywords}
        recommendations={recommendations}
      />
    </div>
  );
};

export default SearchMovie;

import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { useParams } from "react-router-dom";
import axios from "axios";
import SearchCardTV from "../components/SearchCardTV";

const SearchTV = () => {
  const { idTv } = useParams();
  const [Details, setDetails] = useState([]);
  const [Credits, setCredits] = useState([]);
  const [Review, setReview] = useState([]);
  const [Recommendations, setRecommendations] = useState([]);
  const [Season, setSeason] = useState([]);
  const [Keywords, setKeywords] = useState([]);

  console.log(idTv);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${idTv}?api_key=dc4fa11dbb0888468121f0e93ac98077&language=fr-FR&query=`
      )
      .then((res) => setDetails(res.data));
  }, [idTv]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${idTv}/credits?api_key=dc4fa11dbb0888468121f0e93ac98077&language=fr-FR&query=`
      )
      .then((res) => setCredits(res.data));
  }, [idTv]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${idTv}/reviews?api_key=dc4fa11dbb0888468121f0e93ac98077&language=fr-FR&query=`
      )
      .then((res) => setReview(res.data.results));
  }, [idTv]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${idTv}/recommendations?api_key=dc4fa11dbb0888468121f0e93ac98077&language=fr-FR&query=`
      )
      .then((res) => setRecommendations(res.data.results));
  }, [idTv]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${idTv}/season/5?api_key=dc4fa11dbb0888468121f0e93ac98077&language=fr-FR&query=`
      )
      .then((res) => setSeason(res.data));
  }, [idTv]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${idTv}/keywords?api_key=dc4fa11dbb0888468121f0e93ac98077&language=fr-FR&query=`
      )
      .then((res) => setKeywords(res.data.results));
  }, [idTv]);

  console.log(Keywords);
  return (
    <div>
      <Navigation />
      <SearchCardTV
        key={0}
        Details={Details}
        Credits={Credits}
        Review={Review}
        Recommendations={Recommendations}
        Keywords={Keywords}
      />
    </div>
  );
};

export default SearchTV;

import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import { useParams } from "react-router-dom";
import SearchCardPerson from "../components/SearchCardPerson";

const SearchPerson = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [Credits, setCredits] = useState([]);
  const [CreditsCombined, setCreditsCombined] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}?api_key=dc4fa11dbb0888468121f0e93ac98077&language=fr-FR&query=`
      )
      .then((res) => setData(res.data));
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=dc4fa11dbb0888468121f0e93ac98077&language=fr-FR`
      )
      .then((res) => setCredits(res.data.cast));
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=dc4fa11dbb0888468121f0e93ac98077&language=fr-US`
      )
      .then((res) => setCreditsCombined(res.data.cast));
  }, [id]);

  console.log(data);

  return (
    <div>
      <Navigation />
      <div className="ff">
        <SearchCardPerson
          key={data.id}
          Search={data}
          Credits={Credits}
          CreditsCombined={CreditsCombined}
        />
      </div>
    </div>
  );
};

export default SearchPerson;

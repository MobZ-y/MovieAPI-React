import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import { useParams } from "react-router-dom";
import SearchCard from "../components/SearchCard";

const ProfileCard = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [Credits, setCredits] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}?api_key=dc4fa11dbb0888468121f0e93ac98077&language=en-US&query=`
      )
      .then((res) => setData(res.data));
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=dc4fa11dbb0888468121f0e93ac98077&language=en-US`
      )
      .then((res) => setCredits(res.data.cast));
  }, [id]);

  console.log(Credits);

  return (
    <div>
      <Navigation />
      <div className="ff">
        <SearchCard key={0} Search={data} Credits={Credits} />
      </div>
    </div>
  );
};

export default ProfileCard;

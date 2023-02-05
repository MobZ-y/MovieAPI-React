import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import { useParams } from "react-router-dom";
import SearchCard from "../components/SearchCard";

const ProfileCard = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}?api_key=dc4fa11dbb0888468121f0e93ac98077&language=en-US&query=`
      )
      .then((res) => setData(res.data));
  }, [id]);

  return (
    <div>
      <Navigation />
      <div className="ff">
        <SearchCard key={0} Search={data} />
      </div>
    </div>
  );
};

export default ProfileCard;

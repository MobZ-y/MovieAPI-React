import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import SearchCardMovie from "../components/SearchCardMovie";

const MovieCard = () => {
  const [data, setData] = useState([]);
  const { idMovie } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${idMovie}?api_key=dc4fa11dbb0888468121f0e93ac98077&language=en-US&query=`
      )
      .then((res) => setData(res.data));
  }, [idMovie]);

  console.log(data);
  return (
    <div>
      <Navigation />
      <div className="ff">
        <SearchCardMovie key={0} SearchMovie={data} />
      </div>
    </div>
  );
};

export default MovieCard;

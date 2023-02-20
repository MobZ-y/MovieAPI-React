import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { useParams } from "react-router-dom";
import axios from "axios";
import SearchCardTV from "../components/SearchCardTV";

const TVCard = () => {
  const { idTv } = useParams();
  const [Details, setDetails] = useState([]);

  console.log(idTv);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${idTv}?api_key=dc4fa11dbb0888468121f0e93ac98077&language=fr-FR&query=`
      )
      .then((res) => setDetails(res.data));
  }, [idTv]);

  console.log(Details);
  return (
    <div>
      <Navigation />
      <SearchCardTV key={0} Details={Details} />
    </div>
  );
};

export default TVCard;
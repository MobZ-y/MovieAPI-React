import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import { useParams } from "react-router-dom";

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=dc4fa11dbb0888468121f0e93ac98077&language=fr-FR&query=`
      )
      .then((res) => setCredits(res.data.cast));
  }, [id]);

  console.log(credits);
  return (
    <div>
      <Navigation />
      <div className="cast-members">
        <ul className="cast-cards">
          {credits.map((info) => (
            <div className="card">
              <div className="profile-members">
                <img
                  src={`https://image.tmdb.org/t/p/w500${info.profile_path}`}
                  alt="drapeau"
                  id="pp"
                />
              </div>
              <div className="info">
                <li>{info.name}</li>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cast;

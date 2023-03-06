import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Navigation from "../components/Navigation";
import { useParams } from "react-router-dom";

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [creditsCrew, setCreditsCrew] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}/credits?api_key=dc4fa11dbb0888468121f0e93ac98077&language=fr-FR&query=`
      )
      .then((res) => setCredits(res.data.cast));
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}/credits?api_key=dc4fa11dbb0888468121f0e93ac98077&language=fr-FR&query=`
      )
      .then((res) => setCreditsCrew(res.data.crew));
  }, [id]);

  console.log(credits);
  return (
    <div>
      <Navigation />
      <div className="back-profile">
        <NavLink to={`/TV/${id}`}>
          <p>Retour au Film</p>
        </NavLink>
      </div>
      <div className="pre-members">
        <div className="members">
          <div className="cast-members">
            <h3>Distribution des rôles</h3>
            <ul className="cast-cards">
              {credits.map((info) => (
                <div className="card">
                  <div className="profile-members">
                    <NavLink to={`/ProfileCard/${info.id}`}>
                      {info.profile_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w500${info.profile_path}`}
                          alt={info.name}
                        />
                      ) : (
                        <img src="/nopict.png" alt={info.name} />
                      )}
                    </NavLink>
                  </div>
                  <div className="info">
                    <li>{info.name}</li>
                    <li>{info.character}</li>
                  </div>
                </div>
              ))}
            </ul>
          </div>
          <div className="crew-members">
            <h3>Équipe technique</h3>
            <ul className="crew-cards">
              {creditsCrew.map((info) => (
                <div className="card">
                  <div className="profile-members">
                    <NavLink to={`/ProfileCard/${info.id}`}>
                      {info.profile_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w500${info.profile_path}`}
                          alt={info.name}
                        />
                      ) : (
                        <img src="/nopict.png" alt={info.name} />
                      )}
                    </NavLink>
                  </div>
                  <div className="info">
                    <li>{info.name}</li>
                    <li>{info.job}</li>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cast;

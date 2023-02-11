import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

const PhotoPerson = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}/images?api_key=dc4fa11dbb0888468121f0e93ac98077`
      )
      .then((res) => setData(res.data.profiles));
  }, [id]);

  console.log(data);
  return (
    <div>
      <Navigation />
      <div className="back-profile">
        <NavLink to={`/ProfileCard/${id}`}>
          <p>Retour au Profile</p>
        </NavLink>
      </div>
      <div className="image-main">
        <div className="image-low">
          {data.map((info) => (
            <div className="card-image">
              <div className="image-container">
                <img src={`https://image.tmdb.org/t/p/w500${info.file_path}`} />
              </div>
              <div className="info-container">
                <p>
                  {info.width}x{info.height}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoPerson;

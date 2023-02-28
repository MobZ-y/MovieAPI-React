import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const HomeActors = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/trending/person/week?api_key=dc4fa11dbb0888468121f0e93ac98077"
  );
  const contentTypes = [
    {
      name: "Semaine",
      url: "https://api.themoviedb.org/3/trending/person/week?api_key=dc4fa11dbb0888468121f0e93ac98077",
    },
    {
      name: "Jour",
      url: "https://api.themoviedb.org/3/trending/person/day?api_key=dc4fa11dbb0888468121f0e93ac98077",
    },
  ];

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data.results));
  }, [url]);

  useEffect(() => {
    setId(data.id);
  }, [data.id]);

  const handleNavLinkClick = (contentType) => {
    setUrl(contentTypes.find((type) => type.name === contentType).url);
  };

  console.log(data);

  return (
    <div>
      <div className="trendingOnPerson">
        <div className="SwitchPerson">
          {contentTypes.map((contentType) => (
            <NavLink
              key={contentType.name}
              id={contentType.name}
              onClick={() => handleNavLinkClick(contentType.name)}
            >
              <h3>{contentType.name}</h3>
            </NavLink>
          ))}
        </div>
        <div className="carouselPerson">
          <div className="trendingPerson">
            {data.map((person) => (
              <div className="card">
                <div className="card-popular">
                  <div className="profile-popular">
                    <NavLink to={`/ProfileCard/${id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                        alt={person.name}
                      />
                    </NavLink>
                  </div>
                </div>
                <div className="profile-meta">
                  <p>{person.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeActors;

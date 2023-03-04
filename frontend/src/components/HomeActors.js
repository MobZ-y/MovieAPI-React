import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import CardPerson from "./CardPerson";

const HomeActors = () => {
  const [data, setData] = useState([]);

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
              <CardPerson key={person.id} person={person} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeActors;

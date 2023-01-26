import React, { useEffect, useState } from "react";
import axios from "axios";
import CardPerson from "./CardPerson";

const Actors = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/person/week?api_key=dc4fa11dbb0888468121f0e93ac98077"
      )
      .then((res) => setData(res.data.results));
  }, []);

  return (
    <div>
      <div className="trendingOnPerson">
        <div className="SwitchDisco">
          <h3>
            <a href="" id="Week">
              Semaine
            </a>
          </h3>
          <h3>
            <a href="" id="Day">
              Jour
            </a>
          </h3>
        </div>
        <div className="carouselPerson">
          <div className="trendingPerson">
            {data.map((Person, index) => (
              <CardPerson key={index} Person={Person} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actors;

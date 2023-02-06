import React, { useEffect, useState } from "react";

const SearchCard = ({ Search, Credits }) => {
  const [sortedArray, setSortedArray] = useState([]);

  React.useEffect(() => {
    const sorted = [...Credits].sort((a, b) => b.popularity - a.popularity);
    setSortedArray(sorted.slice(0, 8));
  }, [Credits]);

  let birthday = Search.birthday;
  let age = ~~((Date.now() - new Date(birthday)) / 31557600000);
  return (
    <div>
      <div className="search-wrap">
        <div className="search">
          <div className="Profile">
            <img
              src={`https://image.tmdb.org/t/p/w500${Search.profile_path}`}
              alt="drapeau"
              id="pp"
            />
            <h4>Date de Naissance : </h4>
            <br />
            <p>
              {Search.birthday} ({age}ans)
            </p>
            <br />
            <h4>Lieu de Naissance :</h4>
            <br />
            <p>{Search.place_of_birth}</p>
          </div>
          <div className="Details">
            <h3>{Search.name}</h3>
            <p>Biographie :</p>
            <br />
            <p>{Search.biography}</p>
            <ul className="Credits">
              {sortedArray.map((item, index) => (
                <li key={index}>
                  {" "}
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt="drapeau"
                    id="pp"
                  />
                  <h3>{item.title}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;

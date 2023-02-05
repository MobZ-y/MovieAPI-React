import React from "react";

const SearchCard = ({ Search }) => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;

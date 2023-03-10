import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";

const Films = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/movie/popular?api_key=dc4fa11dbb0888468121f0e93ac98077&language=en-US&page="
  );
  const contentTypes = [
    {
      name: "Populaires",
      url: "https://api.themoviedb.org/3/movie/popular?api_key=dc4fa11dbb0888468121f0e93ac98077&language=en-US&page=",
    },
    {
      name: "Les mieux notés",
      url: "https://api.themoviedb.org/3/movie/top_rated?api_key=dc4fa11dbb0888468121f0e93ac98077&language=en-US&page=",
    },
    {
      name: "Prochainement",
      url: "https://api.themoviedb.org/3/movie/upcoming?api_key=dc4fa11dbb0888468121f0e93ac98077&language=en-US&page=",
    },
  ];

  useEffect(() => {
    axios.get(`${url}${page}`).then((res) => setData(res.data.results));
  }, [url, page]);

  const handleNavLinkClick = (contentType) => {
    setUrl(contentTypes.find((type) => type.name === contentType).url);
    setPage(1);
  };
  const setPageUpdateAdd = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const setPageUpdateMinus = () => {
    if (page < 1) {
    } else {
      setPage((nextPage) => nextPage - 1);
    }
  };

  console.log(data);
  return (
    <div>
      <Navigation />

      <main>
        <div className="content-popular">
          <div className="form">
            <div className="form-button">
              {contentTypes.map((contentType) => (
                <NavLink
                  key={contentType.name}
                  id={contentType.name}
                  onClick={() => handleNavLinkClick(contentType.name)}
                >
                  <p>{contentType.name}</p>
                </NavLink>
              ))}
            </div>
            <div className="switch">
              <p id="previous" onClick={setPageUpdateMinus}>
                ➜
              </p>
              <span id="counter">{page}</span>
              <p onClick={setPageUpdateAdd}>➜</p>
            </div>
          </div>
          <div className="famous-films">
            {data.map((popular) => (
              <div className="card-pre">
                <div className="card-films">
                  <div className="profile-films">
                    <NavLink to={`/Movie/${popular.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${popular.poster_path}`}
                        alt={popular.name}
                      />
                    </NavLink>
                  </div>

                  <div className="profile-films-meta">
                    <p className="name">{popular.original_title}</p>
                    <p className="sub"></p>
                    <div
                      id="canvas"
                      className={
                        popular.vote_average === 0
                          ? "grey"
                          : popular.vote_average > 6
                          ? "green"
                          : popular.vote_average >= 2 &&
                            popular.vote_average < 3
                          ? "red"
                          : "orange"
                      }
                    >
                      {popular.vote_average === 0
                        ? ""
                        : Math.floor(popular.vote_average * 10).toFixed(0)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Films;

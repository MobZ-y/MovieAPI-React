import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artist from "./pages/Artist";
import Home from "./pages/Home";
import Films from "./pages/Films";
import "./styles/index.scss";
import SearchPerson from "./pages/SearchPerson";
import Favorite from "./pages/Favorite";
import SearchPage from "./pages/SearchPage";
import SearchPersonPhoto from "./pages/SearchPersonPhoto";
import SearchMovie from "./pages/SearchMovie";
import SearchTV from "./pages/SearchTV";
import Cast from "./pages/Cast";
import CastTV from "./pages/CastTV";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Artist" element={<Artist />}></Route>
          <Route path="/Films" element={<Films />}></Route>
          <Route path="/ProfileCard/:id" element={<SearchPerson />}></Route>
          <Route path="/Favorite" element={<Favorite />}></Route>
          <Route path="/search/:People" element={<SearchPage />}></Route>
          <Route
            path="/PhotoPerson/:id"
            element={<SearchPersonPhoto />}
          ></Route>
          <Route path="/Movie/:idMovie" element={<SearchMovie />}></Route>
          <Route path="/Tv/:idTv" element={<SearchTV />}></Route>
          <Route path="/cast/:id" element={<Cast />}></Route>
          <Route path="/castTv/:id" element={<CastTV />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artist from "./pages/Artist";
import Home from "./pages/Home";
import Films from "./pages/Films";
import "./styles/index.scss";
import ProfileCard from "./pages/ProfileCard";
import LikePage from "./pages/LikePage";
import SearchPage from "./pages/SearchPage";
import PhotoPerson from "./pages/PhotoPerson";
import MovieCard from "./pages/MovieCard";
import TVCard from "./pages/TVCard";
import Cast from "./pages/Cast";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Artist" element={<Artist />}></Route>
          <Route path="/Films" element={<Films />}></Route>
          <Route path="/ProfileCard/:id" element={<ProfileCard />}></Route>
          <Route path="/LikePage" element={<LikePage />}></Route>
          <Route path="/search/:People" element={<SearchPage />}></Route>
          <Route path="/PhotoPerson/:id" element={<PhotoPerson />}></Route>
          <Route path="/Movie/:idMovie" element={<MovieCard />}></Route>
          <Route path="/Tv/:idTv" element={<TVCard />}></Route>
          <Route path="/cast/:id" element={<Cast />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artist from "./pages/Artist";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import Films from "./pages/Films";
import "./styles/index.scss";
import ProfileCard from "./pages/ProfileCard";
import LikePage from "./pages/LikePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Artist" element={<Artist />}></Route>
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route path="/Films" element={<Films />}></Route>
          <Route path="/ProfileCard/:id" element={<ProfileCard />}></Route>
          <Route path="/LikePage" element={<LikePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

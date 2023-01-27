import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Artist from "./pages/Artist";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import "./styles/index.scss";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Artist" element={<Artist />}></Route>
          <Route path="/SearchPage" element={<SearchPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

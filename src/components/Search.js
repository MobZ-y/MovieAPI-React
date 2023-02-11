import React, { useState } from "react";
import videoBg from "../assets/img/g.mp4";

const SearchTest = () => {
  const [People, setPeople] = useState("");

  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted />
    </div>
  );
};

export default SearchTest;

import React from "react";
import GetStarted from "./GetStarted";
import LogoCarousel from "./LogoCarousel";
import Scheduling from "./Scheduling";
const Home = () => {
  return (
    <div>
        <LogoCarousel></LogoCarousel>
      <GetStarted></GetStarted>
      <Scheduling></Scheduling>
    </div>
  );
};

export default Home;

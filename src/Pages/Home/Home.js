import React from "react";
import GetStarted from "./GetStarted";
import LogoCarousel from "./LogoCarousel";
import Scheduling from "./Scheduling";
import Solutions from "./Solutions";
const Home = () => {
  return (
    <div>
        <LogoCarousel></LogoCarousel>
      <GetStarted></GetStarted>
      <Scheduling></Scheduling>
      <Solutions></Solutions>
    </div>
  );
};

export default Home;

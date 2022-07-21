import React from "react";
import Banner from "./Banner";
import GetStarted from "./GetStarted";
import LogoCarousel from "./LogoCarousel";
import Scheduling from "./Scheduling";
import Solutions from "./Solutions";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LogoCarousel></LogoCarousel>
      <GetStarted></GetStarted>
      <Scheduling></Scheduling>
      <Solutions></Solutions>
      <DoMore></DoMore>
    </div>
  );
};

export default Home;

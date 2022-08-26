import React from "react";
import Banner from "./Banner";
import GetStarted from "./GetStarted";
import LogoCarousel from "./LogoCarousel";
import Scheduling from "./Scheduling";
import Solutions from "./Solutions";
import DoMore from "./DoMore";
import CustomerReview from "./CustomerReview";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <LogoCarousel></LogoCarousel>
      <GetStarted></GetStarted>
      <Scheduling></Scheduling>
      <Solutions></Solutions>
      <DoMore></DoMore>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;

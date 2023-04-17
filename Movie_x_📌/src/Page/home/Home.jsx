import React from "react";
import HeroBanner from "../heroBaner/HeroBanner";
import Popular from "./popular/Popular";
import "./style.scss";
import TopRated from "./topRated/TopRated";
import Trending from "./trending/Trending";

const Home = () => {
  return (
    <div className="home">
      <HeroBanner />
      <Trending />
      <Popular/>
      <TopRated/>
    </div>
  );
};

export default Home;

/* eslint-disable no-unused-vars */
import React from "react";
import "./home.scss";

import Banner from "./banner/Banner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

const Home = () => {
  return (
    <div className="homePage">
      <Banner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;

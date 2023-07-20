/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import ContentWrap from "../../../components/contentWrap/ContentWrap";
import Tabs from "../../../components/switchTabs/Tabs";
import UseFetch from "../../../hooks/UseFetch";
import Carousel from "../../../components/carousel/Carousel";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");

  const { data, loading } = UseFetch(`/trending/all/${endpoint}`);
  const tabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };

  return (
    <div className="carouselSection">
      <ContentWrap>
        <span className="carouselTitle">Trending</span>
        {/* 2 Props (data and onTabChange) in Tabs component */}
        <Tabs data={["Day", "Week"]} onTabChange={tabChange} />
      </ContentWrap>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;

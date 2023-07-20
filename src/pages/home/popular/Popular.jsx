/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import ContentWrap from "../../../components/contentWrap/ContentWrap";
import Tabs from "../../../components/switchTabs/Tabs";
import UseFetch from "../../../hooks/UseFetch";
import Carousel from "../../../components/carousel/Carousel";

const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = UseFetch(`/${endpoint}/popular`);
  const tabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carouselSection">
      <ContentWrap>
        <span className="carouselTitle">What's Popular</span>
        {/* 2 Props (data and onTabChange) in Tabs component */}
        <Tabs data={["Movies", "TV Shows"]} onTabChange={tabChange} />
      </ContentWrap>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default Popular;

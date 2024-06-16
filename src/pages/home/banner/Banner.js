/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./banner.scss";
import { useSelector } from "react-redux";
import UseFetch from "../../../hooks/UseFetch";

import Img from "../../../components/lazyLoadImg/Img";
import ContentWrap from "../../../components/contentWrap/ContentWrap";

const Banner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { data, loading } = UseFetch("/movie/upcoming");

  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const inputHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const handleSearchClick = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="banner">
      {!loading && (
        <div className="backdrop_img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrap>
        <div className="bannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of Movies, TV Shows and People to discover. Explore Now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a Movie or TV show..."
              onKeyUp={inputHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" onClick={handleSearchClick}>
              Search
            </button>
          </div>
        </div>
      </ContentWrap>
    </div>
  );
};

export default Banner;

/* eslint-disable no-unused-vars */
import React from "react";
import "./details.scss";
import UseFetch from "../../hooks/UseFetch";
import { useParams } from "react-router-dom";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import OfficialVideos from "./officialVideos/OfficialVideo";
import Similar from "./SimilarsSection/Similar";
import Recommendation from "./SimilarsSection/Recommendations";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = UseFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = UseFetch(
    `/${mediaType}/${id}/credits`
  );
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <OfficialVideos data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;

/* eslint-disable no-unused-vars */
import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import UseFetch from "../../../hooks/UseFetch";

const Recommendation = ({ mediaType, id }) => {
  const { data, loading, error } = UseFetch(
    `/${mediaType}/${id}/recommendations`
  );

  return (
    <Carousel
      title="Recommendations"
      data={data?.results}
      loading={loading}
      endpoint={mediaType}
    />
  );
};

export default Recommendation;

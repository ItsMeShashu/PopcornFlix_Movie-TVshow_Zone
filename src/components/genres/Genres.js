/* eslint-disable no-unused-vars */
import React from "react";
import "./genres.scss";

import { UseSelector, useSelector } from "react-redux";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);

  return (
    <div className="genres">
      {data?.map((g) => {
        // if(!genres[g]?.name) return;
        return (
          <div className="genre" key={g}>
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;

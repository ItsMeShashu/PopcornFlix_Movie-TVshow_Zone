/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";

import "./Cast.scss";

import Img from "../../../components/lazyLoadImg/Img";
import avatar from "../../../Assets/Images/avatar.png";
import ContentWrap from "../../../components/contentWrap/ContentWrap";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="castSection">
      <ContentWrap>
        <div className="sectionHeading">Top Cast</div>
        {!loading ? (
          <div className="listItems">
            {data?.map((item) => {
              let imgUrl = item.profile_path
                ? url?.profile + item?.profile_path
                : avatar;
              return (
                <div className="listItem" key={item?.id}>
                  <div className="profileImg">
                    <Img src={imgUrl} />
                  </div>
                  <div className="name">{item?.name}</div>
                  <div className="character">{item.character}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </ContentWrap>
    </div>
  );
};

export default Cast;

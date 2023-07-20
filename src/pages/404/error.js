import React from "react";

import "./404.scss";

import ContentWrap from "../../components/contentWrap/ContentWrap";

const Error = () => {
  return (
    <div className="pageNotFound">
      <ContentWrap>
        <span className="bigText">404</span>
        <span className="smallText">Page not found!</span>
      </ContentWrap>
    </div>
  );
};

export default Error;

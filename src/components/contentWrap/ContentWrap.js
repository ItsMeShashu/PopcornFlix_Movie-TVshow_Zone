// Centering all the content of the site......

import React from "react";

import "./ContentWrap.scss";

const ContentWrap = ({ children }) => {
  return <div className="contentWrapper">{children}</div>;
};

export default ContentWrap;

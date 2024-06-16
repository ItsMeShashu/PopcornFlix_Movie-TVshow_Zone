import React from "react";
import "./footer.scss";

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import ContentWrapper from "../contentWrap/ContentWrap";

const navigateTo = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          PopcornFlix is your ultimate destination for discovering the latest,
          most popular, and top-rated movies and TV shows. Powered by the TMDb
          API, we bring you an extensive collection of trending content to
          explore. Stay updated with the newest releases and all-time favorites,
          and enjoy your next binge-watch session with PopcornFlix. Happy
          watching!
        </div>

        <div className="socialIcons">
          <span
            className="icon"
            onClick={() => navigateTo("https://github.com/ItsMeShashu")}
          >
            <FaGithub />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span
            className="icon"
            onClick={() =>
              navigateTo("https://www.linkedin.com/in/shashwat-garg-9731a4281/")
            }
          >
            <FaLinkedin />
          </span>
        </div>
        <div className="infoText3">
          © 2023 <strong>Shashwat Garg</strong>. All rights reserved.
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;

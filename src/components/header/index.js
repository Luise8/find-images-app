// Header component, includes top bar, main title and SearhForm component

import React from "react";
import SearchForm from "components/search-form";
import { FaGithub } from "react-icons/fa";
import myLogo from "assets/brand/favicon-my-website-16x16.png";
import { FaLinkedin } from "react-icons/fa";
import "components/header/styles.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__top-bar">
        <div className="header__source-of-images">
          <p>
            <a
              href="https://www.pexels.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Photos provided by
            </a>
          </p>
          <div className="header__conatiner-logo">
            <a
              href="https://www.pexels.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://images.pexels.com/lib/api/pexels-white.png"
                alt="Logo of Pexels."
              />
            </a>
          </div>
        </div>
        <address className="header__author">
          <p>
            Created by{" "}
            <a
              rel="noopener noreferrer"
              href="https://luisegamez.netlify.app/"
              target="_blank"
            >
              Luis E. Gamez
            </a>
          </p>
          <div className="header__container-social-networks">
            {/*           //Github
             */}
            <a
              href="https://github.com/Luise8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub></FaGithub>
            </a>
            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/in/luis-e-gamez-prado/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin></FaLinkedin>
            </a>
            {/*           //My Website
             */}{" "}
            <a
              href="https://luisegamez.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={myLogo} alt="Url to my website" />
              <div className="header__wrapper-mylogo"></div>
            </a>
          </div>
        </address>
      </div>
      <h1 className="header__title">Beautiful photos</h1>
      <SearchForm></SearchForm>
    </header>
  );
}

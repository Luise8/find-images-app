import React from "react";
import SearchForm from "components/search-form";
import { FaGithub } from "react-icons/fa";
import myLogo from "assets/brand/favicon-my-website-16x16.png";
import { FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">
      <div className="header__top-bar">
        <div className="header__source-of-images">
          <p>
            <a href="https://www.pexels.com">Photos provided by</a>
          </p>
          <div className="header__conatiner-logo">
            <a href="https://www.pexels.com">
              <img
                src="https://images.pexels.com/lib/api/pexels.png"
                alt="Logo of Pexels."
              />
            </a>
          </div>
        </div>
        <address className="header__author">
          <p>
            Created by{" "}
            <a
              rel="author"
              href="https://luise8.github.io/Freecodecamp-curses-projects/Responsive-Web-Design/Project5-Personal-Portfolio-Webpage/"
              target="_blank"
            >
              Luis E. Gamez
            </a>
          </p>
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
            href="https://luise8.github.io/Freecodecamp-curses-projects/Responsive-Web-Design/Project5-Personal-Portfolio-Webpage/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={myLogo} alt="Url to my website" />
          </a>
        </address>
      </div>
      <h1 className="header__title">Beautiful photos</h1>
      <SearchForm></SearchForm>
    </header>
  );
}

//Github URL
//https://github.com/Luise8

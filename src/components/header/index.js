import React from "react";
import SearchForm from "components/search-form";

export default function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__logo">
          <img
            src=""
            alt="Logo of Pexels. The images were taken of this page"
          />
        </div>
        <address className="header__author">
          <p>
            Created by{" "}
            <a rel="author" href="">
              Luis E. Gamez
            </a>
          </p>
          {/* website, github profile */}
        </address>
      </div>
      <h1 className="header__title"></h1>
      <SearchForm></SearchForm>
    </header>
  );
}

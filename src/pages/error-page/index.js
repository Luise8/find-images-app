// ErroPage

import React from "react";
import Button from "components/button";
import { Link } from "react-router-dom";
import "pages/error-page/styles.scss";
import errorPageImg from "assets/img/error-page.jpg";

export default function ErrorPage() {
  return (
    <div className="error">
      <div className="error__container-title">
        <h2 className="error__title">404 Error</h2>
      </div>
      <div className="error__container-img">
        <img src={errorPageImg} alt="Woman seeing the horizont" />
      </div>
      <Link to="/">
        <Button>Go back home</Button>
      </Link>
    </div>
  );
}

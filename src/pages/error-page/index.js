// ErroPage

import React from "react";
import Button from "components/button";
import { Link } from "react-router-dom";
import "pages/error-page/styles.scss";

export default function ErrorPage() {
  return (
    <div className="error">
      <div className="error__container-title">
        <h2 className="error__title">404 Error</h2>
      </div>

      <Link to="/">
        <Button>Go back home</Button>
      </Link>
    </div>
  );
}

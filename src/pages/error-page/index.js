import React from "react";
import Button from "components/button";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <p>404 Error</p>
      <Link to="/">
        <Button>Go back home</Button>
      </Link>
    </div>
  );
}

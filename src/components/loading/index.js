// loading component to display while page loads

import React from "react";
import "components/loading/styles.scss";

export default function Loading() {
  return (
    <div className="container-lds-default">
      <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

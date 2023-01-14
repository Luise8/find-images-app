import React from "react";
import "components/button/styles.scss";

export default function Button({ children }) {
  return <button className="button">{children}</button>;
}

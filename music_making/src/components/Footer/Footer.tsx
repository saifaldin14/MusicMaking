import React, { FunctionComponent } from "react";
import "./style.css";

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <a href="https://saifaldin.ca">Saif Al-Din Ali</a>
      <br />
      {currentYear}
    </footer>
  );
};

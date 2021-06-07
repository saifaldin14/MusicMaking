import React, { FunctionComponent } from "react";
import "./style.css";

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <a href="https://saifaldin.ca" target="_blank" rel="noreferrer">
        Saif Al-Din Ali
      </a>
      <br />
      {currentYear}
    </footer>
  );
};

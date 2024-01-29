import React, { useState } from "react";
import light from "../assets/sun.png";
import dark from "../assets/moon.png";
import "./Layout.css";

function Layout({ children }) {
  const [theme, setTheme] = useState({ light: true, dark: false });

  const updateTheme = (event) => {
    if (event.target.className.includes("light")) {
      if (theme.light != true) {
        setTheme((prevTheme) => {
          return { light: true, dark: false };
        });
      }
    } else {
      if (theme.dark != true) {
        setTheme((prevTheme) => {
          return { light: false, dark: true };
        });
      }
    }
  };

  return (
    <div
      className="layout"
      style={{ backgroundColor: theme.light ? "white" : "#1e1e1e" }}
    >
      <div className="theme-container">
        <button className="theme-button light" onClick={updateTheme}>
          <img src={light} alt="light theme" className="theme-image light" />
        </button>
        <button className="theme-button dark" onClick={updateTheme}>
          <img src={dark} alt="dark theme" className="theme-image dark" />
        </button>
      </div>
      {children}
    </div>
  );
}

export default Layout;

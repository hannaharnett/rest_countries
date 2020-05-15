import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "./theme-context";
import "./navbar.css";

export default function Navbar() {
  const { dark, toggleTheme } = useContext(ThemeContext);
  const themeBtn = (
    <button className="theme-btn" onClick={() => toggleTheme()}>
      {dark ? (
        <span>
          <i className="fas fa-moon"></i>
          Dark Mode
        </span>
      ) : (
        <span>
          <i className="far fa-moon"></i>
          Light Mode
        </span>
      )}
    </button>
  );

  return (
    <div className="navbar">
      <Link to="/" className="link">
        <h2>Where in the World?</h2>
      </Link>

      <button className="theme-btn" onClick={() => toggleTheme()}>
        {themeBtn}
      </button>
    </div>
  );
}

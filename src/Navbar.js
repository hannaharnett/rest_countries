import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "./theme-context";
import "./navbar.css";

export default function Navbar() {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="navbar">
      <Link to="/" className="link">
        <h2>Where in the World?</h2>
      </Link>

      <button className="theme-btn" onClick={() => toggleTheme()}>
        {dark ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}

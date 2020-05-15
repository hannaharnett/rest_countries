import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "./theme-context";
import styles from "./navbar.module.css";

export default function Navbar() {
  const { dark, toggleTheme } = useContext(ThemeContext);
  const themeBtn = (
    <button className={styles.themeBtn} onClick={() => toggleTheme()}>
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
    <div className={styles.navbar}>
      <Link to="/" className="link">
        <h2>Where in the World?</h2>
      </Link>

      {themeBtn}
    </div>
  );
}

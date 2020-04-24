import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "50px",
      }}
    >
      <Link to="/">
        <h3>Where in the World?</h3>
      </Link>

      <button>Switch Mode</button>
    </div>
  );
}

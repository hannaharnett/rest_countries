import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./theme-context";

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </HashRouter>,
  document.getElementById("root")
);

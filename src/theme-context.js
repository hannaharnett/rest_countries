import React, { useState, useLayoutEffect } from "react";

const ThemeContext = React.createContext({
  dark: false,
  toggleTheme: () => {},
});

export default ThemeContext;

export function ThemeProvider(props) {
  // keeps track of current theme
  const [dark, setDark] = useState(false);

  // paints the app before render
  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem("darkTheme");

    if (lastTheme === "true") {
      setDark(true);
      applyTheme(darkTheme);
    } else {
      setDark(false);
      applyTheme(lightTheme);
    }
    // only re-render if state changes
  }, [dark]);

  // rewrites set of css variablels/colors

  const applyTheme = function applyThemeFunc(theme) {
    const root = document.getElementsByTagName("html")[0];
    root.style.cssText = theme.join(";");
  };

  const toggleTheme = function toggleThemeFunc() {
    const body = document.getElementsByTagName("body")[0];
    body.style.cssText = "transition: background .5s ease";

    setDark(!dark);
    window.localStorage.setItem("darkTheme", !dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

// styles
const lightTheme = [
  "--border: rgba(0,0,0,.2)",
  "--elements: hsl(0, 0%, 100%)",
  "--text: hsl(200, 15%, 8%)",
  "--textInput: hsl(0, 0%, 52%)",
  "--background: hsl(0, 0%, 98%)",
];

const darkTheme = [
  "--border: rgba(0,0,0,.2)",
  "--elements: hsl(209, 23%, 22%)",
  "--text: hsl(0, 0%, 100%)",
  "--textInput: hsl(0, 0%, 52%)",
  "--background: hsl(207, 26%, 17%)",
];

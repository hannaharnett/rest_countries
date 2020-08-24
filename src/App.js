import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import CountriesList from "./CountriesList";
import CountryDetails from "./CountryDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route
          path="/:id"
          render={(props) => (
            <CountryDetails {...props} />
          )}
        />
        <Route
          path="/"
          render={(props) => (
            <CountriesList {...props} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;

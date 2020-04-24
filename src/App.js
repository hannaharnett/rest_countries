import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./Navbar";
import CountriesList from "./CountriesList";
import CountryDetails from "./CountryDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      search: "",
    };
    this.getData = this.getData.bind(this);
    this.displaySearch = this.displaySearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.getAllCountries();
  }
  handleChange(field, value) {
    this.setState({ [field]: value });
  }
  getData(url) {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ countries: [...data] });
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }
  getAllCountries() {
    this.getData("https://restcountries.eu/rest/v2/all");
  }
  getOneCountry(name) {
    this.getData(`https://restcountries.eu/rest/v2/name/${name}`);
  }
  displaySearch(name, query) {
    if (!name || query === "") {
      return this.getAllCountries();
    }
    if (!query) {
      return this.getOneCountry(name);
    }
    this.getData(`https://restcountries.eu/rest/v2/${query}/${name}`);
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            path="/:id"
            render={(props) => (
              <CountryDetails {...props} countries={this.state.countries} />
            )}
          />
          <Route
            path="/"
            render={(props) => (
              <CountriesList
                {...props}
                handleChange={this.handleChange}
                search={this.state.search}
                countries={this.state.countries}
                displaySearch={this.displaySearch}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

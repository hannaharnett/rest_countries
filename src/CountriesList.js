import React, { Component } from "react";

import CountryCard from "./CountryCard";

import "./countries-list.css";

class CountriesList extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onInputKeyPress = this.onInputKeyPress.bind(this);
    this.onInputSelect = this.onInputSelect.bind(this);
  }
  onInputChange(event) {
    const { name, value } = event.target;
    this.props.handleChange(name, value);
  }
  onInputKeyPress(event) {
    if (event.key === "Enter") {
      this.props.displaySearch(this.props.search);
    }
  }
  onInputSelect(event) {
    this.props.displaySearch(event.target.value, event.target.name);
  }
  render() {
    const { countries } = this.props;
    const list = countries.map((country) => {
      const { name, capital, region, population, flag } = country;
      return (
        <CountryCard
          name={name}
          capital={capital}
          population={population}
          region={region}
          flag={flag}
          key={name}
        />
      );
    });
    return (
      <div className="container">
        <div className="query-nav">
          <span className="search-field">
            <i
              className="fas fa-search"
              onClick={() => this.props.displaySearch(this.props.search)}
            ></i>
            <input
              type="text"
              name="search"
              autoComplete="off"
              placeholder="Search for a country..."
              onChange={this.onInputChange}
              onKeyPress={this.onInputKeyPress}
            />
          </span>

          <div>
            <select name="region" onChange={this.onInputSelect}>
              <option value="" defaultValue>
                Filter By Region
              </option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
        <div className="country-grid">{list}</div>
      </div>
    );
  }
}

export default CountriesList;

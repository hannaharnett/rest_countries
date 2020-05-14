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
    this.props.handleChange("region", event.currentTarget.dataset.id);
    this.props.displaySearch(event.currentTarget.dataset.id, "region");
  }
  render() {
    const { countries, region } = this.props;
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

          <div class="dropdown">
            <button>{region ? region : "Filter by Region"}</button>
            <ul>
              <li data-id="Africa" onClick={this.onInputSelect}>
                Africa
              </li>
              <li data-id="Americas" onClick={this.onInputSelect}>
                Americas
              </li>
              <li data-id="Asia" onClick={this.onInputSelect}>
                Asia
              </li>
              <li data-id="Europe" onClick={this.onInputSelect}>
                Europe
              </li>
              <li data-id="Oceania" onClick={this.onInputSelect}>
                Oceania
              </li>
              <li data-id="" onClick={this.onInputSelect}>
                Remove filter
              </li>
            </ul>
          </div>
        </div>
        <div className="country-grid">{list}</div>
      </div>
    );
  }
}

export default CountriesList;

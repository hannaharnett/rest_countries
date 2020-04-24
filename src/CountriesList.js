import React, { Component } from "react";
import CountryCard from "./CountryCard";

class CountriesList extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onInputClick = this.onInputClick.bind(this);
    this.onInputSelect = this.onInputSelect.bind(this);
  }
  onInputChange(event) {
    const { name, value } = event.target;
    this.props.handleChange(name, value);
  }
  onInputClick(event) {
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
      <div>
        <div>
          <input
            type="text"
            name="search"
            placeholder="Search for a country..."
            onChange={this.onInputChange}
            onKeyPress={this.onInputClick}
          />
          <select
            name="region"
            // onChange={(event) =>
            //   this.props.displaySearch(event.target.value, "region")
            // }
            onChange={this.onInputSelect}
          >
            <option value="">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>{list}</div>
      </div>
    );
  }
}

export default CountriesList;

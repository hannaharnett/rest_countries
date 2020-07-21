import React, { Component } from "react";
import CountryCard from "./CountryCard";
import Dropdown from './Dropdown';
import styles from "./CountriesList.module.css";

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
    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania", "Reset Filter"]
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
      <div className={styles.container}>
        <div className={styles.queryNav}>
          <span className={styles.searchField}>
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
          <Dropdown 
            activatorText={(region && region !== "Reset Filter") ? region : "Filter by Region"} 
            items={regions} 
            onClick={this.onInputSelect} 
          />
        </div>
        <div className={styles.countryGrid}>{list}</div>
      </div>
    );
  }
}

export default CountriesList;

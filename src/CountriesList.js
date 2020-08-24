import React, { Component } from "react";
import { Link } from 'react-router-dom';
import CountryCard from "./CountryCard";
import Dropdown from './Dropdown';
import styles from "./CountriesList.module.css";

class CountriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      search: "",
      region: "Reset Filter",
    };
    this.getData = this.getData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  componentDidMount() {
    this.getData();
  }
  handleChange(event) {
    event.persist();
    const { value } = event.target;
    this.setState({ search: value });
  }
  async getData() {
    let response = await fetch("https://restcountries.eu/rest/v2/all")
    let json = await response.json();

    this.setState({ countries: json })
  }
  handleDropdown(event) {
    this.setState({ region: event.currentTarget.dataset.id });
  }
  render() {
    const { countries, region, search } = this.state;
    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania", "Reset Filter"];

    let countryList = countries.filter((country) => {
      return country.name.toLowerCase().includes(search.toLowerCase()) && (region === 'Reset Filter' || country.region === region)
    });

    return (
      <div className={styles.container}>
        <div className={styles.queryNav}>
          <span className={styles.searchField}>
            <i
              className="fas fa-search"
            ></i>
            <label htmlFor="search" className="visually-hidden">Search for a country</label>
            <input
              aria-label="Search for a country"
              type="text"
              id="search"
              name="search"
              autoComplete="off"
              placeholder="Search for a country..."
              onChange={this.handleChange}
            />
          </span>
          <Dropdown
            activatorText={(region && region !== "Reset Filter") ? region : "Filter by Region"}
            items={regions}
            onClick={this.handleDropdown}
          />
        </div>
        <div className={styles.countryGrid}>
          {countryList.map(country => {
            return (
              <Link to={{
                pathname: `/${country.alpha3Code.toUpperCase()}`,
                state: {
                  countries: this.state.countries,
                  currentCountry: country
                }
              }}
                key={country.alpha3Code}
              >
                <CountryCard data={country} />
              </Link>
            )
          })}
        </div>
      </div>
    );
  }
}

export default CountriesList;

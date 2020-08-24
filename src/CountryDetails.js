import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from "./CountryDetails.module.css";

class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: this.props.location.state.countries,
      currentCountry: this.props.location.state.currentCountry
    }
    this.updateCurrentCountry = this.updateCurrentCountry.bind(this);
    this.goBack = this.goBack.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.updateCurrentCountry();
    }
  }
  updateCurrentCountry() {
    const id = this.props.match.params.id;
    const newCountry = this.state.countries.find(country =>
      country.alpha3Code.toUpperCase().includes(id.toUpperCase())
    );
    this.setState({ currentCountry: newCountry });
  }
  loopProperty(arr) {
    return arr.map((value) => value.name)
  }
  goBack() {
    this.props.history.goBack();
  }
  truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }
  render() {
    const countries = this.state.countries;
    const country = this.state.currentCountry;
    const {
      name,
      capital,
      region,
      population,
      flag,
      alpha3Code,
      nativeName,
      subregion,
      topLevelDomain,
      currencies,
      languages,
    } = country;

    // creates one string with all currencies used
    const currUsed = this.loopProperty(currencies).join(", ");

    // creates one string with all languages spoken
    const langSpoken = this.loopProperty(languages).join(", ");

    // create links to border countries
    const borderCountries = countries
      .filter((country) => country.borders.includes(alpha3Code))
      .map((country) => {
        return (
          <div key={country.name}>
            <Link to={`/${country.alpha3Code.toUpperCase()}`} tabIndex="-1">
              <button aria-label={`Go to bordering country ${country.name}`} className={`link ${styles.borderBtn} ${styles.btn}`}>
                {this.truncateString(country.name, 9)}
              </button>
            </Link>
          </div>
        );
      });

    return (
      <div>
        <button
          className={`${styles.goBackBtn} ${styles.btn}`}
          onClick={this.goBack}
        >
          <i className="fas fa-arrow-left"></i>Back
        </button>

        <div key={name} className={styles.detailsContainer}>
          <div className={styles.flagContainer}>
            <img src={flag} alt="Country flag" />
          </div>
          <div className={styles.textContainer}>
            <h1>{name}</h1>
            <div className={styles.countryInfo}>
              <p>
                Native Name:
                  <span>{nativeName}</span>
              </p>
              <p>
                Population:
                  <span>{population.toLocaleString()}</span>
              </p>
              <p>
                Region:
                  <span>{region}</span>
              </p>
              <p>
                Sub Region:
                  <span>{subregion}</span>
              </p>
              <p>
                Capital:
                  <span>{capital}</span>
              </p>
              <p>
                Top Level Domain:
                  <span>{topLevelDomain}</span>
              </p>
              <p>
                Currencies:
                  <span>{currUsed}</span>
              </p>
              <p>
                Languages:
                  <span>{langSpoken}</span>
              </p>
            </div>

            <div className={styles.bordersContainer}>
              <p>
                {borderCountries.length
                  ? borderCountries.length === 1
                    ? "Border Country:"
                    : "Border Countries:"
                  : "No Bordering Countries"
                }
              </p>

              <div className={styles.borders}>{borderCountries}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryDetails;

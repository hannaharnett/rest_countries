import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from "./CountryDetails.module.css";

class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  loopProperty(arr, query) {
    let result = [];
    arr.map((obj) => {
      for (const prop in obj) {
        if (prop === query) {
          result.push(obj[prop]);
        }
      }
      return result;
    });
    return result;
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
    const countryDetails = this.props.countries
      .filter(
        (country) => country.name.toLowerCase() === this.props.match.params.id
      )
      .map((val) => {
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
        } = val;

        // creates one string with all currencies used
        const currUsed = this.loopProperty(currencies, "name").join(", ");

        // creates one string with all languages spoken
        const langSpoken = this.loopProperty(languages, "name").join(", ");

        // create links to border countries
        const borderCountries = this.props.countries
          .filter((country) => country.borders.includes(alpha3Code))
          .map((value, index) => {
            return (
              <div key={index}>
                <Link to={`/${value.name.toLowerCase()}`} tabIndex="-1">
                  <button aria-label={`Go to bordering country ${value.name}`} className={`link ${styles.borderBtn} ${styles.btn}`}>
                    {this.truncateString(value.name, 9)}
                  </button>
                </Link>
              </div>
            );
          });

        return (
          <div key={name} className={styles.detailsContainer}>
            <div className={styles.flagContainer}>
              <img src={flag} alt={name} />
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
                  {borderCountries.length < 1
                    ? "No Bordering Countries"
                    : "Border Countries:"}
                </p>

                <div className={styles.borders}>{borderCountries}</div>
              </div>
            </div>
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

        <div>{countryDetails}</div>
      </div>
    );
  }
}

export default CountryDetails;

import React, { Component } from "react";
import { Link } from "react-router-dom";

class CountryDetails extends Component {
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
                <Link
                  to={`/${value.name.toLowerCase()}`}
                  className="link border-btn"
                >
                  {value.name}
                </Link>
              </div>
            );
          });

        return (
          <div key={name}>
            <div>
              <img src={flag} alt={name} />
            </div>
            <div>
              <h1>{name}</h1>
              <div>
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

              <div>
                <p>Border Countries:</p>
                <div className="borders">{borderCountries}</div>
              </div>
            </div>
          </div>
        );
      });
    return (
      <div>
        <div>{countryDetails}</div>
      </div>
    );
  }
}

export default CountryDetails;

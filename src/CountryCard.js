import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./country-card.css";

class CountryCard extends Component {
  render() {
    const { name, population, region, capital, flag } = this.props;
    return (
      <div className="country-card">
        <Link to={`/${name.toLowerCase()}`} className="link">
          <div
            className="flag"
            style={{ backgroundImage: `url(${flag})` }}
          ></div>
          <div className="card-info">
            <h3>{name}</h3>
            <p>
              Population: <span>{population.toLocaleString()}</span>
            </p>
            <p>
              Region: <span>{region}</span>
            </p>
            <p>
              Capital: <span>{capital}</span>
            </p>
          </div>
        </Link>
      </div>
    );
  }
}

export default CountryCard;

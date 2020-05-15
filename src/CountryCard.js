import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./CountryCard.module.css";

class CountryCard extends Component {
  render() {
    const { name, population, region, capital, flag } = this.props;
    return (
      <div className={styles.countryCard}>
        <Link to={`/${name.toLowerCase()}`} className="link">
          <div
            className={styles.flag}
            style={{ backgroundImage: `url(${flag})` }}
          ></div>
          <div className={styles.cardInfo}>
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

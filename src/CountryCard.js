import React, { Component } from "react";
import { Link } from "react-router-dom";

const image = {
  width: "100%",
};

const card = {
  border: "2px solid black",
  width: "20%",
  margin: "30px",
};

class CountryCard extends Component {
  render() {
    const { name, flag, population, region, capital } = this.props;
    return (
      <div style={card}>
        <Link to={`/${name.toLowerCase()}`}>
          <img style={image} src={flag} alt={name} />
          <h1>{name}</h1>
          <h3>Population: {population}</h3>
          <h3>Region: {region}</h3>
          <h3>Capital: {capital}</h3>
        </Link>
      </div>
    );
  }
}

export default CountryCard;

import React from 'react';

const CountryCard = ({ country }) => {
  return (
    <div className="card">
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <img src={country.flags.svg} alt={`${country.name.common} flag`} width="100" />
    </div>
  );
}

export default CountryCard;

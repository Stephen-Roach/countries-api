import React from 'react';

function CountriesCard({ flags, name, population, region, capital }) {
  return (
    <div className='countries-card'>
      <img className='countries-card__flags' src={flags.png} alt='' />
      <h3 className='countries-card__name'>{name.common}</h3>
      <p className='countries-card__population'>{population}</p>
      <p className='countries-card__region'>{region}</p>
      <p className='countries-card__capital'>{capital}</p>
    </div>
  );
}

export default CountriesCard;

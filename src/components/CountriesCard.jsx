import React from 'react';

function CountriesCard({ flags, name, population, region, capital }) {
  return (
    <div className='countries-card'>
      <img className='countries-card__flags' src={flags.png} alt='flag' />
      <div className='countries-card__info'>
        <h3 className='countries-card__info-name'>{name.common}</h3>
        <p className='countries-card__info-population'>
          Population: {population.toLocaleString('en-US')}
        </p>
        <p className='countries-card__info-region'>Region: {region}</p>
        <p className='countries-card__info-capital'>Capital: {capital}</p>
      </div>
    </div>
  );
}

export default CountriesCard;

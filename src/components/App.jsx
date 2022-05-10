import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import CountriesCard from './CountriesCard';
import '../styles/app.css';

const COUNTRIES_API = 'https://restcountries.com/v3.1/name/peru';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries(COUNTRIES_API);
  }, []);

  function fetchCountries(api) {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      });
  }

  return (
    <div className='App'>
      <Navbar />
      <div className='countries-container'>
        {countries.length > 0 &&
          countries.map((country) => (
            <CountriesCard {...country} key={country.id} />
          ))}
      </div>
    </div>
  );
}

export default App;

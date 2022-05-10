import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  return (
    <div className='search-bar border'>
      <SearchIcon />
      <input
        className='search-bar__input'
        type='text'
        placeholder='Search for a country...'
      />
    </div>
  );
}

export default SearchBar;

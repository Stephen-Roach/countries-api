import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function Home() {
  return (
    <div className='home'>
      <div className='home__search-input'>
        <SearchIcon />
        <input type='text' />
      </div>
    </div>
  );
}

export default Home;

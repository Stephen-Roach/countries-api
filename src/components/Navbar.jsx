import React from 'react';
import NightlightRoundTwoToneIcon from '@mui/icons-material/NightlightRoundTwoTone';
function Navbar() {
  return (
    <div className='navbar border'>
      <div className='navbar__left-side'>
        <h3>Where in the world?</h3>
      </div>
      <div className='navbar__right-side'>
        <NightlightRoundTwoToneIcon />
        <p>Dark Mode</p>
      </div>
    </div>
  );
}

export default Navbar;

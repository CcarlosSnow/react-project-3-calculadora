import React from 'react';
import '../css/Logo.css';
import freeCodeCampLogo from '../images/freecodecamp-logo.jpeg';

const Logo = () => (
  <div className='freecodecamp-logo-container'>
    <img src={freeCodeCampLogo} className='freecodecamp-logo' alt='logo' />
  </div>
);

export default Logo;

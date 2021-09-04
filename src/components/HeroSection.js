import React from 'react';
import hero_logo from '../Home_stuffs/AboutUs/about-us-logo.png'
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-logo-box'>
        <img src={hero_logo} />
      </div>
    </div>
  );
}

export default HeroSection;
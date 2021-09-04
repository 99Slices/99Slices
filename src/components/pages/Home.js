import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Navbar from '../Navbar'
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Cards />
      <HeroSection />
      <Footer />
    </>
  );
}

export default Home;
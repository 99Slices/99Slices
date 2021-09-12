import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Navbar from '../Navbar'
import HeroSection from '../HeroSection';
import Progress from '../Progress'
import Form from '../Form'
import Footer from '../Footer';


function Home() {
  return (
    <>
      <Navbar />
      <Cards />
      <HeroSection />
      <Progress />
      <Form />
      <Footer />
    </>
  );
}

export default Home;
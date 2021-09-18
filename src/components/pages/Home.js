import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Navbar from '../Navbar'
import HeroSection from '../HeroSection';
import Choose from '../Choose';
import Project from '../Project';
import Progress from '../Progress'
import Video from '../Video'
import Form from '../Form'
import Footer from '../Footer';


function Home() {
  return (
    <>
      <Navbar />
      <Cards />
      <HeroSection />
      <Choose />
      <Project />
      <Progress />
      <Video />
      <Form />
      <Footer />
    </>
  );
}

export default Home;
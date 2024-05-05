import React from 'react';
import '../../../App.css';
import Footer from '../../snippets/footer/Footer';
import HeroSection from '../../snippets/hero/HeroSection';
import Cards from '../../snippets/card/Cards2';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
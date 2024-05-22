import React from 'react';
import 'App.css';
import Footer from 'components/snippets/footer/Footer';
import HeroSection from 'components/snippets/hero/HeroSection';
import Cards from 'components/snippets/card/Cards2';
import BannerFooter from 'components/snippets/banner/BannerFooter';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <BannerFooter />
      <Footer />
    </>
  );
}

export default Home;
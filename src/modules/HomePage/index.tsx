import React from 'react';

import AboutSection from './components/AboutSection';
import Feature1 from './components/Feature1';
import Feature2 from './components/Feature2';
import Feature3 from './components/Feature3';
import Feature4 from './components/Feature4';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Links from './components/Links';

// import Image from 'next/image';

const HomePageModule = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center overflow-hidden">
      <HeroSection />
      <AboutSection />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Footer />
      <Links />
    </div>
  );
};

export default HomePageModule;

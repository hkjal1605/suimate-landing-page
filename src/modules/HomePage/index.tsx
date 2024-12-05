import React from 'react';

import AboutSection from './components/AboutSection';
import BenefitsSection from './components/BenefitsSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Links from './components/Links';
import Feature1 from './components/Feature1';
import Feature3 from './components/Feature3';
import Feature2 from './components/Feature2';

// import Image from 'next/image';

const HomePageModule = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center overflow-hidden">
      {/* <Image
        src="/assets/images/grids/grid-2.webp"
        alt="hero-circle"
        width={0}
        height={0}
        sizes="100vw"
        className="fixed top-0 bottom-0 left-0 h-full w-full z-20"
      /> */}
      <HeroSection />
      <AboutSection />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Footer />
      <Links />
    </div>
  );
};

export default HomePageModule;

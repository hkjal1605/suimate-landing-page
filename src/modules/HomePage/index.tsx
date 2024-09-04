import React from 'react';

import AboutSection from './components/AboutSection';
import BenefitsSection from './components/BenefitsSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';

const HomePageModule = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <BenefitsSection />
      <Footer />
      {/* <ExtraFooter /> */}
    </div>
  );
};

export default HomePageModule;

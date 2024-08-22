import React from 'react';

import AboutSection from './components/AboutSection';
import BenefitsSection from './components/BenefitsSection';
import ExtraFooter from './components/ExtraFooter';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';

const HomePageModule = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <BenefitsSection />
      <Footer />
      <ExtraFooter />
    </div>
  );
};

export default HomePageModule;

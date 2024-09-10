import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero-section w-full flex flex-col min-h-screen max-h-auto justify-start items-center pt-[150px] xl:pt-[12vh] 2xl:pt-[25vh] gap-4 z-10">
      <div className="bg-black-1000 bg-opacity-15 py-1.5 px-3 rounded-full -mb-3">
        <p className="text-sm text-black-1000">Meet insiDeX</p>
      </div>
      <p className="text-black-1000 text-[90px] tracking-[-2px] leading-[110px] text-center">
        Enhance your DeFi <br /> strategies on Sui
      </p>
      <p className="text-xl text-black-1000 text-opacity-80">
        insiDeX lets you analyze, copy, and gain insights into Sui DeFi
        activity.
      </p>
    </div>
  );
};

export default HeroSection;

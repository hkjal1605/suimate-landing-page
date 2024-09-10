import React from 'react';

import Image from 'next/image';

import PrimaryButton from '@/components/PrimaryButton';

const HeroSection = () => {
  return (
    <div className="hero-section w-full flex flex-col h-auto justify-start items-center pt-[150px] gap-4">
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
      <PrimaryButton text="Launch App" />
      <Image
        src="/assets/images/hero-mockup.webp"
        alt="hero-mockup"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
    </div>
  );
};

export default HeroSection;

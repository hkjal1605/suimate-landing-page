import React from 'react';

import Image from 'next/image';

import PrimaryButton from '@/components/PrimaryButton';

const HeroSection = () => {
  return (
    <div className="hero-section w-full flex flex-col min-h-screen justify-start items-center pt-[120px] xl:pt-[12vh] gap-4 z-10">
      <div className="bg-black-1000 bg-opacity-15 py-1.5 px-3 rounded-full -mb-3">
        <p className="text-xs text-black-1000 font-[Sf-Mono] uppercase">
          Meet insiDeX
        </p>
      </div>
      <p className="text-black-1000 text-5xl md:text-6xl lg:text-[90px] tracking-[-2px] lg:leading-[110px] text-center">
        Enhance your DeFi <br /> strategies on Sui
      </p>
      <p className="text-xl text-center text-black-1000 text-opacity-80 mb-4">
        insiDeX lets you analyze, copy, and gain insights into Sui DeFi
        activity.
      </p>
      <div className="mb-8 lg:-mb-[50px]">
        <PrimaryButton text="Launch App" />
      </div>
      <Image
        src="/assets/images/hero-mockup.webp"
        alt="hero-mockup"
        width={0}
        height={0}
        sizes="100vw"
        className="hidden lg:block z-[50] h-[600px]"
        style={{ width: '100%', objectFit: 'cover' }}
      />
      <Image
        src="/assets/images/hero-small.webp"
        alt="hero-mockup"
        width={0}
        height={0}
        sizes="100vw"
        className="block lg:hidden z-[50] h-[auto]"
        style={{ width: '95%', objectFit: 'contain' }}
      />
    </div>
  );
};

export default HeroSection;

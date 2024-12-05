import React from 'react';

import Image from 'next/image';

import PrimaryButton from '@/components/PrimaryButton';

const HeroSection = () => {
  return (
    <div className="bg-black-50 w-full flex flex-col min-h-screen justify-start items-center pt-[120px] gap-4 z-10 relative">
      <div className="bg-black-1000 bg-opacity-15 py-1.5 px-3 rounded-full -mb-3 z-10">
        <p className="text-xs text-black-1000 font-[Sf-Mono] uppercase">
          Meet insiDeX
        </p>
      </div>
      <p className="text-black-1000 text-5xl md:text-6xl 2xl:text-[90px] tracking-[-2px] md:leading-[75px] 2xl:leading-[110px] text-center z-10">
        One platform for all your <br /> DeFi and analytics needs on Sui
      </p>
      <p className="text-base text-center text-black-1000 text-opacity-80 mb-4 z-10">
        insiDeX lets you analyze, copy, and gain insights into Sui DeFi
        activity.
      </p>
      <div className="mb-8 z-[1000]">
        <PrimaryButton text="Start Trading Now" />
      </div>
      <p className="text-xs text-black-700 lg:-mt-[40px] z-10">
        Charts powered by{' '}
        <a
          href="https://www.tradingview.com/"
          target="_blank"
          className="underline text-blue-500"
        >
          TradingView
        </a>
      </p>
      <Image
        src="/assets/images/hero-small.webp"
        alt="hero-mockup"
        width={0}
        height={0}
        sizes="100vw"
        className="z-[50] h-[auto] w-[800px] object-cover mt-10 mb-16"
      />
      <Image
        src="/assets/images/hero-circle.png"
        alt="hero-circle"
        width={0}
        height={0}
        sizes="100vw"
        className="fixed top-0 h-[90%] w-auto object-cover"
      />
    </div>
  );
};

export default HeroSection;

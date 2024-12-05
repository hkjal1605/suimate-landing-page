import React from 'react';

import Image from 'next/image';

const Feature1 = () => {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center gap-2 py-8 pt-14 px-4 lg:px-0 overflow-hidden z-10">
      <p className="text-4xl text-blue-300 text-center">
        Find out what&apos;s new, what&apos;s trending, and what&apos;s next{' '}
        <br />
        Complete market analysis at your fingertips
      </p>
      <p className="text-base text-black-700 mb-5">
        Take a quick glance at the market sentiment, which coin&apos;s pumped,
        wha
      </p>
      <div className="w-full flex flex-col h-full items-center justify-start overflow-hidden rounded-3xl max-w-[1200px]">
        <div className="flex justify-center items-center w-full h-[80%] relative overflow-hidden">
          <Image
            src="/assets/images/art-1.webp"
            alt="Feature"
            width={0}
            height={0}
            sizes="100%"
            className="w-full h-full object-cover flex-1"
          />
          <Image
            src="/assets/images/hero-image.webp"
            alt="hero-mockup"
            width={0}
            height={0}
            sizes="100vw"
            className="z-[50] h-[auto] w-[800px] object-cover absolute bottom-[-15px]"
          />
        </div>
        <div className="w-full flex-1 flex justify-center items-center p-8 bg-blue-500">
          <p className="text-base text-blue-200 text-center">
            Discover the latest updates on the featured coins and trending coins
            <br />
            Find out about the top-gainers in the Sui ecosystem, with quick buy
            options for easy buying
            <br /> Get a quick glance at the security checks for the coins, so
            that you don&apos;t fall in a honeypot scam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature1;

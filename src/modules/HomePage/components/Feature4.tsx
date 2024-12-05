import React from 'react';

import Image from 'next/image';

const Feature4 = () => {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center gap-2 py-8 pt-12 px-4 lg:px-0 overflow-hidden z-10">
      <p className="text-xl lg:text-4xl text-orange-300 text-center">
        Find the most profitable traders on Sui <br />
        Check the PnL history, study their strategy
      </p>
      <p className="text-center text-base text-black-700 mb-5">
        insiDeX offers a robust copy-trading infrastructure for Spot and
        Perpetual markets
      </p>
      <div className="w-full flex flex-col h-full items-center justify-start overflow-hidden rounded-3xl max-w-[1200px]">
        <div className="flex justify-center items-center w-full h-[80%] relative overflow-hidden">
          <Image
            src="/assets/images/art-4.webp"
            alt="Feature"
            width={0}
            height={0}
            sizes="100%"
            className="w-full h-full object-cover flex-1"
          />
          <Image
            src="/assets/images/features/feature-4.webp"
            alt="hero-mockup"
            width={0}
            height={0}
            sizes="100vw"
            className="z-[50] h-[auto] w-[800px] object-cover absolute bottom-[-15px]"
          />
        </div>
        <div className="w-full flex-1 flex justify-center items-center p-8 bg-orange-300">
          <p className="text-base text-orange-200 text-center">
            Discover the most profitable traders in Spot and Perp markets
            <br />
            Study their strategies, their most profitable trades, compare to
            other traders
            <br />
            Use our Telegram bots to set real-time alerts for your favorite
            traders
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature4;

import React from 'react';

import Image from 'next/image';

const Feature2 = () => {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center gap-2 py-8 pt-14 px-4 lg:px-0 overflow-hidden z-10">
      <p className="text-xl lg:text-4xl text-brown-300 text-center">
        Analyze the price action, form your strategy
        <br />
        And place a buy/sell order, all at one place
      </p>
      <p className="text-base text-black-700 mb-5 text-center">
        With insiDeX, you can view the price charts and other essential
        information about any coin
        <br /> and buy or sell them instantly with the best conversion rates on
        Sui
      </p>
      <div className="w-full flex flex-col h-full items-center justify-start overflow-hidden rounded-3xl max-w-[1200px]">
        <div className="flex justify-center items-center w-full h-[80%] relative overflow-hidden">
          <Image
            src="/assets/images/art-2.webp"
            alt="Feature"
            width={0}
            height={0}
            sizes="100%"
            className="w-full h-full object-cover flex-1"
          />
          <Image
            src="/assets/images/features/feature-2.webp"
            alt="hero-mockup"
            width={0}
            height={0}
            sizes="100vw"
            className="z-[50] h-[auto] w-[800px] object-cover absolute bottom-[-15px]"
          />
        </div>
        <div className="w-full flex-1 flex justify-center items-center p-8 bg-brown-500">
          <p className="text-base text-brown-200 text-center">
            Price charts, trade volume, comparison to previous days data <br />
            Essential info like top holders, top buyers/sellers, most profitable
            traders and more <br />
            Trade with a true CEX-like trading experience with one-click trades
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature2;

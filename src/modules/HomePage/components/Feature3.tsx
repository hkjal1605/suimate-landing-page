import React from 'react';

import Image from 'next/image';

const Feature3 = () => {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center gap-2 py-8 pt-12 px-4 lg:px-0 overflow-hidden z-10">
      <p className="text-xl lg:text-4xl text-green-300 text-center">
        Meme Zone to find all the fun coins at one place <br />
        Integrated with all the coin launch platforms on Sui
      </p>
      <p className="text-base text-center text-black-700 mb-5">
        Get a look at the newest coins and their bonding status from different
        platforms
      </p>
      <div className="w-full flex flex-col h-full items-center justify-start overflow-hidden rounded-3xl max-w-[1200px]">
        <div className="flex justify-center items-center w-full h-[80%] relative overflow-hidden">
          <Image
            src="/assets/images/art-3.webp"
            alt="Feature"
            width={0}
            height={0}
            sizes="100%"
            className="w-full h-full object-cover flex-1"
          />
          <Image
            src="/assets/images/features/feature-3.webp"
            alt="hero-mockup"
            width={0}
            height={0}
            sizes="100vw"
            className="z-[50] h-[auto] w-[800px] object-cover absolute bottom-[-15px]"
          />
        </div>
        <div className="w-full flex-1 flex justify-center items-center p-8 bg-green-300">
          <p className="text-base text-green-100 text-center">
            The most real-time data for newly created coins on any coin launch
            platform <br />
            List of all the coins that are just about to bond, and their
            progress <br />
            Find the most recently bonded coins, never feel left out
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature3;

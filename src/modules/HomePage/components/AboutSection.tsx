import React from 'react';

import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className="flex w-full h-screen justify-center items-start py-16 px-4 lg:px-0 overflow-hidden z-10">
      <div className="w-full h-full max-w-[1200px] relative flex flex-col items-center justify-center rounded-3xl overflow-hidden z-50">
        <Image
          src="/assets/images/about.webp"
          alt="About"
          width={0}
          height={0}
          sizes="100%"
          className="w-full h-full absolute top-0 left-0 object-cover z-10"
        />
        <div className="absolute z-20 bg-gradient-about top-0 left-0 w-full h-full flex flex-col items-center justify-start py-10 px-4 lg:px-10 gap-2">
          <p className="text-black-900 text-3xl lg:text-5xl 2xl:text-6xl">
            What is Nexa
          </p>
          <p className="text-base lg:text-2xl text-black-800 text-center">
            Nexa is a platform that provides you with data-driven insights{' '}
            <br />
            into the world of decentralized trading on Sui <br />
            <br /> We empower a safe and informed trading journey for our users{' '}
            <br /> by presenting all the on-chain activities in the DeFi space
            in a user friendly way
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

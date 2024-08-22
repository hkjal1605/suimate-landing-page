import React from 'react';

import Image from 'next/image';

import PrimaryButton from '@/components/PrimaryButton';

const AboutSection = () => {
  return (
    <div className="w-full h-screen flex justify-between items-center pl-[5%] bg-black-1000">
      <div className="flex flex-col items-start justify-center gap-5">
        <div className="px-2 py-0.5 bg-black-200 bg-opacity-15 rounded-full">
          <p className="uppercase text-sm text-black-100">About</p>
        </div>
        <p className="whitespace-nowrap text-4xl text-black-100">
          What is SuiMate?
        </p>
        <p className="whitespace-nowrap text-black-300 text-opacity-80 text-xl">
          Built to enable users to analyze and get insights <br /> on DeFi
          activity happening across all the decentralized <br /> spot and
          perpetual exchanges on Sui.
        </p>
        <PrimaryButton text="Check the app now" theme="dark" />
      </div>
      <Image
        src="/assets/images/about-mockup.png"
        alt="About Mockup"
        width={0}
        height={0}
        sizes="50vw"
        className="self-end"
        style={{ width: '50%', height: 'auto', objectFit: 'cover' }}
      />
    </div>
  );
};

export default AboutSection;

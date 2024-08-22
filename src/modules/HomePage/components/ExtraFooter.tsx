import React from 'react';

import Image from 'next/image';

const ExtraFooter = () => {
  return (
    <div className="flex flex-col w-full justify-between items-center h-screen pt-[5%]">
      <div className="w-full flex flex-col justify-center items-center mt-16">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={200}
          height={200}
        />
        <p className="text-[120px] text-black-1000">SuiMate</p>
      </div>
      <div className="flex flex-col w-full justify-end items-center">
        <Image
          alt="logo-chain"
          src="/assets/images/logo-chain.png"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full opacity-20"
        />
        <Image
          alt="logo-chain"
          src="/assets/images/logo-chain.png"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full opacity-20"
        />
      </div>
    </div>
  );
};

export default ExtraFooter;

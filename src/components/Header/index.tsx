'use client';

import React from 'react';

import Image from 'next/image';

import PrimaryButton from '../PrimaryButton';

const Header = () => {
  return (
    <div className="fixed top-0 w-full left-0 flex px-[5%] justify-between items-center py-5 z-50 backdrop-blur-[5px]">
      <div className="flex justify-center items-center gap-1">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={28}
          height={28}
        />
        <p className="text-black-1000 text-2xl">SuiMate</p>
      </div>
      <div className="flex justify-center items-center">
        <a href="https://app.suimate.trade" target="_blank" rel="noreferrer">
          <div className="py-1.5 px-4 cursor-pointer">
            <p className="text-sm text-black-900">Perps</p>
          </div>
        </a>
        <a
          href="https://app.suimate.trade/spot"
          target="_blank"
          rel="noreferrer"
        >
          <div className="py-1.5 px-4 cursor-pointer">
            <p className="text-sm text-black-900">Spot</p>
          </div>
        </a>
        <a
          href="https://app.suimate.trade/spot"
          target="_blank"
          rel="noreferrer"
        >
          <div className="py-1.5 px-4 cursor-pointer">
            <p className="text-sm text-black-900">Liquidity Supply</p>
          </div>
        </a>
      </div>
      <PrimaryButton text="Launch App" />
    </div>
  );
};

export default Header;

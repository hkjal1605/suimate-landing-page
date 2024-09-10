'use client';

import React from 'react';

import Image from 'next/image';

import PrimaryButton from '../PrimaryButton';

const Header = () => {
  return (
    <div className="fixed top-0 w-full left-0 flex justify-between items-center py-5 z-50 backdrop-blur-[5px]">
      <div className="w-full flex px-4 xl:px-0 justify-between items-center max-w-[1250px]">
        <div className="flex justify-center items-center gap-1">
          <Image
            src="/assets/images/header-logo.svg"
            alt="insiDeX"
            width={120}
            height={0}
          />
        </div>
        <div className="hidden md:flex justify-center items-center">
          <a href="https://app.insidex.trade" target="_blank" rel="noreferrer">
            <div className="py-1.5 px-4 cursor-pointer">
              <p className="text-sm text-black-900">Perps</p>
            </div>
          </a>
          <a
            href="https://app.insidex.trade/spot"
            target="_blank"
            rel="noreferrer"
          >
            <div className="py-1.5 px-4 cursor-pointer">
              <p className="text-sm text-black-900">Spot</p>
            </div>
          </a>
          <a
            href="https://app.insidex.trade/spot"
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
    </div>
  );
};

export default Header;

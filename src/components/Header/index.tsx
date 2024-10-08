'use client';

import React from 'react';

import Image from 'next/image';

import PrimaryButton from '../PrimaryButton';

const Header = () => {
  return (
    <div className="w-screen backdrop-blur-[5px] z-50 fixed top-0 left-[50%] translate-x-[-50%] flex justify-center items-center">
      <div className="w-full flex justify-between items-center py-5 max-w-[1250px]">
        <div className="w-full flex px-4 xl:px-0 justify-between items-center">
          <div className="flex justify-center items-center gap-1">
            <Image
              src="/assets/images/header-logo.svg"
              alt="insiDeX"
              width={0}
              height={0}
              sizes="100%"
              className="h-8 w-auto"
            />
          </div>
          <div className="hidden md:flex justify-center items-center">
            <a
              href="https://app.insidex.trade"
              target="_blank"
              rel="noreferrer"
            >
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
    </div>
  );
};

export default Header;

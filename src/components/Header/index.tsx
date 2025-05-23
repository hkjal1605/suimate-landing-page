'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import PrimaryButton from '../PrimaryButton';

const Header = () => {
  return (
    <div className="w-full max-w-[1200px] backdrop-blur-[10px] bg-black-1000 bg-opacity-15 z-50 fixed top-5 left-[50%] translate-x-[-50%] flex justify-center items-center rounded-full">
      <div className="w-full flex justify-between items-center py-2 px-3">
        <div className="w-full flex px-4 xl:px-0 justify-between items-center">
          <Link href="/">
            <div className="flex justify-center items-center gap-1">
              <Image
                src="/assets/images/header-logo.svg"
                alt="Nexa"
                width={0}
                height={0}
                sizes="100%"
                className="h-7 w-auto"
              />
            </div>
          </Link>
          <div className="hidden md:flex justify-center items-center">
            <a href="https://app.nexa.xyz" target="_blank" rel="noreferrer">
              <div className="px-4 cursor-pointer">
                <p className="text-sm text-black-900">Coins</p>
              </div>
            </a>
            <a
              href="https://app.nexa.xyz/memezone"
              target="_blank"
              rel="noreferrer"
            >
              <div className="px-4 cursor-pointer">
                <p className="text-sm text-black-900">Meme Zone</p>
              </div>
            </a>
            <a
              href="https://app.nexa.xyz/leaderboard"
              target="_blank"
              rel="noreferrer"
            >
              <div className="px-4 cursor-pointer">
                <p className="text-sm text-black-900">Leaderboard</p>
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

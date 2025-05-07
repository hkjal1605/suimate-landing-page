import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const Links = () => {
  return (
    <div className="w-full px-4 lg:px-0 flex flex-col items-center justify-start bg-black-50 pt-[140px] pb-12 z-30">
      <div className="max-w-[1200px] w-full flex flex-col items-center justify-start">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 w-full justify-between items-center md:items-start">
          <Image
            src="/assets/images/header-logo.svg"
            alt="logo"
            width={0}
            height={0}
            sizes="100%"
            className="h-8 w-auto"
          />
          <div className="flex flex-col md:flex-row mt-20 md:my-0 gap-8 md:gap-0 items-center w-full md:items-start justify-end h-[214px]">
            <div className="flex flex-col items-center md:items-start justify-start gap-3 w-[180px]">
              <p className="text-sm text-black-900 font-medium">Product</p>
              <Link href="https://app.nexa.xyz" target="_blank">
                <p className="text-sm text-black-700">Coins on Sui</p>
              </Link>
              <Link href="https://app.nexa.xyz/leaderboard" target="_blank">
                <p className="text-sm text-black-700">Leaderboard</p>
              </Link>
              <Link href="https://app.nexa.xyz/memezone" target="_blank">
                <p className="text-sm text-black-700">Memezone</p>
              </Link>
            </div>
            <div className="flex flex-col items-center md:items-start justify-start gap-3 w-[180px]">
              <p className="text-sm text-black-900 font-medium">Resources</p>
              <Link href="https://docs.insidex.trade" target="_blank">
                <p className="text-sm text-black-700">Docs</p>
              </Link>
              <Link href="/terms-and-conditions">
                <p className="text-sm text-black-700">Terms and Conditions</p>
              </Link>
              <Link href="/privacy-policy">
                <p className="text-sm text-black-700">Privacy Policy</p>
              </Link>
            </div>
            <div className="flex flex-col items-start justify-start gap-3 w-auto">
              <p className="text-sm text-black-900 font-medium">Company</p>
              <Link href="/support">
                <p className="text-sm text-black-700">Support</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center mb-10">
          <p className="text-sm text-black-700 max-w-[35%]">
            Nexa has partnered with TradingView for its charting technology. A
            global trading platform that enables users to track{' '}
            <a
              href="https://www.tradingview.com/symbols/BTCUSD/"
              target="_blank"
              className="text-black-900 underline"
            >
              Btc/USD charts
            </a>{' '}
            seamlessly and offers cutting edge analytical tools
          </p>
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="flex justify-start items-center gap-6">
            <Link href="https://x.com/nexaxyz" target="_blank">
              <Image
                src="/assets/images/twitter.svg"
                alt="twitter"
                width={20}
                height={20}
                className="min-w-5 min-h-5 max-w-5 max-h-5"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/insidex-trade/?viewAsMember=true"
              target="_blank"
            >
              <Image
                src="/assets/images/linkedin.svg"
                alt="twitter"
                width={25}
                height={25}
                // className="min-w-5 min-h-5 max-w-5 max-h-5"
              />
            </Link>
          </div>
          <p className="text-sm text-black-600">
            Published by Insidex Labs Pte. Ltd.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Links;

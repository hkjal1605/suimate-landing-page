import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const Links = () => {
  return (
    <div className="w-full px-4 lg:px-0 flex flex-col items-center justify-start bg-black-50 max-w-[1250px] pt-[140px] pb-12 z-30">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 w-full justify-between items-start">
        <Image
          src="/assets/images/header-logo.svg"
          alt="logo"
          width={0}
          height={0}
          sizes="100%"
          className="h-8 w-auto"
        />
        <div className="flex items-start justify-end h-[254px]">
          <div className="flex flex-col items-start justify-start gap-3 w-[180px]">
            <p className="text-sm text-black-900 font-medium">Product</p>
            <Link href="https://app.insidex.trade" target="_blank">
              <p className="text-sm text-black-700">Perps</p>
            </Link>
            <Link href="https://app.insidex.trade/spot" target="_blank">
              <p className="text-sm text-black-700">Spot</p>
            </Link>
            <Link href="https://app.insidex.trade/liquidity" target="_blank">
              <p className="text-sm text-black-700">Liquidity Supply</p>
            </Link>
          </div>
          <div className="flex flex-col items-start justify-start gap-3 w-[180px]">
            <p className="text-sm text-black-900 font-medium">Resources</p>
            <p className="text-sm text-black-700">Docs</p>
            <p className="text-sm text-black-700">Terms of service</p>
          </div>
          <div className="flex flex-col items-start justify-start gap-3 w-auto">
            <p className="text-sm text-black-900 font-medium">Company</p>
            <p className="text-sm text-black-700">About Us</p>
            <p className="text-sm text-black-700">Brand Kit</p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between items-center">
        <div className="flex justify-start items-center gap-6">
          <Link href="https://x.com/insidex_trade" target="_blank">
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
        <p className="text-sm text-black-600">© 2024 insiDeX</p>
      </div>
    </div>
  );
};

export default Links;

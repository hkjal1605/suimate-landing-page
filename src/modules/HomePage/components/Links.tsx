import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const Links = () => {
  return (
    <div className="w-full px-4 lg:px-0 flex flex-col items-center justify-start bg-transparent max-w-[1250px] pt-[100px] pb-12 gap-12">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 w-full justify-between items-start">
        <Image
          src="/assets/images/header-logo.svg"
          alt="logo"
          width={150}
          height={20}
        />
        <div className="flex items-start justify-end gap-10">
          <div className="flex flex-col items-start justify-start gap-3">
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
          <div className="flex flex-col items-start justify-start gap-3">
            <p className="text-sm text-black-900 font-medium">Resources</p>
            <p className="text-sm text-black-700">Docs</p>
            <p className="text-sm text-black-700">Terms of service</p>
          </div>
          <div className="flex flex-col items-start justify-start gap-3">
            <p className="text-sm text-black-900 font-medium">Company</p>
            <p className="text-sm text-black-700">About Us</p>
            <p className="text-sm text-black-700">Brand Kit</p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between items-center">
        <div className="flex justify-start items-center gap-4">
          <Link href="https://x.com/insidex_trade" target="_blank">
            <Image
              src="/assets/images/twitter.svg"
              alt="twitter"
              width={20}
              height={20}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/insidex-trade/?viewAsMember=true"
            target="_blank"
          >
            <Image
              src="/assets/images/linkedin.svg"
              alt="twitter"
              width={20}
              height={20}
            />
          </Link>
        </div>
        <p className="text-sm text-black-600">© 2024 insiDeX</p>
      </div>
    </div>
  );
};

export default Links;

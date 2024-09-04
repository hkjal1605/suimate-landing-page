import React from 'react';

import Link from 'next/link';

const Footer = () => {
  return (
    <div className="w-full flex justify-between items-center py-2 px-5 bg-black-100 border-t-[1px] border-black-400 fixed bottom-0">
      <div className="flex justify-start items-center gap-1">
        <p className="text-xs text-black-800 font-stretch-wide">
          Last updated at:
        </p>
        <p className="text-xs text-yellow-200 font-stretch-wide">
          07/04/2024 11:30:00 UTC
        </p>
      </div>
      <p className="text-xs text-black-900 font-stretch-wide">
        insiDeX | DeFi Traders Analytics
      </p>
      <div className="flex justify-end items-center gap-1">
        <p className="text-xs text-black-800 font-stretch-wide">
          Built with love by:
        </p>
        <Link href="/contact">
          <p className="text-xs text-blue-300 font-medium font-stretch-wide">
            HKJ
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;

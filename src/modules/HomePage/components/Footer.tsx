import React from 'react';

import Image from 'next/image';

import PrimaryButton from '@/components/PrimaryButton';

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-transparent">
      <div className="relative w-full h-screen flex flex-col items-center justify-start pt-[18%] gap-1">
        <Image
          alt="footer-mockup"
          src="/assets/images/footer-mockup.png"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute top-0 left-0 z-10"
          style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
        />
        <p className="text-black-1000 text-2xl">
          Ready to Transform Your DeFi Strategy?
        </p>
        <p className="text-sm text-black-1000 text-opacity-70 mb-5">
          Unlock insights, track top players, and make smarter decisions.{' '}
        </p>
        <PrimaryButton text="Launch App" />
      </div>
    </div>
  );
};

export default Footer;

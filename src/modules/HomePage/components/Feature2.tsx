import React from 'react';
import Image from 'next/image';

const Feature2 = () => {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center gap-2 py-8 px-4 lg:px-0 bg-black-50 overflow-hidden z-10">
      <p className="text-4xl text-brown-300 text-center">
        Explore the World of DeFi on Sui <br /> Analyze and Trade Seamlessly{' '}
      </p>
      <p className="text-base text-black-700 mb-5">
        insiDeX offers everything you need to dive into meme coins on the Sui
        blockchain.{' '}
      </p>
      <div className="w-full flex flex-col h-full items-center justify-start overflow-hidden rounded-3xl max-w-[1200px]">
        <div className="flex justify-center items-center w-full h-[80%]">
          <Image
            src="/assets/images/art-2.webp"
            alt="Feature"
            width={0}
            height={0}
            sizes="100%"
            className="w-full h-auto object-cover flex-1"
          />
        </div>
        <div className="w-full flex-1 flex justify-center items-center p-8 bg-brown-500">
          <p className="text-base text-brown-200 text-center">
            Discover new coins, view price charts, and trade with ease—all with
            a smooth, CEX-like experience. <br /> Enjoy the freedom of DeFi with
            the tools you need to succeed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature2;

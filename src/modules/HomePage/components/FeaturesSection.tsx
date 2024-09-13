'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import PrimaryButton from '@/components/PrimaryButton';
import 'swiper/css';

const FeatureOptions = [
  {
    key: 1,
    title: 'Analyze Perpetual Trades',
    description: [
      'View on-chain data DeFi activity in perpetual trades.',
      "Gain insights into traders' performance, positions, and strategies."
    ]
  },
  {
    key: 2,
    title: 'Evaluate Spot Exchanges',
    description: [
      'Track spot exchanges being made on any DEX on Sui',
      "Analyze trending coins, traders' activities and buy/sell strategies."
    ]
  },
  {
    key: 3,
    title: 'Rank Traders on Different Criteria',
    description: [
      'See how a trader ranks compared to other traders based on certain criteria.',
      'Choose the trader you want to follow based on their performance, and their rank in a specific category.'
    ]
  },
  {
    key: 4,
    title: 'Track Liquidity in Pools',
    description: [
      'Keep a track of the most liquid and the most active pools on Sui.',
      'Analyze the liquidity and trading volume of a pool before making a spot exchange.'
    ]
  },
  {
    key: 5,
    title: 'Get Insights into a Liquidity Pools Market Share',
    description: [
      'Understand how much of the total swap volume on a token pair goes through a specific pool.',
      'Keep track of open positions on a pool, and how much of the total liquidity is locked in that pool.'
    ]
  },
  {
    key: 6,
    title: 'Understand the Market Sentiment',
    description: [
      'Quickly visualize the largest positions in the market by Open Interest.',
      'Understand if the market is bullish or bearish in general, and how the sentiment is changing over time.'
    ]
  }
];

const FeaturesSection = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleChangeSwiperImage = (index: number) => {
    const swiper = (document?.querySelector('.swiper') as any)?.swiper;
    if (!swiper) return;

    (swiper as any)?.slideTo(index, 500, false);
  };

  useEffect(() => {
    handleChangeSwiperImage(selectedOption - 1);
  }, [selectedOption]);

  return (
    <div className="w-full px-4 lg:px-0 flex flex-col pt-20 pb-16 h-auto bg-transparent justify-start items-center max-w-[1250px] overflow-hidden">
      <div className="flex w-full flex-col items-start justify-start gap-4">
        <div className="px-2 py-0.5 bg-black-1000 bg-opacity-15 rounded-full">
          <p className="uppercase text-sm text-black-1000">Features</p>
        </div>
        <p className="lg:whitespace-nowrap text-4xl text-black-1000">
          Unlock the Power of insiDeX
        </p>
        <PrimaryButton text="Launch App" />
      </div>
      <div className="flex flex-col lg:flex-row w-full justify-between items-stretch gap-10">
        <div className="flex w-full flex-col items-start justify-start gap-8 mt-5">
          {FeatureOptions.map((option) => (
            <div
              className={`flex flex-col items-start justify-start gap-4 overflow-hidden ${selectedOption === option.key ? 'max-h-[120px]' : 'max-h-[24px]'} transition-all duration-300`}
              onClick={() =>
                setSelectedOption(
                  selectedOption === option.key ? 0 : option.key
                )
              }
              key={option.key}
            >
              <p
                className={`${selectedOption === option.key ? 'text-black-1000 text-2xl' : 'text-black-700 text-base'} transition-all duration-300 ease-in-out cursor-pointer`}
              >
                {option.key}. {option.title}
              </p>
              <div className="w-full min-h-px bg-black-500" />
              <div className="flex flex-col items-start justify-start pl-6 gap-2">
                {option.description.map((desc) => (
                  <div
                    className="flex justify-start items-center gap-1"
                    key={desc}
                  >
                    <Image
                      src="/assets/images/bullet.svg"
                      width={10}
                      height={10}
                      alt="bullet"
                    />
                    <p className="text-base text-black-1000">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/2 bg-black-1000 bg-opacity-20 h-[calc(100%-8rem)] max-h-[calc(100%-8rem)] py-4 px-4 lg:py-6 lg:px-[80px] flex justify-center items-center relative">
          <Swiper className="h-full bg-transparent" loop>
            {FeatureOptions.map((option, index) => (
              <SwiperSlide key={option.key}>
                <Image
                  src={`/assets/images/features/${index}.png`}
                  width={0}
                  height={0}
                  sizes="100%"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  alt="feature"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;

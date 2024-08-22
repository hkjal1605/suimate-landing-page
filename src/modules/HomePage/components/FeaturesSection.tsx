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
      'View on-chain data from traders in perpetual markets.',
      'Gain insights into their performance, positions, and strategies.'
    ]
  },
  {
    key: 2,
    title: 'Evaluate Spot Exchanges',
    description: [
      'View on-chain data from traders in perpetual markets.',
      'Gain insights into their performance, positions, and strategies.'
    ]
  },
  {
    key: 3,
    title: 'Rank Traders on Different Criteria',
    description: [
      'View on-chain data from traders in perpetual markets.',
      'Gain insights into their performance, positions, and strategies.'
    ]
  },
  {
    key: 4,
    title: 'Backtest Trading Strategies',
    description: [
      'View on-chain data from traders in perpetual markets.',
      'Gain insights into their performance, positions, and strategies.'
    ]
  },
  {
    key: 5,
    title: 'Monitor and Track Performance',
    description: [
      'View on-chain data from traders in perpetual markets.',
      'Gain insights into their performance, positions, and strategies.'
    ]
  },
  {
    key: 6,
    title: 'Explore Staking Strategies',
    description: [
      'View on-chain data from traders in perpetual markets.',
      'Gain insights into their performance, positions, and strategies.'
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
    <div className="w-full flex h-screen bg-black-100 px-[5%] justify-between items-center">
      <div className="flex flex-col items-start justify-center gap-4">
        <div className="px-2 py-0.5 bg-black-1000 bg-opacity-15 rounded-full">
          <p className="uppercase text-sm text-black-1000">Features</p>
        </div>
        <p className="whitespace-nowrap text-4xl text-black-1000">
          Unlock the Power of SuiMate
        </p>
        <PrimaryButton text="Launch App" />
        <div className="flex flex-col items-start justify-center gap-8 mt-5">
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
      </div>
      <div className="w-[40%] bg-black-1000 bg-opacity-20 h-[80%] p-5 flex justify-center items-center relative">
        <Swiper className="h-full bg-black-1000" loop>
          {FeatureOptions.map((option) => (
            <SwiperSlide key={option.key}>
              <Image
                src="/assets/images/features/1.png"
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
  );
};

export default FeaturesSection;

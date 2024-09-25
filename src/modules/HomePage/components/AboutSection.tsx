import React from 'react';

import Image from 'next/image';

import PrimaryButton from '@/components/PrimaryButton';

const AboutSection = () => {
  // const [scrollY, setScrollY] = useState(0);
  // const [size, setSize] = useState([150, 150]);

  // const handleScroll = () => {
  //   setScrollY(window?.scrollY);
  // };

  // useEffect(() => {
  //   window?.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window?.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (scrollY > window?.innerHeight * 0.65 && scrollY < 4000) {
  //     // Start increasing the size gradually as the scrollY increases
  //     setSize([
  //       150 + scrollY - window?.innerHeight * 0.65,
  //       150 + scrollY - window?.innerHeight * 0.65
  //     ]);
  //   }

  //   if (scrollY > window?.innerWidth * 2) {
  //     setSize([window?.innerWidth, window?.innerHeight]);
  //   }
  // }, [scrollY]);

  // console.log(scrollY, window?.innerHeight);

  // return (
  //   <div
  //     className="flex justify-center items-start py-16 bg-black-1000 left-[50%] translate-x-[-50%] glow-ball overflow-hidden"
  //     style={{
  //       width: `${size[0]}px`,
  //       height: `${size[1]}px`,
  //       borderRadius: scrollY > window?.innerWidth * 2 ? '0' : '50%',
  //       position: scrollY <= window?.innerHeight * 0.65 ? 'absolute' : 'fixed',
  //       top:
  //         scrollY <= window?.innerHeight * 0.65
  //           ? '100vh'
  //           : scrollY > 3000 && scrollY < window?.innerWidth * 2
  //             ? `${window?.innerHeight * 0.35 - (scrollY - 3000)}px`
  //             : scrollY > window?.innerWidth * 2
  //               ? '0'
  //               : `${window?.innerHeight * 0.35}px`,
  //       zIndex: scrollY <= window?.innerHeight * 0.65 ? 20 : 150,
  //       transition:
  //         scrollY > window?.innerWidth * 1.5 ? 'all 0.8s ease-in-out' : 'none'
  //     }}
  //   >
  //     {scrollY > window?.innerWidth * 1.5 ? (
  //       <div className="w-full h-full flex justify-between items-start max-w-[1250px] gap-10 animate-fadeIn transition-all duration-300">
  //         <div className="flex flex-col items-start justify-start gap-5 pt-[72px]">
  //           <div className="px-2 py-0.5 bg-black-200 bg-opacity-15 rounded-full">
  //             <p className="uppercase text-sm text-black-100">About</p>
  //           </div>
  //           <p className="whitespace-nowrap text-4xl text-black-100">
  //             What is insiDeX?
  //           </p>
  //           <p className="whitespace-nowrap text-black-300 text-opacity-80 text-xl">
  //             Built to enable users to analyze and get insights <br /> on DeFi
  //             activity happening across all the decentralized <br /> spot and
  //             perpetual exchanges on Sui.
  //           </p>
  //           <PrimaryButton text="Check the app now" theme="dark" />
  //         </div>
  //         <div className="min-h-full max-h-full w-full flex justify-end items-end bg-[#f1f1f1] rounded-2xl overflow-hidden">
  //           <Image
  //             src="/assets/images/about-mockup.webp"
  //             alt="About Mockup"
  //             width={0}
  //             height={0}
  //             sizes="100%"
  //             style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
  //           />
  //         </div>
  //       </div>
  //     ) : null}
  //   </div>
  // );

  return (
    <div className="flex w-full h-screen justify-center items-start py-16 xl:py-[100px] px-4 lg:px-0 bg-black-1000 overflow-hidden">
      <div className="w-full h-full flex flex-col lg:flex-row justify-between items-start max-w-[1250px] gap-[140px] animate-fadeIn transition-all duration-300">
        <div className="flex flex-col items-start justify-start gap-5 pt-[72px]">
          <div className="py-1.5 px-3 bg-black-200 bg-opacity-15 rounded-full">
            <p className="text-xs text-black-100 font-[Sf-Mono] uppercase">
              About
            </p>
          </div>
          <p className="md:whitespace-nowrap text-4xl text-black-100 -mb-4">
            What is insiDeX?
          </p>
          <p className="lg:whitespace-nowrap text-black-300 text-opacity-80 text-xl">
            Built to enable users to analyze and get insights <br /> on DeFi
            activity happening across all the decentralized <br /> spot and
            perpetual exchanges on Sui.
          </p>
          <PrimaryButton text="Check the app now" theme="dark" />
        </div>
        <div className="lg:min-h-full lg:max-h-full w-full flex justify-end items-end bg-[#f1f1f1] rounded-2xl overflow-hidden">
          <Image
            src="/assets/images/about-mockup.webp"
            alt="About Mockup"
            width={0}
            height={0}
            sizes="100%"
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

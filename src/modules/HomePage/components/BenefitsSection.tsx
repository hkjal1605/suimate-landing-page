import React from 'react';

const BenefitsSection = () => {
  return (
    <div className="w-full px-4 lg:px-0 bg-black-1000 flex justify-center items-center">
      <div className="flex flex-col max-w-[1250px]  items-start justify-center w-full py-[150px] gap-5">
        <div className="px-2 py-0.5 bg-black-200 bg-opacity-15 rounded-full">
          <p className="uppercase text-sm text-black-100">Benefits</p>
        </div>
        <p className="lg:whitespace-nowrap text-4xl text-black-100 mb-10">
          Benefits of Studying Big DeFi Players’ <br /> Trading and Investing
          Strategies
        </p>
        <div className="flex flex-col md:flex-row w-full gap-5 h-[auto] md:h-[350px] justify-center items-stretch">
          <div className="benefits-card-1 w-full flex-[1.2] flex flex-col items-start justify-start gap-4 p-6">
            <p className="text-black-100 text-2xl">Transparency</p>
            <p className="text-base text-black-100">
              In-Depth Analysis: Access transparent insights into on-chain
              activity within the Sui DeFi space.
            </p>
            <p className="text-base text-black-100">
              Informed Decisions: Review historical performance, risk levels,
              and portfolio composition to make choices that align with your
              risk tolerance and investment goals.
            </p>
          </div>
          <div className="benefits-card-2 w-full flex-[1] flex flex-col items-start justify-start gap-4 p-6">
            <p className="text-black-100 text-2xl">Protection from Rug Pulls</p>
            <p className="text-base text-black-100">
              Verification: Verify the legitimacy of new coins by analyzing
              holder activities and investment levels.
            </p>
            <p className="text-base text-black-100">
              Informed Investment: Ensure other traders are showing interest
              before committing your own assets, reducing the risk of getting
              rugged.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-5 justify-center h-[auto] md:h-[350px] items-stretch">
          <div className="benefits-card-3 w-full flex-[1] flex flex-col items-start justify-start gap-4 p-6">
            <p className="text-black-100 text-2xl">No FOMO</p>
            <p className="text-base text-black-100">
              Disciplined Trading: Mimic the strategies of seasoned traders to
              avoid impulsive, fear-driven decisions.
            </p>
            <p className="text-base text-black-100">
              Strategic Growth: Improve your trading approach by learning from
              the experts, minimizing hasty moves.
            </p>
          </div>
          <div className="benefits-card-4 w-full flex-[1.2] flex flex-col items-start justify-start gap-4 p-6">
            <p className="text-black-100 text-2xl">Time Efficiency</p>
            <p className="text-base text-black-100">
              Save Time: Reduce the need for constant market monitoring and
              in-depth analysis.
            </p>
            <p className="text-base text-black-100">
              Passive Trading: Copy skilled traders to execute trades more
              passively, freeing up your time for other activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;

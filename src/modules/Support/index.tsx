import React from 'react';

import Link from 'next/link';

const SupportModule = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start overflow-hidden pt-[120px] max-w-[1200px] mx-auto gap-5">
      <p className="text-4xl font-bold text-black-900">Support</p>
      <div className="w-full flex flex-col justify-start items-start overflow-hidden">
        <p className="text-xl text-black-800">
          For any inquiries or assistance, please send us a message on our
          socials or community groups. We are the fastest to respond to your
          messages on our Telegram community group. Emails will be responded to
          within 24 hours.
        </p>
      </div>
      <Link href="https://x.com/nexaxyz" target="_blank">
        <div className="flex justify-start items-center gap-6">
          <p className="text-base text-black-700 underline">
            Send us a DM on X
          </p>
        </div>
      </Link>
      <Link href="https://t.me/nexaxyz" target="_blank">
        <div className="flex justify-start items-center gap-6">
          <p className="text-base text-black-700 underline">
            Join our community group on Telegram
          </p>
        </div>
      </Link>
      <Link href="mailto:contact@insidex.trade" target="_blank">
        <div className="flex justify-start items-center gap-6">
          <p className="text-base text-black-700 underline">
            Send us a mail on contact@insidex.trade
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SupportModule;

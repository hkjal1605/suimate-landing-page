import '@/styles/global.css';

import type { Metadata } from 'next';

// import Footer from '@/components/Footer';
// import Header from '@/components/Header';
import Header from '@/components/Header';
import ProgressBarProvider from '@/components/ProgressBarProvider';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png'
    },
    {
      rel: 'icon',
      url: '/favicon.ico'
    }
  ]
};

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={props.params.locale}>
      <title>insiDeX - DeFi Traders Analytics on SUI</title>
      <meta name="title" content="insiDeX - DeFi Traders Analytics on SUI" />
      <meta
        name="description"
        content="Discover and analyze on-chain trading activity with insiDeX, designed for perpetual and spot DEXs on the Sui blockchain. Explore trader performance, evaluate strategies, and gain insights into market trends effortlessly. Don't be a noob trader your whole life, join insiDeX today!"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://insiDeX.trade/" />
      <meta
        property="og:title"
        content="insiDeX - DeFi Traders Analytics on SUI"
      />
      <meta
        property="og:description"
        content="Discover and analyze on-chain trading activity with insiDeX, designed for perpetual and spot DEXs on the Sui blockchain. Explore trader performance, evaluate strategies, and gain insights into market trends effortlessly. Don't be a noob trader your whole life, join insiDeX today!"
      />
      <meta property="og:image" content="https://insiDeX.trade/meta.webp" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://insiDeX.trade/" />
      <meta
        name="twitter:title"
        content="insiDeX - DeFi Traders Analytics on SUI"
      />
      <meta
        name="twitter:description"
        content="Discover and analyze on-chain trading activity with insiDeX, designed for perpetual and spot DEXs on the Sui blockchain. Explore trader performance, evaluate strategies, and gain insights into market trends effortlessly. Don't be a noob trader your whole life, join insiDeX today!"
      />
      <meta name="twitter:image" content="https://insiDeX.trade/meta.webp" />
      <body>
        <ProgressBarProvider>
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <Header />
            <div className="w-full">{props.children}</div>
            {/* <Footer /> */}
          </div>
        </ProgressBarProvider>
      </body>
    </html>
  );
}

// Enable edge runtime but you are required to disable the `migrate` function in `src/libs/DB.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';

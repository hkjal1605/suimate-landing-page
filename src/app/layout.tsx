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
      <head>
        <script
          type="text/javascript"
          src="/charting_library/charting_library.standalone.js"
          defer
        />
      </head>
      <title>Nexa - Trading Terminal and Data Analytics on Sui</title>
      <meta
        name="title"
        content="Nexa - Trading Terminal and Data Analytics on Sui"
      />
      <meta
        name="description"
        content="Elevate your crypto trading with NEXA, a powerful terminal and data analytics tool built on the Sui blockchain. Trade smarter, analyze better, and stay ahead."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://app.nexa.xyz/" />
      <meta
        property="og:title"
        content="Nexa - Trading Terminal and Data Analytics on Sui"
      />
      <meta
        property="og:description"
        content="Elevate your crypto trading with NEXA, a powerful terminal and data analytics tool built on the Sui blockchain. Trade smarter, analyze better, and stay ahead."
      />
      <meta property="og:image" content="https://nexa.xyz/meta-image.webp" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://app.nexa.xyz/" />
      <meta
        name="twitter:title"
        content="Nexa - Trading Terminal and Data Analytics on Sui"
      />
      <meta
        name="twitter:description"
        content="Elevate your crypto trading with NEXA, a powerful terminal and data analytics tool built on the Sui blockchain. Trade smarter, analyze better, and stay ahead."
      />
      <meta name="twitter:image" content="https://nexa.xyz/meta-image.webp" />

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

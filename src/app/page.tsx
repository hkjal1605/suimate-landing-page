import HomePageModule from '@/modules/HomePage';

export async function generateMetadata() {
  return {
    title: 'SuiMate - DeFi Traders Analytics on SUI',
    description:
      "Discover and analyze on-chain trading activity with SuiMate, designed for perpetual and spot DEXs on the Sui blockchain. Explore trader performance, evaluate strategies, and gain insights into market trends effortlessly. Don't be a noob trader your whole life, join SuiMate today!"
  };
}

export default function Index() {
  return <HomePageModule />;
}

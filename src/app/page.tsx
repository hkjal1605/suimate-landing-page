import HomePageModule from '@/modules/HomePage';

export async function generateMetadata() {
  return {
    title: 'insiDeX - DeFi Traders Analytics on SUI',
    description:
      "Discover and analyze on-chain trading activity with insiDeX, designed for perpetual and spot DEXs on the Sui blockchain. Explore trader performance, evaluate strategies, and gain insights into market trends effortlessly. Don't be a noob trader your whole life, join insiDeX today!"
  };
}

export default function Index() {
  return <HomePageModule />;
}

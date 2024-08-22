import HomePageModule from '@/modules/HomePage';

export async function generateMetadata() {
  return {
    title: 'SuiMate - DeFi Traders Analytics',
    description:
      'Explore, analyze, and evaluate on-chain traders from from the perpetual DEXs built on Sui'
  };
}

export default function Index() {
  return <HomePageModule />;
}

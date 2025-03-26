import HomePageModule from '@/modules/HomePage';

export async function generateMetadata() {
  return {
    title: 'Nexa - Trading Terminal and Data Analytics on Sui',
    description:
      'Elevate your crypto trading with NEXA, a powerful terminal and data analytics tool built on the Sui blockchain. Trade smarter, analyze better, and stay ahead.'
  };
}

export default function Index() {
  return <HomePageModule />;
}

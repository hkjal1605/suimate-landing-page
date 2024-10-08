import React from 'react';

import AboutSection from './components/AboutSection';
import BenefitsSection from './components/BenefitsSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Links from './components/Links';

const HomePageModule = () => {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  return (
    // <div className="w-full min-h-[50000px] relative">
    <div className="w-full flex flex-col justify-start items-center overflow-hidden">
      <HeroSection />
      <div className="w-screen absolute top-[calc(100vh-350px)]  lg:top-[calc(100vh-400px)] left-[50%] translate-x-[-50%] z-[50]">
        {/* <Image
          src="/assets/images/hero-mockup.webp"
          alt="hero-mockup"
          width={0}
          height={0}
          sizes="100vw"
          className="hidden lg:block z-[50] h-[400px] 2xl:h-[600px]"
          style={{ width: '100%', objectFit: 'cover' }}
        />
        <Image
          src="/assets/images/hero-small.webp"
          alt="hero-mockup"
          width={0}
          height={0}
          sizes="100vw"
          className="block lg:hidden z-[50] h-[auto]"
          style={{ width: '100%', objectFit: 'contain' }}
        /> */}
      </div>
      <AboutSection />
      <FeaturesSection />
      <BenefitsSection />
      <Footer />
      <Links />
      {/* <ExtraFooter /> */}
    </div>
  );
};

export default HomePageModule;

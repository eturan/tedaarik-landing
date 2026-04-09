import { useEffect } from 'react';
import { NavigationB } from '@/components/b/NavigationB';
import { HeroB } from '@/components/b/HeroB';
import { LogoBelt } from '@/components/LogoBelt';
import { PainPointsB } from '@/components/b/PainPointsB';
import { VideoShowcaseB } from '@/components/b/VideoShowcaseB';
import { CalculatorB } from '@/components/b/CalculatorB';
import { FeaturesB } from '@/components/b/FeaturesB';
import { HowItWorksB } from '@/components/b/HowItWorksB';
import { PricingB } from '@/components/b/PricingB';
import { FAQB } from '@/components/b/FAQB';
import { CTAB } from '@/components/b/CTAB';
import Footer from '@/components/Footer';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { trackExperiment } from '@/lib/experiment';

const IndexB = () => {
  useEffect(() => {
    trackExperiment();
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <NavigationB />
      <main>
        <HeroB />
        <LogoBelt />
        <PainPointsB />
        <VideoShowcaseB />
        <CalculatorB />
        <FeaturesB />
        <HowItWorksB />
        <PricingB />
        <FAQB />
        <CTAB />
      </main>
      <Footer />
    </div>
  );
};

export default IndexB;

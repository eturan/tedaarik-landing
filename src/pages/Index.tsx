import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { LogoBelt } from "@/components/LogoBelt";
import { PainPoints } from "@/components/PainPoints";
import { Calculator } from "@/components/Calculator";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <LogoBelt />
        <PainPoints />
        <Calculator />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

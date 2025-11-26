import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import Calculator from "@/components/Calculator";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import EarlyAccess from "@/components/EarlyAccess";
import ActiveRegions from "@/components/ActiveRegions";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 lg:pt-22">
        <Hero />
        <ProblemSection />
        <Calculator />
        <HowItWorks />
        <Pricing />
        <EarlyAccess />
        <ActiveRegions />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

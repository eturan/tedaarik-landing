import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview-new.png";
import mobileAppPreview from "@/assets/mobile-app-preview-new.png";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const ScrollIndicator = () => {
    const scrollToNextSection = () => {
      document.getElementById("problem-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    return (
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 group cursor-pointer flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="h-12 w-12 text-accent animate-bounce group-hover:text-accent/80 transition-colors" />
      </button>
    );
  };
  const scrollToCalculator = () => {
    document.getElementById("calculator")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToEarlyAccess = () => {
    document.getElementById("early-access")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section className="relative min-h-[75vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Z-Pattern Layout: Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto py-16">
          {/* Left: Content */}
          <div className="space-y-8 text-left">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Restoranınız için yapay zekâ <span className="text-accent">müdür yardımcısı</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Tedarik süreçlerinizi otomatikleştirerek restoranınızı zahmetsizce daha verimli ve kârlı hale getirin.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => setIsFormOpen(true)}
              className="w-full sm:w-auto glow-button bg-accent hover:bg-accent/90 text-accent-foreground text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 rounded-xl font-semibold"
            >
              Erken Erişim Talep Et
              <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToCalculator}
                className="w-full sm:w-auto glass-card text-lg px-8 py-6 rounded-xl font-semibold bg-background/50 hover:bg-accent/10 text-foreground hover:text-[#38b5b2] border-2 border-border hover:border-accent/50 transition-all"
              >
                Tasarruf Miktarını Hesapla
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-start gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-accent" />
                <span>5dk'da kurulum</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-accent" />
                <span>1 Ay Ücretsiz Deneme</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-accent" />
                <span>%20 Ortalama Tasarruf</span>
              </div>
            </div>
          </div>

          {/* Right: App Previews - Dashboard with mobile at bottom left */}
          <div className="relative flex justify-end -mr-8 sm:-mr-12 lg:-mr-16">
            {/* Dashboard - Main, larger, with phone inside */}
            <div className="relative z-10">
              <img
                src={dashboardPreview}
                alt="Tedaarik Dashboard"
                className="w-[400px] sm:w-[500px] lg:w-[600px] drop-shadow-[0_25px_60px_rgba(0,0,0,0.35)] animate-fade-in rounded-xl border border-border/30 hover:scale-105 transition-transform duration-300"
              />
              
              {/* Mobile App - Inside dashboard, positioned with percentages to stay stuck */}
              <div className="absolute -bottom-16 sm:-bottom-18 lg:-bottom-20 -left-[15%] sm:-left-[12%] lg:-left-[10%] z-20">
                <img
                  src={mobileAppPreview}
                  alt="Tedaarik Mobile App"
                  className="w-[32%] sm:w-[29%] lg:w-[27%] drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] animate-fade-in rounded-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollIndicator />

      {/* Gradient overlay for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

      <EarlyAccessForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </section>
  );
};

export default Hero;

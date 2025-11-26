import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";

const EarlyAccess = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <section id="early-access" className="py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-highlight/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <div className="glass-card-strong rounded-3xl p-12 sm:p-16 text-center space-y-8 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-highlight/5 pointer-events-none" />

            <div className="relative z-10 space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 rounded-full font-semibold border border-accent/20 text-accent">
                <span>Lansman Öncesi Özel Fırsat</span>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-4xl mx-auto">
                  Lansman öncesi kullanıcılar Tedaarik'ten ömür boyu %50 indirimli faydalanır ve en yeni özelliklere
                  öncelikli erişim şansı kazanır.
                </h2>
              </div>

              {/* CTA Button */}
              <div className="flex items-center justify-center pt-4">
                <Button
                  size="lg"
                  onClick={() => setIsFormOpen(true)}
                  className="glow-button bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-12 py-7 rounded-xl font-bold"
                >
                  Erken Erişim Talep Et
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EarlyAccessForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </section>
  );
};

export default EarlyAccess;

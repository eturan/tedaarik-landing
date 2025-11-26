import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/tedaarik-logo-new.png";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";

const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-22">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logoImage} alt="Tedaarik Logo" className="h-12 lg:h-18" />
          </div>

          {/* CTA */}
          <Button
            onClick={() => setIsFormOpen(true)}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-5 py-2 rounded-lg transition-all hover:shadow-lg text-sm"
          >
            Erken Erişim Talep Et
          </Button>
        </div>
      </div>

      <EarlyAccessForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </header>
  );
};

export default Header;

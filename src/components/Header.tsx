import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/tedaarik-logo-new.png";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";

const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Transform header background opacity based on scroll
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.85)", "rgba(255, 255, 255, 0.98)"]
  );

  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ["0 0 0 rgba(0,0,0,0)", "0 4px 20px rgba(0,0,0,0.1)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-border/50"
      style={{
        backgroundColor: headerBg,
        boxShadow: headerShadow,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-22">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.img
              src={logoImage}
              alt="Tedaarik Logo"
              className="h-12 lg:h-18"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => setIsFormOpen(true)}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-5 py-2 rounded-lg transition-all hover:shadow-lg text-sm"
            >
              Erken Erişim Talep Et
            </Button>
          </motion.div>
        </div>
      </div>

      <EarlyAccessForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </motion.header>
  );
};

export default Header;

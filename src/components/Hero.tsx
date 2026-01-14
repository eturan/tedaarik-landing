import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview-new.png";
import mobileAppPreview from "@/assets/mobile-app-preview-new.png";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";
import GradientMeshBackground from "@/components/ui/GradientMeshBackground";
import heroBackground from "@/assets/hero-background.webp";

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
      <motion.button
        onClick={scrollToNextSection}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 group cursor-pointer flex flex-col items-center gap-3"
        aria-label="Scroll to next section"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-12 w-12 text-accent group-hover:text-accent/80 transition-colors" />
        </motion.div>
      </motion.button>
    );
  };

  const scrollToCalculator = () => {
    document.getElementById("calculator")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.3,
      },
    },
  };

  const mobileVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.6,
      },
    },
  };

  const socialProofVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  };

  const checkItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="relative min-h-screen pt-16 lg:pt-20 flex items-center justify-center overflow-hidden">
      {/* Background image with Ken Burns effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBackground}
          alt=""
          aria-hidden="true"
          loading="eager"
          className="w-full h-full object-cover opacity-40 animate-ken-burns object-[70%_center] md:object-center"
        />
      </div>

      {/* Animated gradient mesh background - on top of video */}
      <GradientMeshBackground intensity="subtle" className="z-[1]" />

      {/* Semi-transparent overlay for content readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background/70 z-[2]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Z-Pattern Layout: Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto py-16">
          {/* Left: Content */}
          <motion.div
            className="space-y-8 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            >
              Restoranınız için yapay zekâ{" "}
              <motion.span
                className="text-accent inline-block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                müdür yardımcısı
              </motion.span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
            >
              Tedarik süreçlerinizi otomatikleştirerek restoranınızı zahmetsizce
              daha verimli ve kârlı hale getirin.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  onClick={() => setIsFormOpen(true)}
                  className="w-full sm:w-auto glow-button bg-accent hover:bg-accent/90 text-accent-foreground text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 rounded-xl font-semibold"
                >
                  Erken Erişim Talep Et
                  <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToCalculator}
                  className="w-full sm:w-auto glass-card text-lg px-8 py-6 rounded-xl font-semibold bg-background/50 hover:bg-accent/10 text-foreground hover:text-[#38b5b2] border-2 border-border hover:border-accent/50 transition-all"
                >
                  Tasarruf Miktarını Hesapla
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              variants={socialProofVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-start gap-6 pt-4 text-sm text-muted-foreground"
            >
              {[
                { text: "5dk'da kurulum" },
                { text: "1 Ay Ücretsiz Deneme" },
                { text: "%20 Ortalama Tasarruf" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={checkItemVariants}
                  className="flex items-center gap-2"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.9 + index * 0.1,
                      type: "spring",
                      stiffness: 500,
                      damping: 20,
                    }}
                  >
                    <Check className="h-4 w-4 text-accent" />
                  </motion.div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: App Previews - Dashboard with mobile at bottom left */}
          <div className="relative flex justify-end -mr-8 sm:-mr-12 lg:-mr-16">
            {/* Dashboard - Main, larger, with phone inside */}
            <motion.div
              className="relative z-10"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.img
                src={dashboardPreview}
                alt="Tedaarik Dashboard"
                className="w-[400px] sm:w-[500px] lg:w-[600px] drop-shadow-[0_25px_60px_rgba(0,0,0,0.35)] rounded-xl border border-border/30"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />

              {/* Mobile App - Inside dashboard, positioned with percentages to stay stuck */}
              <motion.div
                className="absolute -bottom-16 sm:-bottom-18 lg:-bottom-20 -left-[15%] sm:-left-[12%] lg:-left-[10%] z-20"
                variants={mobileVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.img
                  src={mobileAppPreview}
                  alt="Tedaarik Mobile App"
                  className="w-[32%] sm:w-[29%] lg:w-[27%] drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] rounded-2xl"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </motion.div>
            </motion.div>
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

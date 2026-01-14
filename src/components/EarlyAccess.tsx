import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";

const EarlyAccess = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section id="early-access" className="py-16 lg:py-20 relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={isInView ? {
            x: [0, 20, 0],
            y: [0, -20, 0],
          } : {}}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-highlight/20 rounded-full blur-3xl"
          animate={isInView ? {
            x: [0, -20, 0],
            y: [0, 20, 0],
          } : {}}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <motion.div
            className="glass-card-strong rounded-3xl p-12 sm:p-16 text-center space-y-8 relative overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{
              y: -4,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-highlight/5 pointer-events-none" />

            <motion.div
              className="relative z-10 space-y-8"
              variants={contentVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 rounded-full font-semibold border border-accent/20 text-accent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
                whileHover={{ scale: 1.05 }}
              >
                <span>Lansman Öncesi Özel Fırsat</span>
              </motion.div>

              {/* Headline */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-4xl mx-auto">
                  Lansman öncesi kullanıcılar Tedaarik'ten ömür boyu{" "}
                  <motion.span
                    className="text-accent inline-block"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    %50 indirimli
                  </motion.span>{" "}
                  faydalanır ve en yeni özelliklere öncelikli erişim şansı kazanır.
                </h2>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                className="flex items-center justify-center pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    onClick={() => setIsFormOpen(true)}
                    className="glow-button bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-12 py-7 rounded-xl font-bold"
                  >
                    Erken Erişim Talep Et
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <EarlyAccessForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </section>
  );
};

export default EarlyAccess;

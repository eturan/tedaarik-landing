import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EarlyAccessForm } from "./EarlyAccessForm";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Feature {
  name: string;
  status: 'included' | 'premium-only' | 'limited' | 'not-included';
  badge?: string;
}

const includedFeatures: Feature[] = [
  { name: "Kolay fatura yükleme & dijitalleştirme", status: 'included' },
  { name: "Otomatik veri analizi & ön muhasebe", status: 'included' },
  { name: "Otomatik fiyat karşılaştırma", status: 'included' },
  { name: "Yapay zeka destekli menü yönetimi", status: 'included' },
  { name: "Otomatik reçete maliyet güncellemeleri", status: 'included' },
  { name: "Şirket paneli & özet bilgiler", status: 'included' },
  { name: "Paylaşımlı tedarik listesi oluşturma", status: 'included' },
  { name: "Mevcut tedarikçilerden tek tıkla sipariş", status: 'included' },
  { name: "Kullanıcı sayısı 2", status: 'limited', badge: "Lansman öncesi 5" },
  { name: "Canlı ve öncelikli destek", status: 'included', badge: "Lansman öncesi" },
  { name: "E-posta desteği", status: 'included' },
];

const Pricing = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
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

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <>
      <section className="py-12 lg:py-16 pb-8 lg:pb-12 relative overflow-hidden" ref={ref}>
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={headerVariants}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 rounded-full font-semibold border border-accent/20 text-accent mb-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span>Çözümlerimiz</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">
              İşletmenize Uygun Çözümü Seçin
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Size en uygun çözümü belirlemek için bizimle iletişime geçin.
            </p>
          </motion.div>

          {/* Pricing Carousel */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full max-w-3xl mx-auto"
            >
              <CarouselContent>
                {/* Card 1: Tedaarik - Featured */}
                <CarouselItem className="basis-full">
                  <motion.div
                    className="glass-card-strong border-2 border-accent shadow-lg shadow-accent/20 transition-all duration-300 p-8 sm:p-10 rounded-2xl flex flex-col mx-auto max-w-2xl"
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    whileHover={{
                      y: -4,
                      boxShadow: "0 25px 50px -12px rgba(56, 181, 178, 0.25)",
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                  >
                    {/* Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <Badge className="mb-6 bg-highlight/20 border-highlight/40 text-highlight-foreground hover:bg-highlight/30 hover:border-highlight/60 transition-colors w-fit text-sm px-4 py-1.5">
                        🏆 Lansman öncesi öncelikli erişim fırsatı
                      </Badge>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="text-3xl font-bold mb-6 text-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      Tedaarik Başlangıç
                    </motion.h3>

                    {/* Features List - Single column for better readability */}
                    <motion.div
                      className="space-y-3 mb-8 flex-grow"
                      variants={containerVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                    >
                      {includedFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-3 group"
                          variants={featureVariants}
                          whileHover={{ x: 4 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          {/* Icon */}
                          {feature.status === 'included' && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={isInView ? { scale: 1 } : { scale: 0 }}
                              transition={{
                                delay: 0.6 + index * 0.05,
                                type: "spring",
                                stiffness: 500,
                                damping: 20,
                              }}
                            >
                              <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            </motion.div>
                          )}
                          {feature.status === 'limited' && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={isInView ? { scale: 1 } : { scale: 0 }}
                              transition={{
                                delay: 0.6 + index * 0.05,
                                type: "spring",
                                stiffness: 500,
                                damping: 20,
                              }}
                            >
                              <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            </motion.div>
                          )}

                          {/* Text */}
                          <div className="flex-1 min-w-0">
                            <span className="text-sm text-foreground leading-relaxed group-hover:text-accent transition-colors duration-200">
                              {feature.name}
                            </span>
                            {/* Badge */}
                            {feature.badge && (
                              <Badge variant="outline" className="ml-2 text-xs px-2 py-0.5 bg-accent/10 border-accent/30 text-accent font-medium">
                                {feature.badge}
                              </Badge>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        onClick={() => setIsFormOpen(true)}
                        className="w-full glow-button bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg rounded-xl"
                      >
                        Erken Erişim Talep Et
                      </Button>
                    </motion.div>
                  </motion.div>
                </CarouselItem>

                {/* Card 2: Tedaarik+ - Minimal Preview */}
                <CarouselItem className="basis-full">
                  <motion.div
                    className="glass-card-strong-static border border-border/50 opacity-60 transition-all duration-300 p-8 sm:p-10 rounded-2xl flex flex-col text-center grayscale-[40%] mx-auto max-w-2xl min-h-[600px] justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 0.6, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Badge variant="outline" className="mb-4 mx-auto bg-muted/50 border-muted text-muted-foreground w-fit text-sm px-4 py-1.5">
                      Yakında
                    </Badge>

                    <h3 className="text-2xl font-bold mb-4 text-muted-foreground">Tedaarik+</h3>

                    <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-md mx-auto">
                      Daha fazla kullanıcı, gelişmiş analitik ve ekip iş akışları
                    </p>

                    <Button disabled size="lg" variant="secondary" className="w-full max-w-sm mx-auto">
                      Çok Yakında
                    </Button>
                  </motion.div>
                </CarouselItem>

                {/* Card 3: Premium - Minimal Preview */}
                <CarouselItem className="basis-full">
                  <motion.div
                    className="glass-card-strong-static border border-border/50 opacity-60 transition-all duration-300 p-8 sm:p-10 rounded-2xl flex flex-col text-center grayscale-[40%] mx-auto max-w-2xl min-h-[600px] justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 0.6, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <Badge variant="outline" className="mb-4 mx-auto bg-muted/50 border-muted text-muted-foreground w-fit text-sm px-4 py-1.5">
                      Yakında
                    </Badge>

                    <h3 className="text-2xl font-bold mb-4 text-muted-foreground">Tedaarik Premium</h3>

                    <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-md mx-auto">
                      Çok şubeli yönetim, POS entegrasyonu, akıllı menü mühendisliği ve özel destek
                    </p>

                    <Button disabled size="lg" variant="secondary" className="w-full max-w-sm mx-auto">
                      Çok Yakında
                    </Button>
                  </motion.div>
                </CarouselItem>
              </CarouselContent>

              {/* Improved Navigation Controls */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <CarouselPrevious className="left-0 -translate-x-1/2 w-12 h-12 border-2 hover:bg-accent/10 hover:border-accent/50 transition-colors" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <CarouselNext className="right-0 translate-x-1/2 w-12 h-12 border-2 hover:bg-accent/10 hover:border-accent/50 transition-colors" />
              </motion.div>
            </Carousel>

            {/* Dot Indicators */}
            <motion.div
              className="flex justify-center gap-2 mt-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-accent"
                whileHover={{ scale: 1.3 }}
              />
              <motion.div
                className="w-2 h-2 rounded-full bg-muted"
                whileHover={{ scale: 1.3 }}
              />
              <motion.div
                className="w-2 h-2 rounded-full bg-muted"
                whileHover={{ scale: 1.3 }}
              />
            </motion.div>
          </motion.div>

        </div>
      </section>

      <EarlyAccessForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default Pricing;

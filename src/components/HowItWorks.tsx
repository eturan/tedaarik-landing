import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Eye, RefreshCw, ShoppingCart } from "lucide-react";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      number: "01",
      icon: Camera,
      title: "Faturanızın fotoğrafını ya da dijital dosyasını yükleyin",
      description: "Geri kalan her şeyi akıllı asistanınıza bırakın.",
    },
    {
      number: "02",
      icon: Eye,
      title: "Faturanız ve maliyetleriniz otomatik olarak analiz edilsin",
      description: "Angarya işleri Tedaarik halletsin.",
    },
    {
      number: "03",
      icon: RefreshCw,
      title: "Ürün tedarik fiyatlarınızı bölgenizdeki anonim fiyat aralıklarıyla karşılaştırın",
      description: "Pazar araştırmanızı otomatikleştirin.",
    },
    {
      number: "04",
      icon: ShoppingCart,
      title: "Ekibinizle satın alma listesi oluşturup tek tıkla birden fazla sipariş verin",
      description: "Boğucu WhatsApp gruplarından kurtulun.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 0.3,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.1,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -90 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  const bannerVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.8,
      },
    },
  };

  return (
    <section className="py-16 lg:py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Nasıl Çalışır?</h2>
          <p className="text-lg text-muted-foreground">
            Tedaarik size 4 basit ve otomatik adımda zaman ve para tasarrufu sağlar
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
              className="glass-card rounded-2xl p-8 space-y-6 relative group cursor-pointer overflow-hidden"
            >
              {/* Step Number */}
              <motion.div
                className="text-6xl font-bold text-highlight/30 absolute top-4 right-4"
                variants={numberVariants}
                whileHover={{
                  scale: 1.1,
                  opacity: 0.5,
                  transition: { duration: 0.3 }
                }}
              >
                {step.number}
              </motion.div>

              {/* Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-muted group-hover:bg-accent/10 transition-colors duration-300"
                variants={iconVariants}
                whileHover={{
                  rotate: [0, -10, 10, -5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <step.icon className="h-8 w-8 text-accent" />
              </motion.div>

              {/* Content */}
              <div className="space-y-3 relative z-10">
                <motion.h3
                  className="text-base font-bold leading-tight text-foreground group-hover:text-accent transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {step.title}
                </motion.h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting line between steps (for larger screens) */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent/30"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.4 }}
                  style={{ originX: 0 }}
                />
              )}

              {/* Hover gradient effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Result Banner */}
        <motion.div
          className="max-w-4xl mx-auto mt-16 glass-card-strong rounded-2xl p-8 text-center space-y-4 overflow-hidden"
          variants={bannerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover={{
            scale: 1.01,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
        >
          <motion.p
            className="text-2xl font-bold text-accent"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Sonuç:{" "}
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 1.2, duration: 0.4 }}
            >
              %80'e varan zaman
            </motion.span>{" "}
            ve{" "}
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 1.4, duration: 0.4 }}
            >
              %20'ye varan para tasarrufu
            </motion.span>
          </motion.p>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            Tedaarik, tedarik sürecinizin her adımını otomatikleştirir ve size sadece stratejik kararlar almanız için
            zaman kazandırır. Artık faturalarla uğraşmak yerine, işinizi büyütmeye odaklanın.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

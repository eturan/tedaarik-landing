import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Clock, Banknote, Percent } from "lucide-react";

const ActiveRegions = () => {
  const [activeTab, setActiveTab] = useState("istanbul");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const regions = [
    { id: "istanbul", name: "İstanbul" },
    { id: "ankara", name: "Ankara" },
    { id: "izmir", name: "Yakında: İzmir" },
    { id: "antalya", name: "Yakında: Antalya" },
  ];

  const stats = [
    {
      icon: Clock,
      value: "5 dk",
      label: "Kurulum Süresi",
    },
    {
      icon: Banknote,
      value: "1 Ay",
      label: "Ücretsiz Deneme",
    },
    {
      icon: Percent,
      value: "%20",
      label: "Ortalama Tasarruf",
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
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

  return (
    <section className="py-16 lg:py-20 relative bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={headerVariants}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
              >
                <MapPin className="h-4 w-4" />
              </motion.div>
              <span>Şu Anda Aktif Bölgeler</span>
            </motion.div>
            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Bölgeniz listede yoksa bile erken erişim talebinizi yapın. Yeni bölgeler talep yoğunluğuna göre açılıyor.
            </motion.p>
          </motion.div>

          {/* Region Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {regions.map((region, index) => (
              <motion.button
                key={region.id}
                onClick={() => setActiveTab(region.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === region.id
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "glass-card hover:bg-white/90"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
              >
                {region.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="glass-card-strong rounded-2xl p-8 text-center space-y-4 cursor-pointer group"
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mx-auto group-hover:bg-accent/20 transition-colors duration-300"
                  variants={iconVariants}
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <stat.icon className="h-8 w-8" />
                </motion.div>
                <div>
                  <motion.p
                    className="text-4xl font-bold text-foreground mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{
                      delay: 0.7 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                  >
                    {stat.value}
                  </motion.p>
                  <motion.p
                    className="text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {stat.label}
                  </motion.p>
                </div>

                {/* Hover gradient effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ActiveRegions;

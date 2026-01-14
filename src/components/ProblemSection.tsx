import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, TrendingDown, Database } from "lucide-react";

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const problems = [
    {
      icon: Clock,
      title: "Zaman Kaybı",
      headline: "Fatura dijitalleştirme ve tedarik süreci yönetimi her ay onlarca saatinizi ve enerjinizi çalıyor.",
      description:
        "Tedaarik, faturaları dijitalleştirir ve tedarik süreci yönetimini otomatikleştirerek size zaman kazandırır",
    },
    {
      icon: TrendingDown,
      title: "Zahmetli Tedarik",
      headline: "Uygun tedarikçi, ürün ve fiyat araştırmak son derece zahmetli",
      description:
        "Tedaarik, pazar araştırmanızı otomatikleştirerek yüzlerce tedarikçi ve ürün içinden size en uygun olanları bularak maliyetten tasarruf ettirir",
    },
    {
      icon: Database,
      title: "Kullanılmayan Veri",
      headline: "Veriler depolanıyor ama işletmenize yarayan bilgiye dönüşmüyor",
      description:
        "Tedaarik, faturalarınızdan yola çıkarak işletmenize özel analizler yapar ve bu sayede eyleme geçirilebilir öneriler sunarak işletmenize değer katar",
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
    hidden: { opacity: 0, y: 40, scale: 0.95 },
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
    <section id="problem-section" className="py-16 lg:py-24 relative">
      {/* Gradient overlay for smooth transition from Hero section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Her ay yüzlerce fatura alıyoruz <br /> ama fatura bilgilerinden{" "}
            <motion.span
              className="text-accent inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              faydalanmıyoruz.
            </motion.span>
          </h2>
        </motion.div>

        {/* Problem Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
              className="glass-card-strong rounded-2xl p-8 space-y-6 cursor-pointer group"
            >
              <motion.div
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-highlight/20 text-accent group-hover:bg-accent/20 transition-colors duration-300"
                variants={iconVariants}
                whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <problem.icon className="h-7 w-7" />
              </motion.div>
              <div className="space-y-4">
                <motion.h3
                  className="text-xl font-bold text-accent"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {problem.title}
                </motion.h3>
                <p className="text-base font-bold text-foreground leading-relaxed group-hover:text-foreground/90 transition-colors">
                  {problem.headline}
                </p>
                <motion.p
                  className="text-sm text-muted-foreground leading-relaxed font-normal"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  {problem.description}
                </motion.p>
              </div>

              {/* Hover gradient effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={{ opacity: 0 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;

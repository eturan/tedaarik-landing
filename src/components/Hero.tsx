import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { ArrowRight, CheckCircle, Calculator } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { trackStartTrial } from '@/lib/meta-pixel';
import heroImageEn from '@/assets/hero-dashboard.png';
import heroImageTr from '@/assets/hero-dashboard-tr.png';

export function Hero() {
  const { t, language } = useLanguage();
  const heroImage = language === 'tr' ? heroImageTr : heroImageEn;

  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-[#158F86]/10 border border-[#158F86]/20 rounded-full px-4 py-1.5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-[#158F86] animate-pulse"></span>
              <span className="text-[#3B3B3B] text-sm font-medium">
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-[#3B3B3B] leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t.hero.title} <br />
              <span className="text-[#158F86]">{t.hero.titleHighlight}</span>
            </motion.h1>

            <motion.p
              className="text-xl text-[#3B3B3B]/80 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.a
                href={`https://app.tedaarik.com/signup?lang=${language}`}
                onClick={() => trackStartTrial()}
                className="bg-[#158F86] text-white px-8 py-4 rounded-xl hover:bg-[#117A71] transition-all shadow-lg hover:shadow-[#158F86]/20 flex items-center justify-center gap-2 group font-semibold text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.hero.startTrial}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.button
                onClick={scrollToCalculator}
                className="bg-white text-[#3B3B3B] border-2 border-gray-200 px-8 py-4 rounded-xl hover:border-[#158F86] hover:text-[#158F86] transition-colors flex items-center justify-center gap-2 font-semibold text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calculator className="h-5 w-5" />
                {t.hero.estimateSavings}
              </motion.button>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 text-sm text-[#3B3B3B]/60 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#158F86]" />
                <span>{t.hero.noCreditCard}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#158F86]" />
                <span>{t.hero.setupFast}</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 aspect-[4/3]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ImageWithFallback
                src={heroImage}
                alt={t.hero.imageAlt}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="absolute top-4 left-4 right-4 bottom-4 bg-gray-200/40 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

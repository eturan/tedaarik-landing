import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { ArrowRight, CheckCircle, Calculator } from 'lucide-react';
import { motion } from 'framer-motion';
import { useBLanguage } from '@/hooks/useBLanguage';
import { trackStartTrial } from '@/lib/meta-pixel';
import { trackSignupCtaClicked } from '@/lib/posthog';
import { buildSignupUrl } from '@/lib/utm';
import heroImageEn from '@/assets/hero-dashboard.png';
import heroImageTr from '@/assets/hero-dashboard-tr.png';

export function HeroB() {
  const { t, language } = useBLanguage();
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
              className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 rounded-full px-4 py-1.5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              <span className="text-[#3B3B3B] text-sm font-medium">
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3B3B3B] leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t.hero.headline}
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-[#3B3B3B]/80 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              className="flex flex-col gap-3 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex flex-col gap-3">
                <motion.button
                  type="button"
                  onClick={scrollToCalculator}
                  className="w-full sm:w-auto bg-rose-500 text-white px-8 py-4 rounded-xl hover:bg-rose-600 transition-all shadow-lg hover:shadow-rose-500/25 flex items-center justify-center gap-2 font-bold text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Calculator className="h-5 w-5 shrink-0" />
                  {t.hero.estimateSavings}
                </motion.button>

                <div className="flex items-center gap-3">
                  <motion.a
                    href={buildSignupUrl(`https://app.tedaarik.com/signup?lang=${language}`)}
                    onClick={() => { trackStartTrial(); trackSignupCtaClicked('hero', 'b'); }}
                    className="text-[#158F86] font-semibold hover:text-[#117A71] transition-colors flex items-center gap-1.5 group"
                    whileHover={{ x: 2 }}
                  >
                    {t.hero.startTrial}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform shrink-0" />
                  </motion.a>
                  <span className="text-[#3B3B3B]/30">—</span>
                  <span className="text-sm text-[#3B3B3B]/50">{t.hero.noCreditCard}</span>
                </div>
              </div>

              <p className="text-sm text-[#3B3B3B]/50 max-w-xl leading-snug">
                {t.hero.trustLine}
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 text-sm text-[#3B3B3B]/60 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
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

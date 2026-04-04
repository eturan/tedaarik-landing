import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { trackStartTrial } from '@/lib/meta-pixel';

export function CTA() {
  const { t, language } = useLanguage();

  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#158F86]/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#158F86]/10 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-[#3B3B3B] mb-6 whitespace-pre-line"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t.cta.title}
        </motion.h2>
        <motion.p
          className="text-xl text-[#3B3B3B]/80 mb-10 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t.cta.subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a
            href={`https://app.tedaarik.com/signup?lang=${language}`}
            onClick={() => trackStartTrial()}
            className="bg-[#158F86] text-white px-8 py-4 rounded-xl hover:bg-[#117A71] transition-all font-bold text-lg shadow-lg flex items-center justify-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.cta.startTrial}
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.button
            onClick={scrollToCalculator}
            className="bg-rose-500 text-white px-8 py-4 rounded-xl hover:bg-rose-600 transition-all font-semibold text-lg shadow-lg hover:shadow-rose-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.cta.estimate}
          </motion.button>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-8 text-[#3B3B3B]/60 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-[#158F86]" />
            <span>{t.cta.noCreditCard}</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-[#158F86]" />
            <span>{t.cta.setupFast}</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-[#158F86]" />
            <span>{t.cta.cancel}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;

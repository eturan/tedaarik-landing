import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Pricing() {
  const { t, language } = useLanguage();
  const price = language === 'tr' ? '₺1.400' : '$30';
  const originalPrice = language === 'tr' ? '₺2.800' : '$60';

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#3B3B3B] mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-xl text-[#3B3B3B]/60">
            {t.pricing.subtitle}
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full border border-gray-100 relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#158F86] to-[#117A71]"></div>

            <div className="mb-8 text-center border-b border-gray-100 pb-8">
              <div className="inline-block bg-[#158F86]/10 text-[#158F86] text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider mb-4">
                {t.pricing.limitedOffer}
              </div>
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-6xl font-bold text-[#3B3B3B] tracking-tight">{price}</span>
                <span className="text-[#3B3B3B]/40 text-2xl line-through font-medium">{originalPrice}</span>
              </div>
              <div className="text-[#3B3B3B]/60 font-medium mb-1">
                {t.pricing.perMonth} +{language === 'tr' ? 'KDV' : 'VAT'}
              </div>
              <p className="text-sm text-[#158F86] font-medium mt-2">
                {t.pricing.saveOffer}
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              {t.pricing.features.map((feature: string, index: number) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  <div className="bg-[#158F86]/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-[#158F86]" />
                  </div>
                  <span className="text-[#3B3B3B]/90 font-medium">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="https://app.tedaarik.com/signup"
              className="w-full bg-[#158F86] text-white py-4 px-6 rounded-xl font-bold hover:bg-[#117A71] hover:ring-4 hover:ring-[#158F86]/30 transition-all shadow-lg hover:shadow-[#158F86]/40 flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.pricing.startTrial}
              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
            </motion.a>
            <p className="text-xs text-center text-[#3B3B3B]/40 mt-4">
              {t.pricing.note}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;

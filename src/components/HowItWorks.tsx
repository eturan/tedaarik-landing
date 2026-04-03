import { motion } from 'framer-motion';
import { Upload, ScanSearch, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function HowItWorks() {
  const { t } = useLanguage();

  const mainSteps = [
    { icon: Upload, title: t.howItWorks.step1.title, desc: t.howItWorks.step1.desc, step: 1 },
    { icon: ScanSearch, title: t.howItWorks.step2.title, desc: t.howItWorks.step2.desc, step: 2 },
    { icon: ShieldCheck, title: t.howItWorks.step3.title, desc: t.howItWorks.step3.desc, step: 3 },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#EEEEEE]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#3B3B3B] mb-4">
            {t.howItWorks.title}
          </h2>
          <p className="text-xl text-[#3B3B3B]/80 max-w-3xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
            {mainSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="relative bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="bg-[#158F86]/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="h-8 w-8 text-[#158F86]" />
                  </motion.div>

                  <h3 className="text-base font-semibold text-[#3B3B3B] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#3B3B3B]/70 leading-relaxed">
                    {step.desc}
                  </p>

                  {index < mainSteps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 left-full transform -translate-y-1/2 w-16 items-center justify-center text-[#158F86] z-10">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.p
          className="text-center text-[#3B3B3B]/60 italic mt-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t.howItWorks.footer}
        </motion.p>
      </div>
    </section>
  );
}

export default HowItWorks;

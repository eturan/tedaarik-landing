import { motion } from 'framer-motion';
import { Upload, ChefHat, Scale, LayoutDashboard, FileText, Users, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function HowItWorks() {
  const { t } = useLanguage();

  const mainSteps = [
    { icon: Upload, title: t.howItWorks.steps[0], step: 1 },
    { icon: ChefHat, title: t.howItWorks.steps[1], step: 2 },
    { icon: Scale, title: t.howItWorks.steps[2], step: 3 },
  ];

  const sideBenefits = [
    { icon: LayoutDashboard, title: t.howItWorks.benefits[0] },
    { icon: FileText, title: t.howItWorks.benefits[1] },
    { icon: Users, title: t.howItWorks.benefits[2] },
    { icon: Clock, title: t.howItWorks.benefits[3] },
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

        {/* Main UX Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 max-w-5xl mx-auto">
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

                  <h3 className="text-base font-semibold text-[#3B3B3B]">
                    {step.title}
                  </h3>

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

        {/* Side Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="border-t border-gray-300 pt-12">
            <h3 className="text-2xl font-bold text-[#3B3B3B] text-center mb-8">
              {t.howItWorks.benefitsTitle}
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {sideBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                  >
                    <motion.div
                      className="bg-[#158F86]/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="h-6 w-6 text-[#158F86]" />
                    </motion.div>
                    <p className="text-sm font-medium text-[#3B3B3B]">
                      {benefit.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks;

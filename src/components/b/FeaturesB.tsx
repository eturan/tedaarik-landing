import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { ScanLine, Calculator, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useBLanguage } from '@/hooks/useBLanguage';
import costAnalysisEn from '@/assets/feature-cost-analysis.png';
import recipeCostEn from '@/assets/feature-recipe-cost.png';
import priceComparisonEn from '@/assets/feature-price-comparison.png';
import costAnalysisTr from '@/assets/feature-cost-analysis-tr.png';
import recipeCostTr from '@/assets/feature-recipe-cost-tr.png';
import priceComparisonTr from '@/assets/feature-price-comparison-tr.png';

export function FeaturesB() {
  const { t, language } = useBLanguage();
  const isTr = language === 'tr';
  const costAnalysisImage = isTr ? costAnalysisTr : costAnalysisEn;
  const recipeCostImage = isTr ? recipeCostTr : recipeCostEn;
  const priceComparisonImage = isTr ? priceComparisonTr : priceComparisonEn;

  const features = [
    {
      icon: ScanLine,
      title: t.features.f1.title,
      description: t.features.f1.desc,
      benefits: [
        t.features.f1.li1,
        t.features.f1.li2,
        t.features.f1.li3,
      ],
      image: costAnalysisImage,
    },
    {
      icon: Calculator,
      title: t.features.f2.title,
      description: t.features.f2.desc,
      benefits: [
        t.features.f2.li1,
        t.features.f2.li2,
        t.features.f2.li3,
      ],
      image: recipeCostImage,
    },
    {
      icon: TrendingDown,
      title: t.features.f3.title,
      description: t.features.f3.desc,
      benefits: [
        t.features.f3.li1,
        t.features.f3.li2,
        t.features.f3.li3,
      ],
      image: priceComparisonImage,
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#3B3B3B] mb-4">
            {t.features.title}
          </h2>
          <p className="text-xl text-[#3B3B3B]/80 max-w-3xl mx-auto">
            {t.features.subtitle}
          </p>
        </motion.div>

        <div className="space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                <motion.div
                  className={isEven ? '' : 'lg:col-start-2'}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="bg-[#158F86]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="h-7 w-7 text-[#158F86]" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-[#3B3B3B] mb-4">{feature.title}</h3>
                  <p className="text-lg text-[#3B3B3B]/80 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <motion.li
                        key={benefitIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: benefitIndex * 0.1 }}
                      >
                        <div className="bg-[#158F86]/10 rounded-full p-1 mt-0.5">
                          <svg className="h-4 w-4 text-[#158F86]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[#3B3B3B]/90">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ImageWithFallback
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            onClick={() => {
              document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-rose-500 text-white px-6 py-3 rounded-xl hover:bg-rose-600 transition-all shadow-lg hover:shadow-rose-500/25 font-semibold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Calculator className="h-5 w-5" />
            {t.features.cta}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

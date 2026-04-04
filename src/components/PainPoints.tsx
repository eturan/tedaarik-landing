import { Clock, Shuffle, Calculator, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export function PainPoints() {
  const { t } = useLanguage();

  const painPoints = [
    {
      icon: Clock,
      title: t.painPoints.point1.title,
      subtitle: t.painPoints.point1.subtitle,
      points: [
        t.painPoints.point1.li1,
        t.painPoints.point1.li2,
      ],
    },
    {
      icon: Shuffle,
      title: t.painPoints.point2.title,
      subtitle: t.painPoints.point2.subtitle,
      points: [
        t.painPoints.point2.li1,
        t.painPoints.point2.li2,
      ],
    },
    {
      icon: Calculator,
      title: t.painPoints.point3.title,
      subtitle: t.painPoints.point3.subtitle,
      points: [
        t.painPoints.point3.li1,
        t.painPoints.point3.li2,
      ],
    },
  ];

  return (
    <section id="pain-points" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#3B3B3B] mb-4">
            {t.painPoints.title}
          </h2>
          <p className="text-xl text-[#3B3B3B]/80 max-w-3xl mx-auto">
            {t.painPoints.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-[#158F86]/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-[#158F86]" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#3B3B3B] mb-2">{point.title}</h3>
                <p className="text-sm text-[#3B3B3B]/80 font-medium mb-3 leading-relaxed">{point.subtitle}</p>
                <ul className="space-y-2">
                  {point.points.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-[#3B3B3B]/70 flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#4FB4B0] flex-shrink-0 mt-[0.4rem]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-xl font-semibold text-[#3B3B3B] mb-4">
            {t.painPoints.bridge}
          </p>
          <motion.button
            onClick={() => {
              document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-rose-500 text-white px-6 py-3 rounded-xl hover:bg-rose-600 transition-all shadow-lg hover:shadow-rose-500/25 font-semibold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.painPoints.bridgeCta}
            <ArrowDown className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default PainPoints;

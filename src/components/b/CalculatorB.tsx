import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, Sandwich, Coffee, Flame, Utensils, Store, Croissant } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBLanguage } from '@/hooks/useBLanguage';
import { trackStartTrial, trackCalculatorStartedPixel, trackLead } from '@/lib/meta-pixel';
import { trackCalculatorStarted, trackCalculatorEmailSubmitted, trackSignupCtaClicked } from '@/lib/posthog';
import { buildSignupUrl } from '@/lib/utm';

const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/jm4jc6uu1fzm64b3cwymis8g81dh6yow";

const iconMap = {
  fast_food: Sandwich,
  cafe: Coffee,
  kebap: Flame,
  restaurant: Utensils,
  esnaf: Store,
  bakery: Croissant,
};

const rangeConfig = {
  en: { min: 10000, max: 250000, step: 5000, default: 130000 },
  tr: { min: 100000, max: 5000000, step: 100000, default: 2500000 },
};

const CUISINE_TYPES = [
  { id: 'fast_food', tr: 'Fast Food (Burger, Döner)', en: 'Fast Food', cogs: 0.29 },
  { id: 'cafe', tr: 'Kafe / Kahve', en: 'Cafe / Coffee Shop', cogs: 0.30 },
  { id: 'kebap', tr: 'Kebapçı / Ocakbaşı', en: 'Kebab / Grill', cogs: 0.38 },
  { id: 'restaurant', tr: 'Restoran / Dünya Mutfağı', en: 'Restaurant', cogs: 0.33 },
  { id: 'esnaf', tr: 'Esnaf Lokantası / Büfe', en: 'Traditional / Buffet', cogs: 0.34 },
  { id: 'bakery', tr: 'Pastane / Unlu Mamul', en: 'Bakery', cogs: 0.28 },
] as const;

type CuisineType = typeof CUISINE_TYPES[number];

export function CalculatorB() {
  const { t, language } = useBLanguage();
  const config = rangeConfig[language];

  const [step, setStep] = useState(1);
  const [monthlyRevenue, setMonthlyRevenue] = useState(config.default);
  const [selectedCuisine, setSelectedCuisine] = useState<CuisineType | null>(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const advanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMonthlyRevenue(rangeConfig[language].default);
  }, [language]);

  useEffect(() => {
    return () => {
      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    };
  }, []);

  const estimatedSpend = selectedCuisine ? monthlyRevenue * selectedCuisine.cogs : 0;
  const totalMonthlyLeak = estimatedSpend * 0.20;
  const yearlyLeak = totalMonthlyLeak * 12;
  const leakBreakdown = {
    overpayment: estimatedSpend * 0.13,
    waste: estimatedSpend * 0.05,
    admin: estimatedSpend * 0.02,
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleCuisineSelect = (cuisine: CuisineType) => {
    setSelectedCuisine(cuisine);
    trackCalculatorStarted('b');
    trackCalculatorStartedPixel();
    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    advanceTimerRef.current = setTimeout(() => setStep(2), 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCuisine) return;
    setIsSubmitting(true);

    try {
      const payload = {
        monthlyRevenue,
        cuisineId: selectedCuisine.id,
        cuisineLabel: selectedCuisine.tr,
        estimatedSpend: Math.round(estimatedSpend),
        monthlyLeak: Math.round(totalMonthlyLeak),
        yearlyLeak: Math.round(yearlyLeak),
        leakOverpayment: Math.round(leakBreakdown.overpayment),
        leakWaste: Math.round(leakBreakdown.waste),
        leakAdmin: Math.round(leakBreakdown.admin),
        email: email.trim(),
        language,
        variant: 'b',
      };

      await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      trackCalculatorEmailSubmitted({
        email,
        variant: 'b',
        monthly_revenue: monthlyRevenue,
        cuisine_id: selectedCuisine.id,
        estimated_spend: estimatedSpend,
        monthly_leak: totalMonthlyLeak,
        yearly_leak: yearlyLeak,
      });
      trackLead({ content_name: 'calculator_b' });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Calculator submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="calculator" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3B3B3B] mb-4">
            {t.calculator.title}
          </h2>
          <p className="text-lg text-[#3B3B3B]/80 max-w-2xl mx-auto">
            {t.calculator.subtitle}
          </p>
          <p className="text-sm text-[#158F86] font-medium mt-3">
            {t.calculator.socialProof}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative min-h-[500px] flex flex-col">
          <div className="h-1.5 bg-gray-100 w-full">
            <motion.div
              className="h-full bg-[#158F86]"
              initial={{ width: "33%" }}
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="p-6 md:p-10 flex-grow flex flex-col justify-center">
            <AnimatePresence mode="wait">

              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#3B3B3B] mb-2">{t.calculator.step1.title}</h3>
                    <p className="text-[#3B3B3B]/60">{t.calculator.step1.desc}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
                    {CUISINE_TYPES.map((cuisine) => {
                      const Icon = iconMap[cuisine.id];
                      const isSelected = selectedCuisine?.id === cuisine.id;
                      return (
                        <button
                          key={cuisine.id}
                          onClick={() => handleCuisineSelect(cuisine)}
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                            isSelected
                              ? 'border-[#158F86] bg-[#158F86]/5 shadow-md -translate-y-1'
                              : 'border-slate-200 bg-white opacity-80 hover:opacity-100 hover:border-slate-300'
                          }`}
                        >
                          <Icon className={`h-6 w-6 shrink-0 transition-colors ${isSelected ? 'text-[#158F86]' : 'text-[#3B3B3B]/40'}`} />
                          <span className={`text-sm font-medium transition-colors ${isSelected ? 'text-[#158F86]' : 'text-[#3B3B3B]'}`}>
                            {cuisine[language]}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#3B3B3B] mb-2">{t.calculator.step2.title}</h3>
                    <p className="text-[#3B3B3B]/60">{t.calculator.step2.desc}</p>
                  </div>

                  <div className="max-w-md mx-auto w-full pt-8 pb-4">
                    <div className="relative mb-8">
                      <div className="text-center">
                        <span className="text-5xl font-bold text-[#158F86]">
                          {t.calculator.currency}{monthlyRevenue.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <input
                      type="range"
                      min={config.min}
                      max={config.max}
                      step={config.step}
                      value={monthlyRevenue}
                      onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                      className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#158F86] hover:accent-[#117A71] transition-all"
                    />
                    <div className="flex justify-between text-xs text-[#3B3B3B]/40 mt-2 font-medium">
                      <span>{t.calculator.step2.rangeMin}</span>
                      <span>{t.calculator.step2.rangeMax}</span>
                    </div>
                  </div>

                  <div className="flex justify-center gap-4 pt-4">
                    <button
                      onClick={handleBack}
                      className="text-[#3B3B3B]/60 hover:text-[#3B3B3B] px-6 py-3 font-medium flex items-center gap-2 transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                      {t.calculator.step2.back}
                    </button>
                    <button
                      onClick={handleNext}
                      className="bg-[#158F86] text-white px-8 py-3 rounded-xl hover:bg-[#117A71] transition-colors font-medium text-lg flex items-center gap-2 group shadow-lg shadow-[#158F86]/20"
                    >
                      {t.calculator.step2.next}
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  {!isSubmitted ? (
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 h-full items-start">
                      <div className="space-y-5">
                        <div>
                          <button
                            onClick={handleBack}
                            className="text-[#3B3B3B]/60 hover:text-[#3B3B3B] text-sm font-medium flex items-center gap-1 transition-colors mb-3"
                          >
                            <ChevronLeft className="h-4 w-4" />
                            {t.calculator.step2.back}
                          </button>
                        </div>

                        <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                          <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">
                            {t.calculator.step3.leakLabel}
                          </span>
                          <div className="text-4xl font-bold text-red-600 mt-1">
                            {t.calculator.currency}{Math.round(totalMonthlyLeak).toLocaleString()}
                          </div>
                          <div className="text-sm text-red-600/70 mt-2 font-medium">
                            {t.calculator.step3.yearlyLeakLabel}: {t.calculator.currency}{Math.round(yearlyLeak).toLocaleString()}
                          </div>
                        </div>

                        <div className="space-y-2 px-1">
                          <div className="flex justify-between text-sm text-gray-600">
                            <span>{t.calculator.step3.breakdownOverpayment}</span>
                            <span className="font-medium">{t.calculator.currency}{Math.round(leakBreakdown.overpayment).toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm text-gray-600">
                            <span>{t.calculator.step3.breakdownWaste}</span>
                            <span className="font-medium">{t.calculator.currency}{Math.round(leakBreakdown.waste).toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm text-gray-600">
                            <span>{t.calculator.step3.breakdownAdmin}</span>
                            <span className="font-medium">{t.calculator.currency}{Math.round(leakBreakdown.admin).toLocaleString()}</span>
                          </div>
                        </div>

                        <p className="text-xs text-gray-400 leading-relaxed">
                          {t.calculator.step3.disclaimer}
                        </p>
                      </div>

                      <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100">
                        <h4 className="text-lg font-bold text-[#3B3B3B] mb-4">{t.calculator.step3.emailTitle}</h4>
                        <p className="text-sm text-[#3B3B3B]/80 mb-6">
                          {t.calculator.step3.emailDesc}
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-[#3B3B3B] mb-1">
                              {t.calculator.step3.emailLabel}
                            </label>
                            <input
                              type="email"
                              id="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                              placeholder={t.calculator.step3.emailPlaceholder}
                            />
                          </div>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
                          >
                            {isSubmitting ? t.calculator.step3.sending : t.calculator.step3.sendBtn}
                            {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                          </button>
                          <p className="text-xs text-center text-[#3B3B3B]/60 mt-3 leading-relaxed">
                            {t.calculator.step3.emailNote}
                          </p>
                        </form>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 flex flex-col items-center justify-center h-full">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6"
                      >
                        <ArrowRight className="h-10 w-10 text-red-600" />
                      </motion.div>
                      <h3 className="text-3xl font-bold text-[#3B3B3B] mb-4">{t.calculator.step3.successTitle}</h3>
                      <p className="text-xl text-[#3B3B3B]/80 max-w-md mx-auto mb-8">
                        {t.calculator.step3.successDesc1}<strong>{email}</strong>.
                      </p>

                      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 max-w-md w-full">
                        <p className="text-[#3B3B3B] font-medium mb-4">{t.calculator.step3.successActionDesc}</p>
                        <a
                          href={buildSignupUrl(`https://app.tedaarik.com/signup?lang=${language}`)}
                          onClick={() => { trackStartTrial(); trackSignupCtaClicked('calculator', 'b'); }}
                          className="block w-full bg-red-600 text-white px-8 py-3 rounded-xl hover:bg-red-700 transition-colors font-medium text-lg shadow-lg text-center"
                        >
                          {t.calculator.step3.startTrialBtn}
                        </a>
                        <p className="text-xs text-[#3B3B3B]/60 mt-3">
                          {t.calculator.step3.trialNote}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

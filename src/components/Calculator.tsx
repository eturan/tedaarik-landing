import { useState } from 'react';
import { DollarSign, Clock, CheckCircle2, ArrowRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { capture } from '@/lib/posthog';

const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/d18s1dnp5ayjgdjquypynu6i21vxobw5";

export function Calculator() {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [invoices, setInvoices] = useState(250);
  const [monthlyVolume, setMonthlyVolume] = useState(10000);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calculate potential savings
  const savingsRate = 0.20;
  const monthlySavings = monthlyVolume * savingsRate;
  const yearlySavings = monthlySavings * 12;
  const timePerInvoice = 10;
  const checkTimePerInvoice = 1;
  const timeSavedPerInvoice = timePerInvoice - checkTimePerInvoice;
  const monthlyTimeSavedMinutes = invoices * timeSavedPerInvoice;
  const monthlyTimeSavedHours = monthlyTimeSavedMinutes / 60;
  const yearlyTimeSavedHours = monthlyTimeSavedHours * 12;

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-make-apikey": "tedaarik-masked-api-key-value",
        },
        body: JSON.stringify({
          email,
          invoices,
          monthlyVolume,
          yearlySavings,
          yearlyTimeSavedHours: Math.round(yearlyTimeSavedHours),
          source: "calculator",
        }),
      });

      capture('calculator_email_submitted', {
        email,
        invoices,
        monthly_volume: monthlyVolume,
        yearly_savings: yearlySavings,
      });

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
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative min-h-[500px] flex flex-col">
          {/* Progress Bar */}
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

                  <div className="max-w-md mx-auto w-full pt-8 pb-4">
                    <div className="relative mb-8">
                      <div className="text-center">
                        <span className="text-5xl font-bold text-[#158F86]">{invoices}</span>
                        <span className="text-[#3B3B3B]/40 ml-2 text-lg">{t.calculator.step1.invoices}</span>
                      </div>
                    </div>

                    <input
                      type="range"
                      min="10"
                      max="500"
                      step="10"
                      value={invoices}
                      onChange={(e) => setInvoices(Number(e.target.value))}
                      className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#158F86] hover:accent-[#117A71] transition-all"
                    />
                    <div className="flex justify-between text-xs text-[#3B3B3B]/40 mt-2 font-medium">
                      <span>10</span>
                      <span>500+</span>
                    </div>
                  </div>

                  <div className="flex justify-center pt-4">
                    <button
                      onClick={handleNext}
                      className="bg-[#158F86] text-white px-8 py-3 rounded-xl hover:bg-[#117A71] transition-colors font-medium text-lg flex items-center gap-2 group"
                    >
                      {t.calculator.step1.next}
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
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
                        <span className="text-5xl font-bold text-[#158F86]">{t.calculator.currency}{monthlyVolume.toLocaleString()}</span>
                        <span className="text-[#3B3B3B]/40 ml-2 text-lg">{t.calculator.step2.month}</span>
                      </div>
                    </div>

                    <input
                      type="range"
                      min="1000"
                      max="20000"
                      step="500"
                      value={monthlyVolume}
                      onChange={(e) => setMonthlyVolume(Number(e.target.value))}
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
                      {t.calculator.step2.calculate}
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
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 h-full items-center">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold text-[#3B3B3B] mb-2">{t.calculator.step3.title}</h3>
                          <p className="text-[#3B3B3B]/80">{t.calculator.step3.basedOn1}{invoices}{t.calculator.step3.basedOn2}{monthlyVolume.toLocaleString()}{t.calculator.step3.basedOn3}</p>
                        </div>

                        <div className="bg-[#158F86]/10 rounded-xl p-6 border border-[#158F86]/20">
                          <div className="flex items-center gap-3 mb-2">
                            <DollarSign className="h-5 w-5 text-[#158F86]" />
                            <span className="text-sm font-semibold text-[#158F86] uppercase tracking-wider">{t.calculator.step3.annualSavings}</span>
                          </div>
                          <div className="text-4xl font-bold text-[#3B3B3B]">
                            {t.calculator.currency}{yearlySavings.toLocaleString()}
                          </div>
                          <div className="text-sm text-[#158F86] mt-1 font-medium">
                            {t.calculator.step3.extraProfit}{monthlySavings.toLocaleString()}{t.calculator.step3.extraProfit2}
                          </div>
                        </div>

                        <div className="bg-gray-100 rounded-xl p-6 border border-gray-200">
                          <div className="flex items-center gap-3 mb-2">
                            <Clock className="h-5 w-5 text-[#3B3B3B]" />
                            <span className="text-sm font-semibold text-[#3B3B3B] uppercase tracking-wider">{t.calculator.step3.timeReclaimed}</span>
                          </div>
                          <div className="text-4xl font-bold text-[#3B3B3B]">
                            {Math.round(yearlyTimeSavedHours)}{t.calculator.step3.hours}
                          </div>
                          <div className="text-sm text-[#3B3B3B]/80 mt-1 font-medium">
                            ~{Math.round(monthlyTimeSavedHours)}{t.calculator.step3.hoursSaved}
                          </div>
                        </div>
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
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#158F86] focus:border-[#158F86] outline-none transition-all"
                              placeholder={t.calculator.step3.emailPlaceholder}
                            />
                          </div>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#158F86] text-white px-6 py-3 rounded-lg hover:bg-[#117A71] transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
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
                        className="w-20 h-20 bg-[#158F86]/10 rounded-full flex items-center justify-center mb-6"
                      >
                        <CheckCircle2 className="h-10 w-10 text-[#158F86]" />
                      </motion.div>
                      <h3 className="text-3xl font-bold text-[#3B3B3B] mb-4">{t.calculator.step3.successTitle}</h3>
                      <p className="text-xl text-[#3B3B3B]/80 max-w-md mx-auto mb-8">
                        {t.calculator.step3.successDesc1}<strong>{email}</strong>.
                      </p>

                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 max-w-md w-full">
                        <p className="text-[#3B3B3B] font-medium mb-4">{t.calculator.step3.successActionDesc}</p>
                        <a
                          href="https://app.tedaarik.com/login"
                          className="block w-full bg-[#158F86] text-white px-8 py-3 rounded-xl hover:bg-[#117A71] transition-colors font-medium text-lg shadow-lg text-center"
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

export default Calculator;

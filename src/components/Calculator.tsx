import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator as CalcIcon, TrendingUp, ArrowRight, Info } from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const HOURLY_RATE = 300; // TL
const BASE_MARKET_DISCOUNT = 0.2; // Tedaarik market research discount = 20%
const SELF_DISCOUNT = 0.05; // Manual 10+ suppliers discount = 5%
const INVOICE_MIN_PER = 4; // minutes per invoice
const HIGH_COMPARISON_HOURS = 40; // 10+ suppliers
const LOW_COMPARISON_HOURS = 10; // <10 suppliers

// Animated counter component
const AnimatedNumber = ({
  value,
  duration = 1.5,
  prefix = "",
  suffix = ""
}: {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(easeOut * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
        setIsAnimating(false);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return (
    <span className={isAnimating ? "tabular-nums" : ""}>
      {prefix}{displayValue.toLocaleString("tr-TR")}{suffix}
    </span>
  );
};

const Calculator = () => {
  const [monthlySpend, setMonthlySpend] = useState("");
  const [invoiceCount, setInvoiceCount] = useState("");
  const [comparisonLevel, setComparisonLevel] = useState<"high" | "low">("low");
  const [showResult, setShowResult] = useState(false);
  const [errors, setErrors] = useState({ spend: "", invoice: "" });
  const [results, setResults] = useState({
    timeSavedMinutes: 0,
    timeSavedHours: 0,
    priceSaving: 0,
    laborSaving: 0,
    totalSaving: 0,
    percentage: 0,
  });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const formatNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (!numbers) return "";
    return Number(numbers).toLocaleString("tr-TR");
  };

  const parseFormattedNumber = (value: string) => {
    return value.replace(/\./g, "").replace(/,/g, ".");
  };

  const validateInputs = () => {
    const newErrors = { spend: "", invoice: "" };
    let isValid = true;

    const spendValue = parseFloat(parseFormattedNumber(monthlySpend));
    const invoiceValue = parseFloat(parseFormattedNumber(invoiceCount));

    if (!monthlySpend || isNaN(spendValue) || spendValue <= 0) {
      newErrors.spend = "Lütfen geçerli bir tutar girin";
      isValid = false;
    }
    if (!invoiceCount || isNaN(invoiceValue) || invoiceValue <= 0) {
      newErrors.invoice = "Lütfen geçerli bir sayı girin";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const calculateSavings = () => {
    if (!validateInputs()) return;

    const spend = parseFloat(parseFormattedNumber(monthlySpend));
    const count = parseFloat(parseFormattedNumber(invoiceCount));

    const invoiceTimeMinutes = count * INVOICE_MIN_PER;
    const marketResearchHours = comparisonLevel === "high" ? HIGH_COMPARISON_HOURS : LOW_COMPARISON_HOURS;

    const totalTimeHours = invoiceTimeMinutes / 60 + marketResearchHours;
    const totalTimeMinutes = Math.round(invoiceTimeMinutes + marketResearchHours * 60);

    const priceDiscount = comparisonLevel === "high" ? BASE_MARKET_DISCOUNT - SELF_DISCOUNT : BASE_MARKET_DISCOUNT;

    const priceSaving = Math.round(spend * priceDiscount);
    const laborSaving = Math.round(totalTimeHours * HOURLY_RATE);
    const totalSaving = priceSaving + laborSaving;

    setResults({
      timeSavedMinutes: totalTimeMinutes,
      timeSavedHours: totalTimeHours,
      priceSaving,
      laborSaving,
      totalSaving,
      percentage: Math.round(priceDiscount * 100),
    });

    setShowResult(true);
  };

  const scrollToEarlyAccess = () => {
    document.getElementById("early-access")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const resultVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="calculator" className="py-24 lg:py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Ne kadar{" "}
              <motion.span
                className="text-accent inline-block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                kâr kaybediyorsunuz?
              </motion.span>
            </h2>
            <p className="text-lg text-muted-foreground">
              İşletmenizin potansiyel tasarruf miktarını 30 saniyede öğrenin.
            </p>
          </motion.div>

          {/* Calculator Card */}
          <motion.div
            className="glass-card-strong rounded-3xl p-8 sm:p-12 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              {/* Monthly Spend */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Label htmlFor="monthly-spend" className="text-base font-semibold">
                  Aylık tedarik harcaması (₺)
                </Label>
                <motion.div whileFocus={{ scale: 1.01 }}>
                  <Input
                    id="monthly-spend"
                    type="text"
                    placeholder="Örn: 1.000.000"
                    value={monthlySpend}
                    onChange={(e) => {
                      const formatted = formatNumber(e.target.value);
                      setMonthlySpend(formatted);
                      setErrors({ ...errors, spend: "" });
                    }}
                    className={`h-14 text-lg rounded-xl border-2 bg-highlight-bg/50 transition-all duration-200 focus:ring-2 focus:ring-accent/30 ${
                      errors.spend ? "border-destructive" : "border-highlight-bg hover:border-accent/30"
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.spend}
                    aria-describedby={errors.spend ? "spend-error" : undefined}
                  />
                </motion.div>
                <AnimatePresence>
                  {errors.spend && (
                    <motion.p
                      id="spend-error"
                      className="text-sm text-destructive"
                      role="alert"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {errors.spend}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Invoice Count */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Label htmlFor="invoice-count" className="text-base font-semibold">
                  Aylık tedarik fatura sayısı
                </Label>
                <Input
                  id="invoice-count"
                  type="text"
                  placeholder="Örn: 150"
                  value={invoiceCount}
                  onChange={(e) => {
                    const formatted = formatNumber(e.target.value);
                    setInvoiceCount(formatted);
                    setErrors({ ...errors, invoice: "" });
                  }}
                  className={`h-14 text-lg rounded-xl border-2 bg-highlight-bg/50 transition-all duration-200 focus:ring-2 focus:ring-accent/30 ${
                    errors.invoice ? "border-destructive" : "border-highlight-bg hover:border-accent/30"
                  }`}
                  aria-required="true"
                  aria-invalid={!!errors.invoice}
                  aria-describedby={errors.invoice ? "invoice-error" : undefined}
                />
                <AnimatePresence>
                  {errors.invoice && (
                    <motion.p
                      id="invoice-error"
                      className="text-sm text-destructive"
                      role="alert"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {errors.invoice}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Procurement Process Selection */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Label className="text-base font-semibold">Şu anki tedarik süreciniz</Label>
                <RadioGroup
                  value={comparisonLevel}
                  onValueChange={(value: "high" | "low") => setComparisonLevel(value)}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Label
                      htmlFor="comparison-high"
                      className={`flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                        comparisonLevel === "high"
                          ? "border-accent bg-accent/5 shadow-sm"
                          : "border-border hover:border-accent/50 hover:bg-accent/5"
                      }`}
                    >
                      <RadioGroupItem value="high" id="comparison-high" />
                      <div className="text-sm font-medium cursor-pointer">
                        En az 10 tedarikçinin tekliflerini karşılaştırıyorum
                      </div>
                    </Label>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Label
                      htmlFor="comparison-low"
                      className={`flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                        comparisonLevel === "low"
                          ? "border-accent bg-accent/5 shadow-sm"
                          : "border-border hover:border-accent/50 hover:bg-accent/5"
                      }`}
                    >
                      <RadioGroupItem value="low" id="comparison-low" />
                      <div className="text-sm font-medium cursor-pointer">
                        10&apos;dan daha az tedarikçinin tekliflerini karşılaştırıyorum
                      </div>
                    </Label>
                  </motion.div>
                </RadioGroup>
              </motion.div>
            </div>

            {/* Calculate Button */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                onClick={calculateSavings}
                className="w-full glow-button bg-accent hover:bg-accent/90 text-accent-foreground text-sm sm:text-base lg:text-lg py-4 sm:py-6 rounded-xl font-semibold"
                aria-label="Tasarruf potansiyelini hesapla"
              >
                <CalcIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Tasarruf Potansiyelimi Hesapla
              </Button>
            </motion.div>

            {/* Result Display */}
            <AnimatePresence mode="wait">
              {showResult && (
                <motion.div
                  key="results"
                  variants={resultVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <motion.div
                    className="mt-8 p-8 rounded-2xl glass-card-strong space-y-6 border-2 border-accent/20"
                    variants={itemVariants}
                  >
                    <div className="flex items-center justify-center gap-2 text-accent mb-2">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      >
                        <TrendingUp className="h-6 w-6" />
                      </motion.div>
                      <p className="text-sm font-semibold uppercase tracking-wide">Tahmini Aylık Toplam Tasarruf</p>

                      {/* Assumptions Hover */}
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <button
                            type="button"
                            className="inline-flex items-center text-xs text-muted-foreground hover:text-foreground ml-2 transition-colors"
                          >
                            <Info className="h-4 w-4 mr-1" />
                            Varsayımlar
                          </button>
                        </HoverCardTrigger>
                        <HoverCardContent className="max-w-sm text-sm space-y-2">
                          <p className="font-semibold mb-1">Hesaplama varsayımları:</p>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>
                              Tedaarik&apos;in kapsamlı pazar araştırması ile kazanılabilecek indirim:{" "}
                              <strong>%20</strong>
                            </li>
                            <li>
                              En az 10 tedarikçiden manuel teklif alarak kazanılan ek indirim: <strong>%5</strong>
                            </li>
                            <li>
                              10+ tedarikçinin tekliflerini almak ve karşılaştırmak için gereken aylık süre:{" "}
                              <strong>{HIGH_COMPARISON_HOURS} saat</strong>
                            </li>
                            <li>
                              10&apos;dan az tedarikçiyle yapılan pazar araştırması için aylık süre:{" "}
                              <strong>{LOW_COMPARISON_HOURS} saat</strong>
                            </li>
                            <li>
                              Pazar araştırması için çalışan personelin saatlik maliyeti: <strong>300 TL</strong>
                            </li>
                            <li>
                              Fatura başına işleme/dijitalleştirme süresi: <strong>{INVOICE_MIN_PER} dakika</strong>
                            </li>
                          </ul>
                        </HoverCardContent>
                      </HoverCard>
                    </div>

                    {/* Total Money Savings */}
                    <motion.div
                      className="text-center"
                      variants={itemVariants}
                    >
                      <motion.p
                        className="text-5xl font-bold text-accent mb-2"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                      >
                        <AnimatedNumber value={results.totalSaving} prefix="₺" />
                      </motion.p>
                      <p className="text-lg text-muted-foreground">
                        Satın alma maliyetlerinde ortalama{" "}
                        <motion.span
                          className="font-semibold text-accent"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {results.percentage}%
                        </motion.span>{" "}
                        indirim
                      </p>
                    </motion.div>

                    {/* Breakdown */}
                    <motion.div
                      className="grid gap-4 pt-4 border-t border-border sm:grid-cols-2"
                      variants={itemVariants}
                    >
                      <motion.div
                        className="space-y-1 text-center sm:text-left"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <p className="text-sm font-semibold text-foreground">
                          Satın alma tasarrufu (fiyat karşılaştırma)
                        </p>
                        <p className="text-xl font-bold">
                          <AnimatedNumber value={results.priceSaving} prefix="₺" duration={1.2} />
                        </p>
                      </motion.div>
                      <motion.div
                        className="space-y-1 text-center sm:text-left"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <p className="text-sm font-semibold text-foreground">İş gücü tasarrufu (zaman kazancı)</p>
                        <p className="text-xl font-bold">
                          <AnimatedNumber value={results.laborSaving} prefix="₺" duration={1.2} />
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Toplam zaman kazancı: <strong>{results.timeSavedHours.toFixed(1)} saat/ay</strong> (~
                          {results.timeSavedMinutes} dakika)
                        </p>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        onClick={scrollToEarlyAccess}
                        size="lg"
                        className="w-full glow-button bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 rounded-xl font-semibold mt-4"
                      >
                        Erken Erişim Talep Et
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </motion.div>

                  {/* Disclaimer line */}
                  <motion.p
                    className="text-xs text-muted-foreground text-center mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    Bu hesaplama sektörel ortalama varsayımlara göre yapılmıştır; gerçek sonuçlar değişiklik gösterebilir.
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Calculator;

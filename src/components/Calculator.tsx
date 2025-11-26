import { useState } from "react";
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

const Calculator = () => {
  const [monthlySpend, setMonthlySpend] = useState("");
  const [invoiceCount, setInvoiceCount] = useState("");
  const [comparisonLevel, setComparisonLevel] = useState<"high" | "low">("low"); // "high" = 10+ suppliers, "low" = <10 suppliers
  const [showResult, setShowResult] = useState(false);
  const [errors, setErrors] = useState({ spend: "", invoice: "" });
  const [results, setResults] = useState({
    timeSavedMinutes: 0,
    timeSavedHours: 0,
    priceSaving: 0,
    laborSaving: 0,
    totalSaving: 0,
    percentage: 0, // effective discount on purchases
  });

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

    // --- Time savings ---
    const invoiceTimeMinutes = count * INVOICE_MIN_PER;
    const marketResearchHours = comparisonLevel === "high" ? HIGH_COMPARISON_HOURS : LOW_COMPARISON_HOURS;

    const totalTimeHours = invoiceTimeMinutes / 60 + marketResearchHours;
    const totalTimeMinutes = Math.round(invoiceTimeMinutes + marketResearchHours * 60);

    // --- Price savings ---
    // If user already compares 10+ suppliers, they "capture" 5% themselves,
    // so Tedaarik's incremental price advantage is 20% - 5% = 15%.
    const priceDiscount = comparisonLevel === "high" ? BASE_MARKET_DISCOUNT - SELF_DISCOUNT : BASE_MARKET_DISCOUNT;

    const priceSaving = Math.round(spend * priceDiscount);

    // --- Labor savings (time * hourly rate) ---
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

  return (
    <section id="calculator" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Ne kadar <span className="text-accent">kâr kaybediyorsunuz?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              İşletmenizin potansiyel tasarruf miktarını 30 saniyede öğrenin.
            </p>
          </div>

          {/* Calculator Card */}
          <div className="glass-card-strong rounded-3xl p-8 sm:p-12 space-y-8">
            <div className="space-y-6">
              {/* Monthly Spend */}
              <div className="space-y-3">
                <Label htmlFor="monthly-spend" className="text-base font-semibold">
                  Aylık tedarik harcaması (₺)
                </Label>
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
                  className={`h-14 text-lg rounded-xl border-2 bg-highlight-bg/50 ${
                    errors.spend ? "border-destructive" : "border-highlight-bg"
                  }`}
                  aria-required="true"
                  aria-invalid={!!errors.spend}
                  aria-describedby={errors.spend ? "spend-error" : undefined}
                />
                {errors.spend && (
                  <p id="spend-error" className="text-sm text-destructive" role="alert">
                    {errors.spend}
                  </p>
                )}
              </div>

              {/* Invoice Count */}
              <div className="space-y-3">
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
                  className={`h-14 text-lg rounded-xl border-2 bg-highlight-bg/50 ${
                    errors.invoice ? "border-destructive" : "border-highlight-bg"
                  }`}
                  aria-required="true"
                  aria-invalid={!!errors.invoice}
                  aria-describedby={errors.invoice ? "invoice-error" : undefined}
                />
                {errors.invoice && (
                  <p id="invoice-error" className="text-sm text-destructive" role="alert">
                    {errors.invoice}
                  </p>
                )}
              </div>

              {/* Procurement Process Selection */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">Şu anki tedarik süreciniz</Label>
                <RadioGroup
                  value={comparisonLevel}
                  onValueChange={(value: "high" | "low") => setComparisonLevel(value)}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  {/* High comparison: 10+ suppliers */}
                  <Label 
                    htmlFor="comparison-high" 
                    className={`flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                      comparisonLevel === "high" ? "border-accent bg-accent/5" : "border-border hover:border-accent/50"
                    }`}
                  >
                    <RadioGroupItem value="high" id="comparison-high" />
                    <div className="text-sm font-medium cursor-pointer">
                      En az 10 tedarikçinin tekliflerini karşılaştırıyorum
                    </div>
                  </Label>

                  {/* Low comparison: <10 suppliers */}
                  <Label 
                    htmlFor="comparison-low" 
                    className={`flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                      comparisonLevel === "low" ? "border-accent bg-accent/5" : "border-border hover:border-accent/50"
                    }`}
                  >
                    <RadioGroupItem value="low" id="comparison-low" />
                    <div className="text-sm font-medium cursor-pointer">
                      10&apos;dan daha az tedarikçinin tekliflerini karşılaştırıyorum
                    </div>
                  </Label>
                </RadioGroup>
              </div>
            </div>

            {/* Calculate Button */}
            <Button
              size="lg"
              onClick={calculateSavings}
              className="w-full glow-button bg-accent hover:bg-accent/90 text-accent-foreground text-sm sm:text-base lg:text-lg py-4 sm:py-6 rounded-xl font-semibold"
              aria-label="Tasarruf potansiyelini hesapla"
            >
              <CalcIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Tasarruf Potansiyelimi Hesapla
            </Button>

            {/* Result Display */}
            {showResult && (
              <>
                <div className="mt-8 p-8 rounded-2xl glass-card-strong space-y-6 animate-fade-in border-2 border-accent/20">
                  <div className="flex items-center justify-center gap-2 text-accent mb-2">
                    <TrendingUp className="h-6 w-6" />
                    <p className="text-sm font-semibold uppercase tracking-wide">Tahmini Aylık Toplam Tasarruf</p>

                    {/* Assumptions Hover */}
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <button
                          type="button"
                          className="inline-flex items-center text-xs text-muted-foreground hover:text-foreground ml-2"
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
                  <div className="text-center">
                    <p className="text-5xl font-bold text-accent mb-2">
                      ₺{results.totalSaving.toLocaleString("tr-TR")}
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Satın alma maliyetlerinde ortalama <span className="font-semibold">{results.percentage}%</span>{" "}
                      indirim
                    </p>
                  </div>

                  {/* Breakdown */}
                  <div className="grid gap-4 pt-4 border-t border-border sm:grid-cols-2">
                    <div className="space-y-1 text-center sm:text-left">
                      <p className="text-sm font-semibold text-foreground">
                        Satın alma tasarrufu (fiyat karşılaştırma)
                      </p>
                      <p className="text-xl font-bold">₺{results.priceSaving.toLocaleString("tr-TR")}</p>
                    </div>
                    <div className="space-y-1 text-center sm:text-left">
                      <p className="text-sm font-semibold text-foreground">İş gücü tasarrufu (zaman kazancı)</p>
                      <p className="text-xl font-bold">₺{results.laborSaving.toLocaleString("tr-TR")}</p>
                      <p className="text-xs text-muted-foreground">
                        Toplam zaman kazancı: <strong>{results.timeSavedHours.toFixed(1)} saat/ay</strong> (~
                        {results.timeSavedMinutes} dakika)
                      </p>
                    </div>
                  </div>

                  <Button
                    onClick={scrollToEarlyAccess}
                    size="lg"
                    className="w-full glow-button bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 rounded-xl font-semibold mt-4"
                  >
                    Erken Erişim Talep Et
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                {/* Disclaimer line */}
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Bu hesaplama sektörel ortalama varsayımlara göre yapılmıştır; gerçek sonuçlar değişiklik gösterebilir.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;

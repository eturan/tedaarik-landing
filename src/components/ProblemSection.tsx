import { Clock, TrendingDown, Database } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Zaman Kaybı",
      headline: "Fatura dijitalleştirme ve tedarik süreci yönetimi her ay onlarca saatinizi ve enerjinizi çalıyor.",
      description:
        "Tedaarik, faturaları dijitalleştirir ve tedarik süreci yönetimini otomatikleştirerek size zaman kazandırır",
    },
    {
      icon: TrendingDown,
      title: "Zahmetli Tedarik",
      headline: "Uygun tedarikçi, ürün ve fiyat araştırmak son derece zahmetli",
      description:
        "Tedaarik, pazar araştırmanızı otomatikleştirerek yüzlerce tedarikçi ve ürün içinden size en uygun olanları bularak maliyetten tasarruf ettirir",
    },
    {
      icon: Database,
      title: "Kullanılmayan Veri",
      headline: "Veriler depolanıyor ama işletmenize yarayan bilgiye dönüşmüyor",
      description:
        "Tedaarik, faturalarınızdan yola çıkarak işletmenize özel analizler yapar ve bu sayede eyleme geçirilebilir öneriler sunarak işletmenize değer katar",
    },
  ];

  return (
    <section id="problem-section" className="py-16 lg:py-24 relative">
      {/* Gradient overlay for smooth transition from Hero section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Her ay yüzlerce fatura alıyoruz <br /> ama fatura bilgilerinden{" "}
            <span className="text-accent">faydalanmıyoruz.</span>
          </h2>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="glass-card-strong rounded-2xl p-8 space-y-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-highlight/20 text-accent">
                <problem.icon className="h-7 w-7" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-accent">{problem.title}</h3>
                <p className="text-base font-bold text-foreground leading-relaxed">{problem.headline}</p>
                <p className="text-sm text-muted-foreground leading-relaxed font-normal">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

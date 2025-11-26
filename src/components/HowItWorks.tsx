import { Camera, Eye, RefreshCw, ShoppingCart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Camera,
      title: "Faturanızın fotoğrafını ya da dijital dosyasını yükleyin",
      description: "Geri kalan her şeyi akıllı asistanınıza bırakın.",
    },
    {
      number: "02",
      icon: Eye,
      title: "Faturanız ve maliyetleriniz otomatik olarak analiz edilsin",
      description: "Angarya işleri Tedaarik halletsin.",
    },
    {
      number: "03",
      icon: RefreshCw,
      title: "Ürün tedarik fiyatlarınızı bölgenizdeki anonim fiyat aralıklarıyla karşılaştırın",
      description: "Pazar araştırmanızı otomatikleştirin.",
    },
    {
      number: "04",
      icon: ShoppingCart,
      title: "Ekibinizle satın alma listesi oluşturup tek tıkla birden fazla sipariş verin",
      description: "Boğucu WhatsApp gruplarından kurtulun.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Nasıl Çalışır?</h2>
          <p className="text-lg text-muted-foreground">
            Tedaarik size 4 basit ve otomatik adımda zaman ve para tasarrufu sağlar
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 space-y-6 hover:scale-105 transition-all duration-300 relative group"
            >
              {/* Step Number */}
              <div className="text-6xl font-bold text-highlight/30 absolute top-4 right-4">{step.number}</div>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-muted group-hover:bg-accent/10 transition-colors">
                <step.icon className="h-8 w-8 text-accent" />
              </div>

              {/* Content */}
              <div className="space-y-3 relative z-10">
                <h3 className="text-base font-bold leading-tight text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Result Banner */}
        <div className="max-w-4xl mx-auto mt-16 glass-card-strong rounded-2xl p-8 text-center space-y-4">
          <p className="text-2xl font-bold text-accent">Sonuç: %80'e varan zaman ve %20'ye varan para tasarrufu</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tedaarik, tedarik sürecinizin her adımını otomatikleştirir ve size sadece stratejik kararlar almanız için
            zaman kazandırır. Artık faturalarla uğraşmak yerine, işinizi büyütmeye odaklanın.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

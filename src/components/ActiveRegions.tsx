import { MapPin, Clock, Banknote, Percent } from "lucide-react";
import { useState } from "react";

const ActiveRegions = () => {
  const [activeTab, setActiveTab] = useState("istanbul");

  const regions = [
    { id: "istanbul", name: "İstanbul" },
    { id: "ankara", name: "Ankara" },
    { id: "izmir", name: "Yakında: İzmir" },
    { id: "antalya", name: "Yakında: Antalya" },
  ];

  const stats = [
    {
      icon: Clock,
      value: "5 dk",
      label: "Kurulum Süresi",
    },
    {
      icon: Banknote,
      value: "1 Ay",
      label: "Ücretsiz Deneme",
    },
    {
      icon: Percent,
      value: "%20",
      label: "Ortalama Tasarruf",
    },
  ];

  return (
    <section className="py-16 lg:py-20 relative bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold mb-4">
              <MapPin className="h-4 w-4" />
              <span>Şu Anda Aktif Bölgeler</span>
            </div>
            <p className="text-lg text-muted-foreground">
              Bölgeniz listede yoksa bile erken erişim talebinizi yapın. Yeni bölgeler talep yoğunluğuna göre açılıyor.
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setActiveTab(region.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === region.id
                    ? "bg-accent text-accent-foreground shadow-lg scale-105"
                    : "glass-card hover:bg-white/90"
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card-strong rounded-2xl p-8 text-center space-y-4 hover:scale-105 transition-transform"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mx-auto">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-foreground mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActiveRegions;

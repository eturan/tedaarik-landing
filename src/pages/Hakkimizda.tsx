import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
  credentials: string[];
}

const founders: TeamMember[] = [
  {
    name: "Boğaç Can Yıldırım",
    role: "CEO",
    image: "/images/team/bogac.jpg",
    linkedin: "https://www.linkedin.com/in/bogac-can-yildirim-mba/",
    credentials: [
      "Eski ASML strateji danışmanı",
      "ODTÜ MBA",
      "Proje yönetimi ve finans alanında 9 yıl deneyim",
      "Finansal modelleme ve değerleme analisti",
      "Strateji ve iş geliştirme uzmanı",
    ],
  },
  {
    name: "Emre Turan",
    role: "CTO",
    image: "/images/team/emre.jpg",
    linkedin: "https://www.linkedin.com/in/eturan/",
    credentials: [
      "Eski  Getir ve Deloitte Direktoru çalışanı",
      "Oxford Üniversitesi MBA",
      "Mühendislik alanında 20+ yıl uygulamalı deneyim",
      "Üst düzey yöneticilik alanında 8+ yıl deneyim",
      "Eski startup kurucusu ve CTO",
      "Yapay zeka platformları uzmanı",
    ],
  },
];

const advisors: TeamMember[] = [
  {
    name: "Dr. Özgür Kaya",
    role: "Danışman",
    image: "/images/team/ozgur.jpg",
    credentials: [
      "ODTÜ Bilgi İşlem Daire Başkanı",
      "AR Startup kurucu ortağı",
      "Eski restoran sahibi ve yöneticisi",
    ],
  },
  {
    name: "Deniz Ünver",
    role: "Danışman",
    image: "/images/team/deniz.jpg",
    credentials: [
      "Coldfusion kurucusu ve sahibi",
      "Impact HUB Ankara üyesi",
      "Restoran yönetiminde 10+ yıl deneyim",
    ],
  },
  {
    name: "Eren Reyhan",
    role: "Danışman",
    image: "/images/team/eren.jpg",
    credentials: [
      "Newcastle Group satın alma yöneticisi",
      "Girişimci ve kurucu",
      "10+ yıl sektör deneyimine sahip uzman",
    ],
  },
];

const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => {
  // Generate initials for fallback avatar
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.div
      className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative mb-4">
          <div className="w-28 h-28 rounded-full overflow-hidden bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Hide the image and show initials fallback
                  e.currentTarget.style.display = "none";
                  const fallback = e.currentTarget.nextElementSibling;
                  if (fallback) fallback.classList.remove("hidden");
                }}
              />
            ) : null}
            <span
              className={`text-2xl font-bold text-accent ${member.image ? "hidden" : ""}`}
            >
              {initials}
            </span>
          </div>
        </div>

        {/* Name and Role */}
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#0A66C2] transition-colors"
              aria-label={`${member.name} LinkedIn profili`}
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
        </div>
        <span className="text-accent font-semibold mb-4">{member.role}</span>

        {/* Credentials */}
        <ul className="text-sm text-muted-foreground space-y-1.5 text-left w-full">
          {member.credentials.map((credential, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>{credential}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Hakkimizda = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />

      <main className="pt-24 lg:pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tedaarik'in Arkasındaki Ekip
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Yiyecek ve içecek sektöründe köklü deneyime sahip, tutkulu bir ekip olarak
              restoranların maliyet yönetimini dönüştürmek için çalışıyoruz.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl p-8 md:p-12 border border-accent/20">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Misyonumuz
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tedaarik olarak, restoranların tedarik ve maliyet yönetimini yapay zeka ile
                basitleştiriyoruz. Amacımız, işletme sahiplerinin karmaşık Excel tablolarından
                ve manuel hesaplamalardan kurtularak asıl işlerine odaklanmalarını sağlamak.
                Her boyuttaki yiyecek-içecek işletmesinin, büyük zincirlerin sahip olduğu
                maliyet zekasına erişebilmesini hedefliyoruz.
              </p>
            </div>
          </motion.section>

          {/* Founders Section */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Kurucu Ekip
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {founders.map((member, index) => (
                <TeamCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </motion.section>

          {/* Advisors Section */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Danışmanlarımız
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {advisors.map((member, index) => (
                <TeamCard key={member.name} member={member} index={index + 2} />
              ))}
            </div>
          </motion.section>

          {/* Values Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Değerlerimiz
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Şeffaflık",
                  description:
                    "Verileriniz sizin. Tüm maliyet analizlerini şeffaf ve anlaşılır bir şekilde sunuyoruz.",
                },
                {
                  title: "Sektör Odaklılık",
                  description:
                    "Restoran sektörünün benzersiz ihtiyaçlarını biliyor ve ona göre çözümler geliştiriyoruz.",
                },
                {
                  title: "Sürekli İyileştirme",
                  description:
                    "Yapay zeka modellerimizi sürekli geliştirerek size daha doğru öngörüler sunuyoruz.",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-border/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Hakkimizda;

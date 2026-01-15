import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const CerezPolitikasi = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />

      <main className="pt-24 lg:pt-32 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-foreground mb-8">
              Çerez Politikası
            </h1>
            <p className="text-muted-foreground mb-8">
              Son güncelleme: 15 Ocak 2025
            </p>

            <div className="prose prose-lg max-w-none text-foreground/90 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  1. Çerez Nedir?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Çerezler, web sitelerinin cihazınıza (bilgisayar, tablet veya
                  telefon) yerleştirdiği küçük metin dosyalarıdır. Çerezler,
                  web sitelerinin düzgün çalışmasını sağlamak, kullanıcı
                  deneyimini iyileştirmek ve site kullanımını analiz etmek
                  için yaygın olarak kullanılmaktadır.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. Kullandığımız Çerez Türleri
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  TEDAARIK web sitesinde aşağıdaki çerez türlerini kullanmaktayız:
                </p>

                <div className="space-y-6">
                  <div className="glass-card rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-2">
                      Zorunlu Çerezler
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Web sitesinin temel işlevlerini yerine getirmesi için
                      gerekli olan çerezlerdir. Bu çerezler olmadan site düzgün
                      çalışmaz. Oturum yönetimi ve güvenlik amaçlı kullanılır.
                    </p>
                  </div>

                  <div className="glass-card rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-2">
                      Analitik Çerezler
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Ziyaretçilerin siteyi nasıl kullandığını anlamamıza
                      yardımcı olan çerezlerdir. Bu bilgiler, siteyi ve
                      hizmetlerimizi iyileştirmek için kullanılır.
                    </p>
                  </div>

                  <div className="glass-card rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-2">
                      İşlevsellik Çerezleri
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Dil tercihi, tema seçimi gibi tercihlerinizi hatırlayarak
                      size kişiselleştirilmiş bir deneyim sunmamızı sağlayan
                      çerezlerdir.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. Üçüncü Taraf Çerezleri
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Aşağıdaki üçüncü taraf hizmetlerinin çerezlerini kullanmaktayız:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>
                    <strong>PostHog:</strong> Site kullanım analitiği için
                    kullanılmaktadır. Veriler AB sunucularında işlenmektedir.
                  </li>
                  <li>
                    <strong>Cloudflare:</strong> Güvenlik ve performans
                    optimizasyonu için kullanılmaktadır.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. Çerez Kullanım Amaçları
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Çerezleri aşağıdaki amaçlarla kullanmaktayız:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Web sitesinin düzgün çalışmasını sağlamak</li>
                  <li>Oturum bilgilerinizi güvenli bir şekilde yönetmek</li>
                  <li>Tercihlerinizi hatırlamak</li>
                  <li>Site trafiğini ve kullanım kalıplarını analiz etmek</li>
                  <li>Hizmetlerimizi geliştirmek</li>
                  <li>Güvenlik önlemlerini uygulamak</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Çerez Yönetimi
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Çerezleri tarayıcı ayarlarınızdan kontrol edebilir ve
                  silebilirsiniz. Ancak bazı çerezleri devre dışı bırakmak,
                  web sitesinin bazı özelliklerinin düzgün çalışmamasına
                  neden olabilir.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Çerez ayarlarını değiştirmek için tarayıcınızın ayarlar
                  menüsünü kullanabilirsiniz:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>
                    <strong>Chrome:</strong> Ayarlar → Gizlilik ve güvenlik →
                    Çerezler ve site verileri
                  </li>
                  <li>
                    <strong>Firefox:</strong> Ayarlar → Gizlilik ve Güvenlik →
                    Çerezler ve Site Verileri
                  </li>
                  <li>
                    <strong>Safari:</strong> Tercihler → Gizlilik → Çerezler
                    ve web sitesi verileri
                  </li>
                  <li>
                    <strong>Edge:</strong> Ayarlar → Çerezler ve site izinleri
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  6. Çerez Saklama Süreleri
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Çerezler, türlerine göre farklı sürelerde saklanır:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>
                    <strong>Oturum Çerezleri:</strong> Tarayıcınızı kapattığınızda
                    otomatik olarak silinir.
                  </li>
                  <li>
                    <strong>Kalıcı Çerezler:</strong> Belirlenen süre boyunca
                    veya siz silene kadar cihazınızda kalır. Süre genellikle
                    1 gün ile 2 yıl arasında değişir.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  7. Çerez Tablosu
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold text-foreground">
                          Çerez Adı
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">
                          Tür
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">
                          Süre
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">
                          Amaç
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">_session</td>
                        <td className="py-3 px-4">Zorunlu</td>
                        <td className="py-3 px-4">Oturum</td>
                        <td className="py-3 px-4">Oturum yönetimi</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">ph_*</td>
                        <td className="py-3 px-4">Analitik</td>
                        <td className="py-3 px-4">1 yıl</td>
                        <td className="py-3 px-4">PostHog analitiği</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">theme</td>
                        <td className="py-3 px-4">İşlevsellik</td>
                        <td className="py-3 px-4">1 yıl</td>
                        <td className="py-3 px-4">Tema tercihi</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">cf_*</td>
                        <td className="py-3 px-4">Zorunlu</td>
                        <td className="py-3 px-4">30 dakika</td>
                        <td className="py-3 px-4">Cloudflare güvenlik</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  8. Değişiklikler
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bu Çerez Politikasını zaman zaman güncelleyebiliriz. Önemli
                  değişiklikler yapıldığında sizi web sitemiz üzerinden
                  bilgilendireceğiz.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  9. İletişim
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Çerez politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong>E-posta:</strong>{" "}
                  <a href="mailto:info@tedaarik.com" className="text-accent hover:underline">
                    info@tedaarik.com
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default CerezPolitikasi;

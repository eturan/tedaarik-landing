import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const KullanimSartlari = () => {
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
              Kullanım Şartları
            </h1>
            <p className="text-muted-foreground mb-8">
              Son güncelleme: 15 Ocak 2025
            </p>

            <div className="prose prose-lg max-w-none text-foreground/90 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  1. Kabul
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  TEDAARIK hizmetlerini ("Hizmet") kullanarak, bu Kullanım Şartlarını
                  kabul etmiş sayılırsınız. Bu şartları kabul etmiyorsanız, lütfen
                  Hizmeti kullanmayınız.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. Hizmet Tanımı
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  TEDAARIK, yiyecek ve içecek işletmeleri için yapay zeka destekli
                  tedarik ve maliyet yönetimi platformudur. Hizmetimiz; fatura işleme,
                  maliyet analizi, tarif yönetimi ve tedarikçi karşılaştırması
                  özelliklerini içermektedir.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. Hesap Oluşturma
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Hizmeti kullanmak için bir hesap oluşturmanız gerekmektedir.
                  Hesap oluştururken:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Doğru ve güncel bilgiler sağlamalısınız</li>
                  <li>Hesap güvenliğinizden siz sorumlusunuz</li>
                  <li>Şifrenizi gizli tutmalısınız</li>
                  <li>Hesabınızda gerçekleşen tüm faaliyetlerden siz sorumlusunuz</li>
                  <li>18 yaşından büyük olmalısınız</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. Kabul Edilebilir Kullanım
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Hizmeti kullanırken aşağıdaki kurallara uymalısınız:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Yasalara ve düzenlemelere uygun hareket etmek</li>
                  <li>Başkalarının haklarına saygı göstermek</li>
                  <li>Sisteme zarar verecek faaliyetlerde bulunmamak</li>
                  <li>Sahte veya yanıltıcı bilgi yüklememek</li>
                  <li>Hizmeti yalnızca ticari işletmeniz için kullanmak</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Yasaklanan Faaliyetler
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Aşağıdaki faaliyetler kesinlikle yasaktır:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Hizmeti yasadışı amaçlarla kullanmak</li>
                  <li>Virüs veya zararlı yazılım yaymak</li>
                  <li>Sistemin güvenliğini tehlikeye atmak</li>
                  <li>Tersine mühendislik yapmak</li>
                  <li>Hizmeti üçüncü taraflara satmak veya kiralamak</li>
                  <li>Otomatik veri toplama araçları kullanmak</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  6. Fikri Mülkiyet
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  TEDAARIK ve ilgili tüm içerik, özellikler ve işlevsellik
                  (yazılım, metin, grafikler, logolar dahil) Tedaarik'e aittir ve
                  telif hakkı, ticari marka ve diğer fikri mülkiyet yasalarıyla
                  korunmaktadır. Yüklediğiniz veriler (faturalar, tarifler) üzerindeki
                  haklar size aittir.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  7. Ücretlendirme ve Ödeme
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Hizmet kullanımı için belirlenen ücretleri ödemeyi kabul edersiniz:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Ücretler web sitemizde belirtildiği şekildedir</li>
                  <li>Ödemeler peşin olarak alınır</li>
                  <li>Fiyatlar önceden bildirimle değiştirilebilir</li>
                  <li>İade politikası ayrıca belirtilmiştir</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  8. Hizmet Değişiklikleri
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Hizmeti herhangi bir zamanda değiştirme, askıya alma veya
                  sonlandırma hakkını saklı tutarız. Önemli değişiklikler için
                  makul bir süre öncesinden bildirim yapılacaktır.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  9. Sorumluluk Sınırlaması
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Hizmet "olduğu gibi" sunulmaktadır. Yasaların izin verdiği
                  azami ölçüde, dolaylı, arızi, özel veya sonuç olarak ortaya
                  çıkan zararlardan sorumlu değiliz. Toplam sorumluluğumuz,
                  son 12 ayda ödediğiniz tutarla sınırlıdır.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  10. Tazminat
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bu şartların ihlali nedeniyle ortaya çıkabilecek üçüncü taraf
                  taleplerinden Tedaarik'i ve çalışanlarını muaf tutmayı ve
                  tazmin etmeyi kabul edersiniz.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  11. Fesih
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bu şartların ihlali durumunda hesabınızı önceden bildirimde
                  bulunmaksızın askıya alabilir veya feshedebiliriz. Hesabınızı
                  istediğiniz zaman kapatabilirsiniz.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  12. Uygulanacak Hukuk
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bu şartlar Türkiye Cumhuriyeti yasalarına tabidir. Uyuşmazlıklar
                  için İstanbul mahkemeleri ve icra daireleri yetkilidir.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  13. Değişiklikler
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bu Kullanım Şartlarını zaman zaman güncelleyebiliriz. Önemli
                  değişiklikler yapıldığında sizi bilgilendireceğiz. Değişiklikler
                  sonrasında Hizmeti kullanmaya devam etmeniz, yeni şartları
                  kabul ettiğiniz anlamına gelir.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  14. İletişim
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kullanım şartlarımız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
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

export default KullanimSartlari;

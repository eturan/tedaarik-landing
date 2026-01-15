import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const GizlilikPolitikasi = () => {
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
              Gizlilik Politikası
            </h1>
            <p className="text-muted-foreground mb-8">
              Son güncelleme: 15 Ocak 2025
            </p>

            <div className="prose prose-lg max-w-none text-foreground/90 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  1. Giriş
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tedaarik ("biz", "bizim" veya "Şirket") olarak, gizliliğinize saygı duyuyor
                  ve kişisel verilerinizi korumayı taahhüt ediyoruz. Bu Gizlilik Politikası,
                  tedaarik.com web sitesi ve TEDAARIK uygulaması ("Hizmet") aracılığıyla
                  topladığımız bilgileri nasıl kullandığımızı açıklamaktadır.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. Toplanan Bilgiler
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Hizmetimizi kullanırken aşağıdaki bilgileri toplayabiliriz:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>
                    <strong>Kimlik Bilgileri:</strong> Ad, soyad, e-posta adresi, telefon numarası
                  </li>
                  <li>
                    <strong>İşletme Bilgileri:</strong> Restoran adı, şehir, çalışan sayısı
                  </li>
                  <li>
                    <strong>Fatura Verileri:</strong> Yüklediğiniz tedarikçi faturaları ve içerdikleri bilgiler
                  </li>
                  <li>
                    <strong>Kullanım Verileri:</strong> Hizmeti nasıl kullandığınıza dair bilgiler
                  </li>
                  <li>
                    <strong>Teknik Veriler:</strong> IP adresi, tarayıcı türü, cihaz bilgileri
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. Bilgilerin Kullanımı
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Topladığımız bilgileri aşağıdaki amaçlarla kullanırız:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Hizmetimizi sağlamak ve geliştirmek</li>
                  <li>Hesabınızı oluşturmak ve yönetmek</li>
                  <li>Faturalarınızı işlemek ve maliyet analizleri sunmak</li>
                  <li>Müşteri desteği sağlamak</li>
                  <li>Hizmet güncellemeleri ve bildirimler göndermek</li>
                  <li>Yasal yükümlülüklerimizi yerine getirmek</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. Bilgi Paylaşımı
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Kişisel bilgilerinizi aşağıdaki durumlar dışında üçüncü taraflarla paylaşmayız:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Açık izniniz olduğunda</li>
                  <li>Hizmet sağlayıcılarımızla (bulut depolama, analitik hizmetleri)</li>
                  <li>Yasal zorunluluk halinde</li>
                  <li>Şirket birleşme veya devir durumunda</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Veri Güvenliği
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Verilerinizi korumak için endüstri standardı güvenlik önlemleri uyguluyoruz.
                  Tüm veri transferleri SSL/TLS şifrelemesi ile korunur. Fatura verileriniz
                  güvenli sunucularda şifreli olarak saklanır. Ancak, internet üzerinden
                  hiçbir veri iletiminin %100 güvenli olmadığını hatırlatmak isteriz.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  6. Veri Saklama
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kişisel verilerinizi, hesabınız aktif olduğu sürece ve yasal yükümlülüklerimizi
                  yerine getirmek için gerekli olan süre boyunca saklarız. Hesabınızı
                  sildiğinizde, verileriniz makul bir süre içinde sistemlerimizden kaldırılır.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  7. Haklarınız (KVKK)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aşağıdaki haklara sahipsiniz:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                  <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                  <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                  <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                  <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
                  <li>Silinmesini veya yok edilmesini isteme</li>
                  <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi
                      suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  8. Çerezler
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Web sitemizde çerezler kullanmaktayız. Çerez kullanımımız hakkında detaylı
                  bilgi için <a href="/cerez-politikasi" className="text-accent hover:underline">Çerez Politikamızı</a> inceleyebilirsiniz.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  9. Değişiklikler
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler
                  yapıldığında sizi e-posta veya web sitemiz üzerinden bilgilendireceğiz.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  10. İletişim
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
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

export default GizlilikPolitikasi;

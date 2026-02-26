import LegalPage from "@/components/LegalPage";

const TeslimatVeIade = () => {
  return (
    <LegalPage title="Teslimat ve İade Şartları" lastUpdated="31 Ocak 2026">
      <p className="text-muted-foreground leading-relaxed italic">
        (Dijital Hizmetler)
      </p>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          1. Taraflar ve Tanımlar
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          <strong>Satıcı:</strong><br />
          Tedaarik Teknoloji Anonim Şirketi<br />
          Üniversiteler Mahallesi İhsan Doğramacı Bulvarı<br />
          ETKİM Binası 31/20 Çankaya / Ankara<br />
          ("TEDAARİK")
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          <strong>Alıcı:</strong><br />
          Tedaarik platformuna kayıt olarak hizmetlerden faydalanan, ticari veya mesleki faaliyetleri
          kapsamında hareket eden gıda işletmesi<br />
          ("ALICI")
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          İşbu belgede kullanılan ve tanımlanmayan diğer terimler, Hizmet Kullanım ve Abonelik
          Sözleşmesi'nde kendilerine verilen anlamı taşır.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          2. Teslimat
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          2.1. TEDAARİK tarafından sunulan hizmetler, fiziksel bir teslimat içermeyen, internet üzerinden
          erişilen dijital hizmetlerdir.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          2.2. Hizmetin teslimi, ALICI tarafından ücretli aboneliğin başlatılması ve Platform hesabının bu
          kapsamda aktif hale getirilmesi ile gerçekleşmiş sayılır.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          2.3. ALICI'ya sunulan ücretsiz deneme süresi, hizmetin tanıtımı ve değerlendirilmesi amacıyla
          sağlanmakta olup, teslimat olarak kabul edilmez.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          2.4. Dijital hizmetin teslimi, herhangi bir kargo, fiziki gönderim veya maddi ortamda teslimat
          süreci içermez.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          3. İade
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          3.1. İşbu belge kapsamında sunulan hizmetler; dijital, abonelik esasına dayalı ve elektronik
          ortamda ifa edilen hizmetlerdir.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          3.2. Hizmetin teslimi ile birlikte, iade yapılmaz ve ödenen bedeller geri alınamaz.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          3.3. Hizmetin kısmen veya tamamen kullanılmaması, ALICI'ya bedel iadesi veya indirim talep etme
          hakkı vermez.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          3.4. Aboneliğin sona ermesi, iptali veya yenilenmemesi durumlarında uygulanacak hükümler,
          Hizmet Kullanım ve Abonelik Sözleşmesi kapsamında düzenlenmiştir.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          4. Genel Hükümler
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          4.1. İşbu Teslimat ve İade Şartları, TEDAARİK ile ALICI arasında akdedilen Hizmet Kullanım ve
          Abonelik Sözleşmesi'nin ayrılmaz bir parçasıdır.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          4.2. İşbu belgede hüküm bulunmayan hallerde, Hizmet Kullanım ve Abonelik Sözleşmesi
          hükümleri geçerlidir.
        </p>
      </section>
    </LegalPage>
  );
};

export default TeslimatVeIade;

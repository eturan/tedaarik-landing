import LegalPage from "@/components/LegalPage";

const OnBilgilendirme = () => {
  return (
    <LegalPage title="Ön Bilgilendirme Metni" lastUpdated="31 Ocak 2026">
      <p className="text-muted-foreground leading-relaxed italic">
        (Dijital Hizmet – Abonelik)
      </p>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          1. Taraflar
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          <strong>Hizmet Sağlayıcı (Satıcı):</strong><br />
          Tedaarik Teknoloji Anonim Şirketi<br />
          ("TEDAARİK")
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          <strong>Alıcı:</strong><br />
          Tedaarik platformuna kayıt olarak hizmetlerden faydalanan, ticari veya mesleki faaliyetleri
          kapsamında hareket eden gıda işletmesi<br />
          ("ALICI")
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          2. Hizmetin Konusu ve Niteliği
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          TEDAARİK tarafından sunulan hizmetler; internet üzerinden erişilen, fiziksel teslimat
          içermeyen, abonelik esasına dayalı dijital yazılım hizmetleridir.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Hizmetin kapsamı ve içeriği, ALICI tarafından seçilen abonelik planına göre belirlenir.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          3. Ücretsiz Deneme Süresi
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          ALICI'ya, Tedaarik planı kapsamında 14 (on dört) gün süreyle ücretsiz deneme imkânı
          sunulmaktadır.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Ücretsiz deneme süresi, hizmetin tanıtımı ve değerlendirilmesi amacıyla sağlanmakta olup,
          deneme süresi teslimat olarak kabul edilmez.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          4. Fiyat, Ödeme ve Abonelik
        </h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Abonelik ücretleri, seçilen plana göre belirlenir ve ödeme ekranında ALICI'ya açıkça gösterilir.</li>
          <li>Ödeme yapılmadan ücretli abonelik başlatılmaz.</li>
          <li>Abonelik ücretinin, abonelik bitiş veya yenilenme tarihinden önce ödenmesi gerekmektedir.</li>
          <li>Yenileme tarihinde ödeme yapılmaması halinde abonelik yenilenmez ve hizmete erişim durdurulur.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          5. Teslimat
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Dijital hizmetin teslimi, ücretli aboneliğin başlatılması ve Platform hesabının aktif hale
          getirilmesi ile gerçekleşmiş sayılır.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Hizmet, herhangi bir kargo, fiziki teslimat veya maddi gönderim içermemektedir.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          6. Cayma Hakkı ve İade
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Sunulan hizmetler; ticari amaçlarla satın alınan, dijital ve elektronik ortamda ifa edilen
          hizmetlerdir.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Bu nedenle, cayma hakkı bulunmamaktadır ve ödenen bedeller iade edilmez.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          7. Sözleşmeler ve Bağlayıcılık
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          ALICI;
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Hizmet Kullanım ve Abonelik Sözleşmesi'ni,</li>
          <li>Mesafeli Satış Sözleşmesi (Dijital Hizmet)'ni,</li>
          <li>Teslimat ve İade Şartları'nı,</li>
          <li>Gizlilik ve KVKK Aydınlatma Metni'ni</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-4">
          okuduğunu, anladığını ve kabul ettiğini beyan eder.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          8. Genel Bilgilendirme
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          İşbu Ön Bilgilendirme Metni, ödeme işlemi öncesinde ALICI'yı bilgilendirmek amacıyla
          hazırlanmış olup, yukarıda belirtilen sözleşmelerin ayrılmaz bir parçasıdır.
        </p>
      </section>
    </LegalPage>
  );
};

export default OnBilgilendirme;

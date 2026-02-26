import LegalPage from "@/components/LegalPage";

const KabulVeOnay = () => {
  return (
    <LegalPage title="Kabul ve Onay Metinleri" lastUpdated="31 Ocak 2026">
      <p className="text-muted-foreground leading-relaxed italic">
        (Kayıt Sırasında Onaylanan Belgeler)
      </p>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          1. Genel Kabul ve Onay
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          ALICI, TEDAARİK platformuna kayıt olurken aşağıda belirtilen belge ve metinleri okuduğunu,
          anladığını ve tamamını kabul ettiğini beyan eder:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Hizmet Kullanım ve Abonelik Sözleşmesi</li>
          <li>Mesafeli Satış Sözleşmesi (Dijital Hizmet Satışı – B2B)</li>
          <li>Teslimat ve İade Şartları (Dijital Hizmetler)</li>
          <li>Gizlilik ve Kişisel Verilerin Korunması Aydınlatma Metni</li>
          <li>Ön Bilgilendirme Metni</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Bu belgeler, ALICI ile TEDAARİK arasındaki sözleşmesel ilişkinin ayrılmaz parçalarını oluşturur.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          2. Ticari Kullanım ve Tüketici Olmama Beyanı
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          ALICI, TEDAARİK platformu üzerinden sunulan hizmetlerin ticari veya mesleki amaçlarla
          kullanıldığını; işbu hizmetler bakımından tüketici sıfatını haiz olmadığını kabul, beyan ve
          taahhüt eder.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          3. Ücretsiz Deneme ve Ücretli Abonelik Hakkında Bilgilendirme
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          ALICI;
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Tedaarik planı kapsamında 14 (on dört) gün süreyle ücretsiz deneme imkânı sunulduğunu,</li>
          <li>Ücretsiz deneme süresinin teslimat olarak kabul edilmediğini,</li>
          <li>Ücretli aboneliğin ancak ödeme yapılması halinde başlatılacağını,</li>
          <li>Abonelik süresi sonunda ödeme yapılmaması halinde hizmete erişimin durdurulacağını</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-4">
          bildiğini ve bu hususları kabul ettiğini beyan eder.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          4. Cayma Hakkı ve İade Olmadığına İlişkin Onay
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          ALICI, satın alınan hizmetlerin;
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>dijital,</li>
          <li>abonelik esasına dayalı,</li>
          <li>ticari amaçlarla sunulan,</li>
          <li>elektronik ortamda ifa edilen</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-4">
          hizmetler olduğunu; ücretli aboneliğin başlatılmasıyla hizmetin ifasına başlandığını, bu
          nedenle cayma hakkının bulunmadığını ve ödenen bedellerin iade edilmeyeceğini kabul eder.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          5. Kişisel Veriler Hakkında Aydınlatıldığına Dair Beyan
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          ALICI, kişisel verilerinin işlenmesine ilişkin olarak Gizlilik ve KVKK Aydınlatma Metni
          kapsamında bilgilendirildiğini kabul eder.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          6. Onay Şekli ve Bağlayıcılık
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          ALICI, işbu Kabul ve Onay Metni'ni;
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>kayıt işlemi sırasında elektronik ortamda onayladığını,</li>
          <li>bu onayın, yukarıda belirtilen tüm belge ve metinler bakımından geçerli ve bağlayıcı olduğunu</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-4">
          kabul eder.
        </p>
      </section>
    </LegalPage>
  );
};

export default KabulVeOnay;

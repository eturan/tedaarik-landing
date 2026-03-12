export type Language = 'en' | 'tr';

export const translations = {
  en: {
    nav: {
      solutions: 'Solutions',
      calculator: 'Savings Calculator',
      features: 'Features',
      pricing: 'Pricing',
      faq: 'FAQ',
      blog: 'Blog',
      startTrial: 'Start Free Trial',
    },
    hero: {
      badge: 'Food prices change every week. Tedaarik helps you keep up.',
      title: 'The AI Assistant That',
      titleHighlight: 'Saves Time & Money',
      description: 'Stop typing data into Excel. Tedaarik turns invoices into real unit costs, keeps your recipe costs up to date, and helps you pay less for the ingredients you buy — without the extra admin work.',
      startTrial: 'Start Free Trial',
      estimateSavings: 'Estimate Savings',
      noCreditCard: 'No credit card required',
      setupFast: 'Setup in 5 minutes',
      imageAlt: 'Tedaarik dashboard showing real-time price tracking for restaurant ingredients with cost analysis and savings alerts',
    },
    painPoints: {
      title: 'Running a Restaurant Is Hard Enough',
      subtitle: 'You have enough to worry about in the kitchen. Tedaarik handles the messy admin work so you can focus on operations.',
      point1: {
        title: '"I\'m always reacting."',
        subtitle: 'Supplier prices change without warning—and you only notice after the bill is paid.',
        li1: 'Costs fluctuate between deliveries',
        li2: 'Hard to track exactly what you pay per item'
      },
      point2: {
        title: '"Paper, WhatsApp, Excel… chaos."',
        subtitle: 'Orders and receipts are scattered everywhere.',
        li1: 'Invoices get lost or damaged',
        li2: 'Manual data entry eats up your nights'
      },
      point3: {
        title: '"Menu pricing feels like guessing."',
        subtitle: 'Ingredient costs go up, but your menu prices stay the same.',
        li1: 'Updating recipe cards takes forever',
        li2: 'Unsure which dishes are actually profitable'
      }
    },
    calculator: {
      currency: '$',
      title: 'See Your Potential Savings',
      subtitle: 'Answer two simple questions to see how much time and money you could save.',
      step1: {
        title: 'Monthly Invoice Volume',
        desc: 'How many supplier invoices do you process each month?',
        invoices: 'invoices',
        next: 'Next Step'
      },
      step2: {
        title: 'Monthly Purchasing Spend',
        desc: 'What is your average monthly spend on ingredients and supplies?',
        month: '/ month',
        rangeMin: '$1k',
        rangeMax: '$20k+',
        back: 'Back',
        calculate: 'Calculate Savings'
      },
      step3: {
        title: 'Your Estimated Savings',
        basedOn1: 'Based on ',
        basedOn2: ' invoices and $',
        basedOn3: ' monthly spend.',
        annualSavings: 'Annual Cost Savings',
        extraProfit: "That's $",
        extraProfit2: " extra profit every month",
        timeReclaimed: 'Time Reclaimed',
        hours: ' Hours',
        hoursSaved: ' hours saved monthly',
        emailTitle: 'Email Me My Savings Breakdown',
        emailDesc: 'Where should we send your detailed savings report?',
        emailLabel: 'Work Email',
        emailPlaceholder: 'owner@restaurant.com',
        sending: 'Sending...',
        sendBtn: 'Send My Savings Report',
        emailNote: "We'll email this to you in a couple of minutes. No sales calls.",
        successTitle: 'Report Sent!',
        successDesc1: "We've sent the breakdown to ",
        successActionDesc: "While you check your email, why not see Tedaarik in action?",
        startTrialBtn: 'Start My Free Trial',
        trialNote: 'Full access for 14 days. No credit card required.'
      }
    },
    features: {
      title: 'Everything You Need to Run Smarter',
      subtitle: 'Three simple tools that work together to save you time, reduce errors, and protect your margins.',
      f1: {
        title: 'Invoice Digitization & Cost Tracking',
        desc: 'Upload your invoices. We handle the rest.',
        li1: 'Upload via camera, email or e-invoice integration',
        li2: 'Extracts every line item and price automatically',
        li3: 'Searchable digital archive for easy accounting'
      },
      f2: {
        title: 'Automatic Recipe Costing',
        desc: 'See exactly what every dish costs you to make.',
        li1: 'Recipe costs update automatically when ingredient prices change',
        li2: 'Spot shrinking margins instantly',
        li3: 'See which ingredients are eating your profits'
      },
      f3: {
        title: 'Market Price Comparison',
        desc: 'Compare your prices with the local market average.',
        li1: "See if you're overpaying for key ingredients",
        li2: 'Find better deals from verified suppliers',
        li3: 'Negotiate with confidence using real data'
      }
    },
    howItWorks: {
      title: 'How Does It Work?',
      subtitle: 'A simple flow that saves you hours every week',
      steps: [
        'Upload invoices easily in seconds',
        'Ingredient & recipe costs update automatically',
        'Compare prices easily & save money'
      ],
      benefitsTitle: 'Plus these benefits along the way',
      benefits: [
        'Clear dashboard',
        'Automated bookkeeping',
        'Easy team access',
        'Time saving'
      ]
    },
    testimonials: {
      title: 'Trusted by Kitchens Everywhere',
      subtitle: 'See what restaurant professionals are saying about Tedaarik.',
      t1: { quote: "Tedaarik completely changed how we handle our invoices. I used to spend nights to digitize them. Now it is done automatically.", role: "Owner, Coldfusion" },
      t2: { quote: "The price comparison tool alone saved us $400 in the first month on produce. It's like having a dedicated procurement manager.", role: "Manager, Müjü House" },
      t3: { quote: "Finally, software that doesn't feel like it was built in the 90s. Clean, fast, and actually solves the kitchen chaos.", role: "Owner, DAGS Coffee" }
    },
    pricing: {
      title: 'Simple, Transparent Pricing',
      subtitle: 'Start free. Upgrade when you see the value.',
      limitedOffer: 'Limited Time Offer',
      perMonth: 'per month',
      saveOffer: 'Become one of the first 100 users & save 50% forever',
      features: [
        'Unlimited invoice uploads',
        'Market price trends',
        'Compare supplier prices',
        'Smart saving tips',
        'Smart recipe costing',
        'Up to 5 users'
      ],
      startTrial: 'Start Free Trial',
      note: '14-day free trial • No credit card required'
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about getting started.',
      q1: { q: 'Do I need to change my suppliers?', a: 'Not at all. Tedaarik works with your existing suppliers. You just upload the invoices you already receive, and we handle the data extraction and analysis.' },
      q2: { q: 'Can I connect it to my e-invoice system?', a: 'Yes! We integrate with most major e-invoice systems to pull invoice data automatically, giving you real-time cost analysis.' },
      q3: { q: 'How long does setup take?', a: "Most restaurants are up and running in under 5 minutes. Just create an account, upload a few recent invoices, and you'll start seeing data immediately." },
      q4: { q: 'Is my data secure?', a: 'Absolutely. We use bank-level encryption to protect your financial data and never share your information with anyone.' }
    },
    cta: {
      title: 'Ready to Manage Your Costs?',
      subtitle: "Start your free trial and see what's actually happening in your restaurant.",
      startTrial: 'Start Your Free 14-Day Trial',
      estimate: 'Estimate Potential Savings',
      noCreditCard: 'No credit card required',
      setupFast: 'Setup in 5 minutes',
      cancel: 'Cancel anytime'
    },
    footer: {
      description: 'AI-powered supply chain and cost intelligence layer for food & beverage businesses.',
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      contact: 'Contact',
      features: 'Features',
      pricing: 'Pricing',
      howItWorks: 'How It Works',
      calculator: 'Savings Calculator',
      aboutUs: 'About Us',
      blog: 'Blog',
      termsOfService: 'Terms of Service',
      distanceSales: 'Distance Sales Agreement',
      deliveryReturns: 'Delivery & Returns',
      privacyPolicy: 'Privacy & KVKK',
      preInformation: 'Pre-Information',
      acceptApproval: 'Acceptance & Approval',
      cookiePolicy: 'Cookie Policy',
      copyright: '© 2025 Tedaarik. All rights reserved.',
    }
  },
  tr: {
    nav: {
      solutions: 'Çözümler',
      calculator: 'Tasarruf Hesaplayıcı',
      features: 'Özellikler',
      pricing: 'Fiyatlandırma',
      faq: 'SSS',
      blog: 'Blog',
      startTrial: 'Ücretsiz Dene',
    },
    hero: {
      badge: 'Sürekli değişen gıda fiyatlarını Tedaarik\'le yakalayın.',
      title: 'Restoranınızın',
      titleHighlight: 'Yapay Zeka Müdür Yardımcısı',
      description: 'Excel\'e veri girmeyi bırakın. Tedaarik faturaları gerçek birim maliyetlere dönüştürür, reçete maliyetlerinizi güncel tutar ve emek harcamadan satın alma sürecinde tasarruf etmenizi sağlar.',
      startTrial: 'Ücretsiz Dene',
      estimateSavings: 'Tasarrufu Hesapla',
      noCreditCard: 'Kredi kartı gerekmez',
      setupFast: '5 dakikada kurulum',
      imageAlt: 'Restoran malzemeleri için gerçek zamanlı fiyat takibi, maliyet analizi ve tasarruf uyarılarını gösteren Tedaarik paneli',
    },
    painPoints: {
      title: 'Restoran İşletmek Zaten Yeterince Zor',
      subtitle: 'Mutfakta endişelenecek yeterince şeyiniz var. Operasyonlara odaklanabilmeniz için Tedaarik karmaşık idari işleri halleder.',
      point1: {
        title: '"Tedarik fiyatları sürekli değişir."',
        subtitle: 'Fiyat değişiklikleri ancak ödeme zamanı geldiğinde fark edilir.',
        li1: 'Siparişler arasında fiyatlar artar',
        li2: '300 farklı ürünün fiyatını sürekli takip etmek çok zaman ve enerji alır'
      },
      point2: {
        title: '"Kağıt, WhatsApp, Excel... kaos."',
        subtitle: 'Teklifleri ve faturaları gerektiğinde bulmak, bir ürünü aramak çok zor.',
        li1: 'Faturalar kaybolur veya hasar görür',
        li2: 'Manuel fatura veri girişi gecelerinizi tüketir'
      },
      point3: {
        title: '"Reçete maliyetleri 3 ayda bir güncellenir."',
        subtitle: 'Malzeme maliyetleri artar, ancak menü fiyatlarınız bazen aylarca aynı kalır.',
        li1: 'Reçete kartlarını güncellemek sonsuza dek sürer',
        li2: 'Hangi yemeklerin gerçekten karlı olduğunu net göremezsiniz'
      }
    },
    calculator: {
      currency: '₺',
      title: 'Potansiyel Tasarrufunuzu Görün',
      subtitle: 'Ne kadar zaman ve para tasarrufu yapabileceğinizi görmek için iki basit soruyu yanıtlayın.',
      step1: {
        title: 'Aylık Fatura Hacmi',
        desc: 'Her ay kaç tedarikçi faturası alıyorsunuz?',
        invoices: 'fatura',
        next: 'Sonraki Adım'
      },
      step2: {
        title: 'Aylık Satın Alma Harcaması',
        desc: 'Ürün tedariği için aylık ortalama harcamanız nedir?',
        month: '/ ay',
        rangeMin: '₺1k',
        rangeMax: '₺20k+',
        back: 'Geri',
        calculate: 'Tasarrufu Hesapla'
      },
      step3: {
        title: 'Tahmini Tasarrufunuz',
        basedOn1: '',
        basedOn2: ' fatura ve aylık ₺',
        basedOn3: ' harcama baz alınmıştır.',
        annualSavings: 'Yıllık Maliyet Tasarrufu',
        extraProfit: "Bu her ay ₺",
        extraProfit2: " ekstra kar demek",
        timeReclaimed: 'Geri Kazanılan Zaman',
        hours: ' Saat',
        hoursSaved: ' saat aylık tasarruf',
        emailTitle: 'Tasarruf Hesaplaması Detaylarımı Bana Gönder',
        emailDesc: 'Detaylı tasarruf raporunuzu nereye gönderelim?',
        emailLabel: 'E-posta adresi',
        emailPlaceholder: 'isminiz@isletmeniz.com',
        sending: 'Gönderiliyor...',
        sendBtn: 'Tasarruf Raporumu Gönder',
        emailNote: "Size özel hesaplama detaylarını birkaç dakika içinde göndereceğiz. Satış araması yok.",
        successTitle: 'Rapor Gönderildi!',
        successDesc1: "Detayları şu adrese gönderdik: ",
        successActionDesc: "Biz raporunuzu hazırlarken, Tedaarik'i iş başında görmek istemez misiniz?",
        startTrialBtn: 'Ücretsiz Denememi Başlat',
        trialNote: '14 gün boyunca tam erişim. Kredi kartı gerekmez.'
      }
    },
    features: {
      title: 'Daha Akıllı Bir İşletme İçin İhtiyacınız Olan Her Şey',
      subtitle: 'Size zaman kazandırmak, hataları azaltmak ve marjlarınızı korumak için birlikte çalışan üç basit araç.',
      f1: {
        title: 'Fatura Dijitalleştirme ve Maliyet Takibi',
        desc: 'Faturalarınızı yükleyin. Gerisini biz hallederiz.',
        li1: 'Fotoğraf, e-posta veya e-fatura entegrasyonu ile yükleyin',
        li2: 'Her ürünün birim fiyatı otomatik olarak çıkarılsın',
        li3: 'Aranabilir dijital arşiv ile ön muhasebenizi kolaylaştırın'
      },
      f2: {
        title: 'Otomatik Reçete Maliyeti Hesaplama',
        desc: 'Her bir tabağın size maliyetinin ne olduğunu tam olarak görün.',
        li1: 'Malzeme fiyatları değiştiğinde reçete maliyetleri otomatik olarak güncellensin',
        li2: 'Daralan marjları anında tespit edip kolayca karar verin',
        li3: 'Hangi malzemelerin & tabakların karlarınızı yediğini görün'
      },
      f3: {
        title: 'Piyasa Fiyat Karşılaştırması',
        desc: 'Fiyatlarınızı yerel piyasa ortalamasıyla karşılaştırın.',
        li1: "Satın aldığınız ürünler için fazla ödeme yapıp yapmadığınızı görün",
        li2: 'Doğrulanmış tedarikçilerden daha iyi ürünler ve fiyatlar bulun',
        li3: 'Gerçek verileri kullanarak güvenle pazarlık yapın'
      }
    },
    howItWorks: {
      title: 'Nasıl Çalışır?',
      subtitle: 'Size her hafta saatler kazandıran basit bir akış',
      steps: [
        'Faturaları saniyeler içinde kolayca yükleyin',
        'Malzeme ve reçete maliyetleri otomatik olarak güncellensin',
        'Fiyatları kolayca karşılaştırıp tasarrufu edin'
      ],
      benefitsTitle: 'Ayrıca bu avantajlar',
      benefits: [
        'Basit kontrol paneli',
        'Otomatik ön muhasebe',
        'Kolay ekip erişimi',
        'Zaman tasarrufu'
      ]
    },
    testimonials: {
      title: 'Tedaarik Hakkındaki Yorumlar',
      subtitle: 'Restoran profesyonellerinin Tedaarik hakkında ne söylediğini görün.',
      t1: { quote: "Tedaarik faturalarımızı işleme şeklimizi tamamen değiştirdi. Fatura dijitalleştirmek için geceler harcardım. Şimdi otomatik yapılıyor.", role: "İşletme Sahibi, Coldfusion" },
      t2: { quote: "Sadece fiyat karşılaştırma aracı ilk ayda ürünlerde bize ₺10.000 kazandırdı. Profesyonel bir satın almacıyla çalışmak gibi.", role: "Yönetici, Müjü House" },
      t3: { quote: "Sonunda, 90'larda yapılmış gibi hissettirmeyen bir yazılım. Temiz, hızlı ve restoran kaosunu gerçekten çözüyor.", role: " İşletme Sahibi, DAGS Coffee" }
    },
    pricing: {
      title: 'Basit, Şeffaf Fiyatlandırma',
      subtitle: 'Ücretsiz başlayın. Değerini gördüğünüzde yükseltin.',
      limitedOffer: 'Sınırlı Süreli Teklif',
      perMonth: '/ay',
      saveOffer: 'İlk 100 kullanıcıdan biri olun ve her pakette sonsuza dek %50 tasarruf edin',
      features: [
        'Sınırsız fatura yükleme',
        'Piyasa fiyat trendleri',
        'Tedarikçi fiyatlarını karşılaştırma',
        'Akıllı tasarruf ipuçları',
        'Akıllı reçete maliyeti hesaplama',
        '5 kullanıcıya kadar ekip büyüklüğü'
      ],
      startTrial: 'Ücretsiz Dene',
      note: '14 günlük ücretsiz deneme • Kredi kartı gerekmez'
    },
    faq: {
      title: 'Sıkça Sorulan Sorular',
      subtitle: 'Başlarken bilmeniz gereken her şey.',
      q1: { q: 'Tedarikçilerimi değiştirmem gerekiyor mu?', a: 'Hayır. Tedaarik, mevcut tedarikçilerinizle de çalışır. Sadece halihazırda aldığınız faturaları yüklersiniz, veri çıkarma ve analizi biz hallederiz.' },
      q2: { q: 'E-fatura sistemime bağlayabilir miyim?', a: 'Evet! Çoğu büyük e-fatura sistemiyle entegre olarak fatura verilerini otomatik çekerek bu iş yükünü omuzlarınızdan alıyor ve size gerçek zamanlı maliyet analizi sağlıyoruz.' },
      q3: { q: 'Kurulum ne kadar sürer?', a: "Çoğu restoran 5 dakikadan kısa sürede çalışmaya başlıyor. Sadece bir hesap oluşturun, birkaç yeni fatura yükleyin ve verileri hemen görmeye başlayacaksınız." },
      q4: { q: 'Verilerim güvende mi?', a: 'Kesinlikle. Finansal verilerinizi korumak için banka düzeyinde şifreleme ve anonimleştirme yapıyoruz. Hiçbir verinizi asla kimseyle paylaşmıyoruz.' }
    },
    cta: {
      title: 'Maliyetlerinizi Yönetmeye Hazır mısınız?',
      subtitle: "Ücretsiz denemenizi başlatın ve restoranınızda gerçekten neler olup bittiğini görün.",
      startTrial: '14 Günlük Ücretsiz Denemenizi Başlatın',
      estimate: 'Potansiyel Tasarrufu Hesapla',
      noCreditCard: 'Kredi kartı gerekmez',
      setupFast: '5 dakikada kurulum',
      cancel: 'İstediğiniz zaman iptal edin'
    },
    footer: {
      description: 'Yiyecek ve içecek işletmeleri için yapay zekâ destekli tedarik ve maliyet zekâ katmanı.',
      product: 'Ürün',
      company: 'Şirket',
      legal: 'Yasal',
      contact: 'İletişim',
      features: 'Özellikler',
      pricing: 'Fiyatlandırma',
      howItWorks: 'Nasıl Çalışır?',
      calculator: 'Tasarruf Hesaplayıcı',
      aboutUs: 'Hakkımızda',
      blog: 'Blog',
      termsOfService: 'Hizmet Kullanım Sözleşmesi',
      distanceSales: 'Mesafeli Satış Sözleşmesi',
      deliveryReturns: 'Teslimat ve İade Şartları',
      privacyPolicy: 'Gizlilik ve KVKK',
      preInformation: 'Ön Bilgilendirme',
      acceptApproval: 'Kabul ve Onay',
      cookiePolicy: 'Çerez Politikası',
      copyright: '© 2025 Tedaarik. Tüm hakları saklıdır.',
    }
  }
};

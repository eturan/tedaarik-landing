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
    logoBelt: {
      title: 'Trusted by smart restaurants',
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
    videoShowcase: {
      title: 'See It In Action',
      subtitle: 'Watch short demos of each feature',
      v1: {
        title: 'Invoice Upload & Data Analysis',
        desc: 'Upload your invoices and let AI extract the data automatically',
      },
      v2: {
        title: 'Materials & Unit Cost Tracking',
        desc: 'Track ingredient prices and compare unit costs across suppliers',
      },
      v3: {
        title: 'Recipe & Menu Management',
        desc: 'AI-powered recipe costing and menu optimization',
      },
      cta: 'Estimate Your Savings',
    },
    howItWorks: {
      title: 'How Does It Work?',
      subtitle: 'A simple flow that saves you hours every week',
      steps: [
        'Upload invoices effortlessly in seconds',
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
    logoBelt: {
      title: 'Akıllı restoranların tercihi',
    },
    hero: {
      badge: 'Sürekli değişen gıda fiyatlarını Tedaarik\'le yakalayın.',
      title: 'Restoranınızın',
      titleHighlight: 'Dijital Müdür Yardımcısı',
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
        title: '"Reçete maliyetleri güncellenemez."',
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
        rangeMin: '₺100.000',
        rangeMax: '₺1.000.000+',
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
    videoShowcase: {
      title: 'Ürünü Keşfedin',
      subtitle: 'Her özelliği kısa videolarla tanıyın',
      v1: {
        title: 'Fatura Yükleme ve Veri Analizi',
        desc: 'Faturalarınızı yükleyin, yapay zeka verileri otomatik çıkarsın',
      },
      v2: {
        title: 'Malzemeler ve Birim Maliyet',
        desc: 'Malzeme fiyatlarını takip edin, birim maliyetleri karşılaştırın',
      },
      v3: {
        title: 'Reçete ve Menü Yönetimi',
        desc: 'AI destekli reçete maliyeti hesaplama ve menü optimizasyonu',
      },
      cta: 'Tasarrufunu Hesapla',
    },
    howItWorks: {
      title: 'Nasıl Çalışır?',
      subtitle: 'Size her hafta saatler kazandıran basit bir akış',
      steps: [
        'Faturaları saniyeler içinde zahmetsizce yükleyin',
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

/**
 * B-variant translations for A/B test.
 * Used by components in src/components/b/ via the useBLanguage hook.
 */
export const translationsB = {
  en: {
    nav: translations.en.nav,
    logoBelt: translations.en.logoBelt,
    hero: {
      badge: 'Profit leak audit',
      headline: 'Stop the Hidden Cash Losses in Your Restaurant',
      description: 'Uncover the hidden supplier markups and operational waste quietly eroding your margins. Our AI-powered audit exposes every profit leak in seconds.',
      startTrial: 'Start Free Trial',
      estimateSavings: 'Detect My Profit Leak',
      trustLine: 'Benchmarked against industry averages and analytical models.',
      noCreditCard: 'No credit card required',
      setupFast: 'Setup in 5 minutes',
      imageAlt: 'Tedaarik dashboard highlighting profit leak detection, supplier price gaps, and cost analysis for restaurants',
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
      },
      bridge: 'How much are these problems costing your restaurant every month?',
      bridgeCta: 'Find out in 30 seconds',
    },
    calculator: {
      currency: '$',
      title: 'Profit Leak Audit',
      subtitle: 'Find out how much money your restaurant is losing every month.',
      socialProof: '47 restaurants have run this audit so far.',
      step1: {
        title: 'What Is Your Establishment Type?',
        desc: 'This lets us tailor results to your industry benchmarks.',
      },
      step2: {
        title: 'What Is Your Monthly Revenue?',
        desc: 'An approximate figure works. This is only used to generate your analysis — we don\'t store it.',
        rangeMin: '$10k',
        rangeMax: '$250k+',
        back: 'Back',
        next: 'See My Leak Report',
      },
      step3: {
        leakLabel: 'Your Monthly Cash Leak',
        yearlyLeakLabel: 'Estimated Yearly Loss',
        breakdownOverpayment: 'Supplier Price Gap (13%)',
        breakdownWaste: 'Operational Waste (5%)',
        breakdownAdmin: 'Administrative Process Costs (2%)',
        disclaimer: 'Calculations are simulated based on global restaurant efficiency benchmarks and current food inflation data in the Turkish market.',
        emailTitle: 'Get Your Detailed Leak Report',
        emailDesc: 'We\'ll send a full breakdown of where your money is going.',
        emailLabel: 'Work Email',
        emailPlaceholder: 'owner@restaurant.com',
        sending: 'Sending...',
        sendBtn: 'Stop This Leak',
        emailNote: 'We\'ll email your report in a few minutes. No sales calls.',
        successTitle: 'Leak Report Sent!',
        successDesc1: 'Your detailed report has been sent to ',
        successActionDesc: 'Ready to start plugging the leak?',
        startTrialBtn: 'Start Plugging the Leak',
        trialNote: 'Full access for 14 days. No credit card required.',
      },
    },
    features: {
      title: 'How Tedaarik Plugs the Leak',
      subtitle: 'Three tools that work together to find where your money goes and plug the leak.',
      f1: {
        title: 'Invoice Digitization & Cost Tracking',
        desc: 'Every invoice you upload becomes a data point against overpaying.',
        li1: 'Upload via camera, email or e-invoice integration',
        li2: 'Extracts every line item and price automatically',
        li3: 'Searchable digital archive for easy accounting'
      },
      f2: {
        title: 'Automatic Recipe Costing',
        desc: 'Know the true cost of every dish — and catch it the moment your margins start shrinking.',
        li1: 'Recipe costs update automatically when ingredient prices change',
        li2: 'Spot shrinking margins instantly',
        li3: 'See which ingredients are eating your profits'
      },
      f3: {
        title: 'Market Price Comparison',
        desc: "Find out if you're paying more than you should — and prove it with data.",
        li1: "See if you're overpaying for key ingredients",
        li2: 'Find better deals from verified suppliers',
        li3: 'Negotiate with confidence using real data'
      },
      cta: 'See Your Savings',
    },
    videoShowcase: {
      title: 'See It In Action',
      subtitle: 'Watch short demos of each feature',
      v1: {
        title: 'Invoice Upload & Data Analysis',
        desc: 'Upload your invoices and let AI extract the data automatically',
      },
      v2: {
        title: 'Materials & Unit Cost Tracking',
        desc: 'Track ingredient prices and compare unit costs across suppliers',
      },
      v3: {
        title: 'Recipe & Menu Management',
        desc: 'AI-powered recipe costing and menu optimization',
      },
      cta: 'Estimate Your Savings',
    },
    howItWorks: {
      title: 'How Does It Work?',
      subtitle: 'You upload your invoices. Tedaarik finds where your cash is leaking.',
      step1: {
        title: 'Upload Your Invoices',
        desc: "Snap a photo, forward an email, or sync your e-invoices. That's it — our AI reads every line item for you.",
      },
      step2: {
        title: 'Tedaarik Scans for Leaks',
        desc: "Price hikes, hidden deviations, shrinking margins — the system catches everything that's quietly costing you money.",
      },
      step3: {
        title: 'Stop Overpaying',
        desc: "Negotiate with real data, adjust your menu prices, or switch suppliers — every decision backed by numbers, not guesswork.",
      },
      footer: "That's it. No manual entry, no consultants, no spreadsheets.",
      cta: 'Start Your Free Trial',
    },
    pricing: {
      title: 'Simple, Transparent Pricing',
      subtitle: 'It costs less than a single unnoticed supplier overcharge.',
      limitedOffer: 'Limited Time Offer',
      perMonth: 'per month',
      saveOffer: 'First 100 users lock in 50% off — less than one missed price hike per month.',
      features: [
        'Unlimited invoice uploads',
        'Market price trends',
        'Compare supplier prices',
        'Smart saving tips',
        'Smart recipe costing',
        'Up to 5 users'
      ],
      startTrial: 'Start Free Trial',
      note: '14-day free trial • No credit card required • Cancel anytime'
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about getting started.',
      q1: { q: 'Do I need to change my suppliers?', a: 'Not at all. Tedaarik works with your existing suppliers. You just upload the invoices you already receive, and we handle the data extraction and analysis.' },
      q2: { q: 'Can I connect it to my e-invoice system?', a: 'Yes! We integrate with most major e-invoice systems to pull invoice data automatically, giving you real-time cost analysis.' },
      q3: { q: 'How long does setup take?', a: "Most restaurants are up and running in under 5 minutes. Just create an account, upload a few recent invoices, and you'll start seeing data immediately." },
      q4: { q: 'Is my data secure?', a: 'Absolutely. We use bank-level encryption to protect your financial data and never share your information with anyone.' },
      q5: { q: 'How much does it cost?', a: 'Tedaarik costs $30/month (50% early-bird discount for our first 100 users — normally $60/month). You can try it free for 14 days with no credit card required.' },
      q6: { q: 'What happens after the free trial?', a: 'If you subscribe, your account continues seamlessly with all your data intact. If you choose not to, your account is simply paused — no surprise charges, no data deleted.' },
      q7: { q: 'What if I need more than 5 users?', a: 'Get in touch with us at info@tedaarik.com and we\'ll set up a custom plan for your team size.' }
    },
    cta: {
      title: "Your Money Leaks Won't Wait.\nWhy Should You?",
      subtitle: "Start your free trial today and see exactly where your cash is going — before another month slips by.",
      startTrial: 'Start Your Free 14-Day Trial',
      estimate: 'Detect My Profit Leak',
      noCreditCard: 'No credit card required',
      setupFast: 'Setup in 5 minutes',
      cancel: 'Cancel anytime'
    },
    footer: translations.en.footer,
  },
  tr: {
    nav: translations.tr.nav,
    logoBelt: translations.tr.logoBelt,
    hero: {
      badge: 'Kâr sızıntısı denetimi',
      headline: 'Restoranınızdaki Gizli Para Kayıplarını Durdurun',
      description: 'Fatura verilerinizi yapay zeka ile denetleyin. Gözden kaçan tedarikçi zamlarını, birim maliyet sapmalarını ve operasyonel verimsizlikleri saniyeler içinde ortaya çıkarın.',
      startTrial: 'Ücretsiz Dene',
      estimateSavings: 'Kâr Sızıntısını Tespit Et',
      trustLine: 'Sektör ortalamaları ve analitik veri modelleri ile kıyaslar.',
      noCreditCard: 'Kredi kartı gerekmez',
      setupFast: '5 dakikada kurulum',
      imageAlt: 'Tedarikçi fiyat farkı ve kâr sızıntısı analizini gösteren Tedaarik paneli',
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
        li2: 'Manuel fatura veri girişi gecelerinizi tüketir ve hatalara sebep olur'
      },
      point3: {
        title: '"Reçete maliyetleri güncellenemez."',
        subtitle: 'Malzeme maliyetleri artar, ancak menü fiyatlarınız bazen aylarca aynı kalır.',
        li1: 'Reçete maliyetlerini güncellemek saatler hatta günler alır',
        li2: 'Hangi tabakların karlı olduğunu net göremezsiniz'
      },
      bridge: 'Bu sorunlar restoranınıza her ay ne kadara mal oluyor?',
      bridgeCta: '30 saniyede öğrenin',
    },
    calculator: {
      currency: '₺',
      title: 'Kâr Sızıntısı Denetimi',
      subtitle: 'Restoranınız her ay ne kadar para kaybediyor, öğrenin.',
      socialProof: 'Şu ana kadar 47 restoran bu denetimi çalıştırdı.',
      step1: {
        title: 'İşletme Tipiniz Nedir?',
        desc: 'Sonuçlarınızı sektör verilerine göre kişiselleştirmemizi sağlar.',
      },
      step2: {
        title: 'Aylık Yaklaşık Cironuz Nedir?',
        desc: 'Yaklaşık bir değer yeterlidir. Bu bilgi yalnızca analizinizi oluşturmak için kullanılır — kaydedilmez.',
        rangeMin: '₺100.000',
        rangeMax: '₺5.000.000+',
        back: 'Geri',
        next: 'Kayıp Raporumu Gör',
      },
      step3: {
        leakLabel: 'Aylık Para Kaybınız',
        yearlyLeakLabel: 'Yıllık Tahmini Kayıp',
        breakdownOverpayment: 'Tedarikçi Fiyat Farkı (%13)',
        breakdownWaste: 'Operasyonel Fire (%5)',
        breakdownAdmin: 'İdari Süreç Maliyetleri (%2)',
        disclaimer: 'Hesaplamalar, global restoran verimlilik standartları ve Türkiye pazarındaki güncel gıda enflasyonu baz alınarak simüle edilmiştir.',
        emailTitle: 'Detaylı Kayıp Raporunuzu Alın',
        emailDesc: 'Paranızın nereye gittiğine dair tam bir döküm göndereceğiz.',
        emailLabel: 'E-posta Adresi',
        emailPlaceholder: 'isminiz@isletmeniz.com',
        sending: 'Gönderiliyor...',
        sendBtn: 'Bu Kaybı Durdur',
        emailNote: 'Raporunuzu birkaç dakika içinde e-posta ile göndereceğiz. Satış araması yok.',
        successTitle: 'Kayıp Raporu Gönderildi!',
        successDesc1: 'Detaylı raporunuz şu adrese gönderildi: ',
        successActionDesc: 'Sızıntıyı kapatmaya hazır mısınız?',
        startTrialBtn: 'Sızıntıyı Kapatmaya Başla',
        trialNote: '14 gün boyunca tam erişim. Kredi kartı gerekmez.',
      },
    },
    features: {
      title: 'Tedaarik Sızıntıyı Nasıl Kapatıyor?',
      subtitle: 'Paranızın nereye gittiğini bulan ve kaybı durduran üç araç.',
      f1: {
        title: 'Fatura Dijitalleştirme ve Maliyet Takibi',
        desc: 'Yüklediğiniz her fatura, fazla ödemeye karşı bir veri noktasına dönüşür.',
        li1: 'Fotoğraf, e-posta veya e-fatura entegrasyonu ile yükleyin',
        li2: 'Her ürünün birim fiyatı otomatik olarak çıkarılsın',
        li3: 'Aranabilir dijital arşiv ile ön muhasebenizi kolaylaştırın'
      },
      f2: {
        title: 'Otomatik Reçete Maliyeti Hesaplama',
        desc: 'Her tabağın gerçek maliyetini bilin — marjlarınız daralmaya başladığı anda yakalayın.',
        li1: 'Malzeme fiyatları değiştiğinde reçete maliyetleri otomatik olarak güncellensin',
        li2: 'Daralan marjları anında tespit edip kolayca karar verin',
        li3: 'Hangi malzemelerin & tabakların karlarınızı yediğini görün'
      },
      f3: {
        title: 'Piyasa Fiyat Karşılaştırması',
        desc: 'Olması gerekenden fazla mı ödüyorsunuz? Verilerle kanıtlayın.',
        li1: "Satın aldığınız ürünler için fazla ödeme yapıp yapmadığınızı görün",
        li2: 'Doğrulanmış tedarikçilerden daha iyi ürünler ve fiyatlar bulun',
        li3: 'Gerçek verileri kullanarak güvenle pazarlık yapın'
      },
      cta: 'Tasarrufunuzu Görün',
    },
    videoShowcase: {
      title: 'Ürünü Keşfedin',
      subtitle: 'Her özelliği kısa videolarla tanıyın',
      v1: {
        title: 'Fatura Yükleme ve Veri Analizi',
        desc: 'Faturalarınızı yükleyin, yapay zeka verileri otomatik çıkarsın',
      },
      v2: {
        title: 'Malzemeler ve Birim Maliyet',
        desc: 'Malzeme fiyatlarını takip edin, birim maliyetleri karşılaştırın',
      },
      v3: {
        title: 'Reçete ve Menü Yönetimi',
        desc: 'AI destekli reçete maliyeti hesaplama ve menü optimizasyonu',
      },
      cta: 'Tasarrufunu Hesapla',
    },
    howItWorks: {
      title: 'Nasıl Çalışır?',
      subtitle: 'Siz faturalarınızı yükleyin. Tedaarik paranızın nereden sızdığını bulsun.',
      step1: {
        title: 'Faturalarınızı Yükleyin',
        desc: 'Fotoğraf çekin, e-posta iletin veya e-faturalarınızı bağlayın. Yapmanız gereken tek şey bu — yapay zekamız her satırı sizin yerinize okur.',
      },
      step2: {
        title: 'Tedaarik Sızıntıları Tarar',
        desc: 'Fiyat artışları, gizli sapmalar ve eriyen marjlar — sistem sizi sessizce zarara uğratan her şeyi otomatik olarak yakalar.',
      },
      step3: {
        title: 'Fazla Ödemeyi Durdurun',
        desc: 'Gerçek verilerle pazarlık yapın, menü fiyatlarınızı güncelleyin veya tedarikçi değiştirin — her karar tahmine değil, rakamlara dayansın.',
      },
      footer: 'Hepsi bu. Manuel veri girişi yok, danışman yok, Excel yok.',
      cta: 'Ücretsiz Denemenizi Başlatın',
    },
    pricing: {
      title: 'Basit, Şeffaf Fiyatlandırma',
      subtitle: 'Tek bir fark edilmeyen tedarikçi fiyat artışından daha ucuza.',
      limitedOffer: 'Sınırlı Süreli Teklif',
      perMonth: '/ay',
      saveOffer: 'İlk 100 kullanıcıya kalıcı %50 indirim — aylık tek bir kaçan fiyat farkından bile ucuz.',
      features: [
        'Sınırsız fatura yükleme',
        'Piyasa fiyat trendleri',
        'Tedarikçi fiyatlarını karşılaştırma',
        'Akıllı tasarruf ipuçları',
        'Akıllı reçete maliyeti hesaplama',
        '5 kullanıcıya kadar ekip büyüklüğü'
      ],
      startTrial: 'Ücretsiz Dene',
      note: '14 günlük ücretsiz deneme • Kredi kartı gerekmez • İstediğiniz zaman iptal edin'
    },
    faq: {
      title: 'Sıkça Sorulan Sorular',
      subtitle: 'Başlarken bilmeniz gereken her şey.',
      q1: { q: 'Tedarikçilerimi değiştirmem gerekiyor mu?', a: 'Hayır. Tedaarik, mevcut tedarikçilerinizle de çalışır. Sadece halihazırda aldığınız faturaları yüklersiniz, veri çıkarma ve analizi biz hallederiz.' },
      q2: { q: 'E-fatura sistemime bağlayabilir miyim?', a: 'Evet! Çoğu büyük e-fatura sistemiyle entegre olarak fatura verilerini otomatik çekerek bu iş yükünü omuzlarınızdan alıyor ve size gerçek zamanlı maliyet analizi sağlıyoruz.' },
      q3: { q: 'Kurulum ne kadar sürer?', a: "Çoğu restoran 5 dakikadan kısa sürede çalışmaya başlıyor. Sadece bir hesap oluşturun, birkaç yeni fatura yükleyin ve verileri hemen görmeye başlayacaksınız." },
      q4: { q: 'Verilerim güvende mi?', a: 'Kesinlikle. Finansal verilerinizi korumak için banka düzeyinde şifreleme ve anonimleştirme yapıyoruz. Hiçbir verinizi asla kimseyle paylaşmıyoruz.' },
      q5: { q: 'Ne kadar?', a: 'Tedaarik aylık ₺1.400+KDV (ilk 100 kullanıcıya özel %50 indirim — normal fiyat ₺2.800/ay). 14 gün boyunca kredi kartı gerekmeden ücretsiz deneyebilirsiniz.' },
      q6: { q: 'Ücretsiz deneme sonrası ne olur?', a: 'Abone olursanız, tüm verileriniz korunarak hesabınız kesintisiz devam eder. Abone olmazsanız hesabınız duraklatılır — sürpriz ücret yok, verileriniz silinmez.' },
      q7: { q: '5\'ten fazla kullanıcıya ihtiyacım olursa?', a: 'info@tedaarik.com adresinden bizimle iletişime geçin, ekip büyüklüğünüze uygun özel bir plan oluşturalım.' }
    },
    cta: {
      title: 'Kâr Sızıntılarınız Beklemiyor.\nSiz Neden Bekleyesiniz?',
      subtitle: "Ücretsiz denemenizi bugün başlatın ve paranızın nereye gittiğini görün — bir ay daha kaybetmeden.",
      startTrial: '14 Günlük Ücretsiz Denememi Başlat',
      estimate: 'Kâr Sızıntısını Tespit Et',
      noCreditCard: 'Kredi kartı gerekmez',
      setupFast: '5 dakikada kurulum',
      cancel: 'İstediğiniz zaman iptal edin'
    },
    footer: translations.tr.footer,
  },
};

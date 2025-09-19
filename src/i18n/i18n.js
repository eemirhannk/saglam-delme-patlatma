import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Türkçe çeviriler
const tr = {
  translation: {
    // Navbar
    navbar: {
      home: "Ana Sayfa",
      about: "Hakkımızda",
      services: "Hizmetler",
      consulting: "Danışmanlık",
      drilling: "Delme Hizmetleri",
      blasting: "Patlatma Hizmetleri",
      team: "Ekibimiz",
      publications: "Yayınlar",
      faq: "S.S.S.",
      contact: "İletişim",
      tagline: "İşinizi Sağlama Alın"
    },
    
    // Homepage
    homepage: {
      hero: {
        title: "Sağlam Delme & Patlatma",
        description: "2025'ten beri güvenli ve profesyonel delme ve patlatma hizmetleri sunuyoruz. Her projede güvenlik önceliğimizdir.",
        button: "Daha Fazla Bilgi"
      },
      carousel: {
        slide1: {
          imageTitle: "Profesyonel Ekip",
          imageDescription: "Uzman kadromuzla güvenli çözümler"
        },
        slide2: {
          title: "MWD Hizmetleri",
          description: "Measurement While Drilling (MWD) teknolojisi ile delme sırasında anlık veri toplama ve analiz imkânı sunuyoruz. Gerçek zamanlı bilgiler sayesinde, jeolojik koşulları anında okuyarak daha doğru, güvenli ve verimli çözümler üretiyoruz.",
          button: "Daha Fazla Bilgi",
          imageTitle: "MWD Teknolojisi",
          imageDescription: "Gerçek zamanlı delme verisi toplama"
        },
        slide2_5: {
          title: "Tünel Delme Hizmetleri",
          description: "Metro, karayolu ve altyapı projelerinde; jumbo delme makineleri ve en yeni teknolojilerle güvenli, hızlı ve verimli tünel açma hizmeti sunuyoruz. Uzman ekibimizle projelerinizi zamanında, güvenilir ve uluslararası standartlarda hayata geçiriyoruz.",
          button: "Daha Fazla Bilgi",
          imageTitle: "Tünel Delme",
          imageDescription: "Metro ve karayolu tüneli projeleri"
        },
        slide2_6: {
          title: "Açık Saha Delme Hizmetleri",
          description: "Madencilik, inşaat, altyapı projeleri ve temel kazılarında açık saha delme hizmetleri sunuyoruz. Özellikle meskûn mahal yakınındaki çalışmalarımızda titreşim ve gürültü kontrolünü en üst düzeyde sağlıyor; operasyonlarımızı USBM ve German DIN 4152 standartlarına uygun şekilde yürütüyoruz.",
          button: "Daha Fazla Bilgi",
          imageTitle: "Açık Saha Delme",
          imageDescription: "Madencilik ve inşaat projeleri"
        },
        slide3: {
          title: "Taş Ocağı Patlatma Hizmetleri",
          description: "Taş ocaklarında güvenli, kontrollü ve yüksek verimlilikle patlatma operasyonları gerçekleştiriyoruz. Patlatma tasarımlarımızda, hedeflenen parça boyutlandırmasını sağlayarak kırma-eleme süreçlerinde maliyet ve zaman avantajı sunuyoruz.",
          button: "Daha Fazla Bilgi",
          imageTitle: "Taş Ocağı Patlatma",
          imageDescription: "Güvenli ve verimli taş ocağı operasyonları"
        },
        slide4: {
          title: "Şehir İçi Kontrollü Patlatma Hizmetleri",
          description: "Şehir merkezlerinde hassas ve kontrollü patlatma teknikleri ile güvenli operasyonlar yürütüyoruz. Özellikle metro projeleri ve temel kazılarında; titreşim, gürültü ve toz kontrolüyle çevresel etkileri en aza indiriyor, güvenlik ve mühendislik standartlarını ön planda tutuyoruz.",
          button: "Daha Fazla Bilgi",
          imageTitle: "Şehir İçi Patlatma",
          imageDescription: "Hassas ve kontrollü şehir içi operasyonlar"
        },
        slide5: {
          title: "Su Altı Patlatma Hizmetleri",
          description: "Deniz, göl ve nehir tabanında güvenli ve kontrollü su altı patlatma operasyonları gerçekleştiriyoruz. Tamamen zararsız bir yöntem mümkün olmasa da, özel mühendislik teknikleri ve koruyucu önlemler ile çevresel etkileri en aza indirmeyi hedefliyoruz.",
          button: "Daha Fazla Bilgi",
          imageTitle: "Su Altı Patlatma",
          imageDescription: "Güvenli ve çevre dostu su altı operasyonlar"
        },
        slide6: {
          title: "Teknik Danışmanlık",
          description: "Uzman ekibimizle projeleriniz için kapsamlı teknik danışmanlık hizmetleri sunuyoruz. Her aşamada yanınızdayız.",
          button: "Daha Fazla Bilgi",
          imageTitle: "Uzman Danışmanlık",
          imageDescription: "Projelerinizde rehberlik"
        },
        navigation: {
          previous: "Önceki",
          next: "Sonraki"
        }
      },
      safety: {
        title: "Güvenlik Önceliğimiz",
        description: "Bizim için güvenlik bir seçenek değil, vazgeçilmez bir ilke. Attığımız her adımda; halkımızın, iş ortaklarımızın ve çalışanlarımızın güvenliğini en üst seviyede tutuyoruz."
      },
      services: {
        title: "Hizmetlerimiz",
        description: "Geniş hizmet yelpazemizle her türlü projeye çözüm sunuyoruz"
      },
      cta: {
        title: "Projenizi Başlatmaya Hazır mısınız?",
        description: "Uzman ekibimizle güvenli ve profesyonel delme & patlatma hizmetleri için hemen iletişime geçin.",
        button: "Bize Ulaşın"
      }
    },
    
    // About Page
    about: {
      title: "Hakkımızda",
      subtitle: "Neler Yapıyoruz?",
      description: "Sağlam Delme & Patlatma olarak, 2025'ten beri madencilik, inşaat ve altyapı projelerinde güvenli ve etkili delme ve patlatma hizmetleri sunuyoruz. Uzman ekibimiz ve modern ekipmanlarımızla, en zorlu projeleri başarıyla tamamlıyoruz.",
      content: {
        paragraph1: "<strong>Sağlam Delme & Patlatma</strong>, uzun yıllara dayanan tecrübenin, güçlü saha pratiğinin ve mühendislik disiplininin birleşiminden doğmuş bir <strong>uzmanlık markasıdır</strong>.",
        paragraph2: "Kurucumuz; <strong>sualtı patlatmalardan, tünel, metro, otoyol ve liman projelerine, taş ocaklarından büyük altyapı ve kanal çalışmalarına</strong> kadar sektörün en zorlu ve kritik alanlarında görev alarak değerli bir mühendislik birikimi kazanmıştır.",
        paragraph3: "Ayrıca, <strong>Avrupa, Afrika ve Güney Amerika'daki uluslararası projelerde</strong> elde edilen deneyimler, firmamıza farklı coğrafyalarda karşılaşılan zorlukları aşma, çok kültürlü iş ortamlarında çalışma ve <strong>küresel ölçekte en iyi uygulamaları projelerimize entegre etme avantajı</strong> kazandırmıştır.",
        paragraph4: "Bu köklü birikim üzerine inşa edilen firmamız; <strong>açık saha ve tünel uygulamalarında güvenli, verimli ve kontrollü delme-patlatma çözümleri</strong> sunmaktadır. Her projeye <strong>mühendislik temelli bir vizyon</strong> ile yaklaşır, <strong>en yüksek iş güvenliği standartlarını</strong> uygular, <strong>çevresel etkileri minimuma indirir</strong> ve işveren için <strong>maksimum fayda ile sürdürülebilir sonuçlar</strong> üretir.",
        paragraph5: "Sahip olduğumuz <strong>deneyim, teknik kapasite ve çözüm odaklı yaklaşım sayesinde, sektörde güvenilir, yenilikçi ve uluslararası standartlarda bir çözüm ortağı</strong> olmayı hedefliyoruz."
      },
      whyUs: {
        title: "Neden Biz?",
        description: "Uzman kadromuz ve modern ekipmanlarımızla her projede mükemmellik hedefliyoruz.",
        advantages: "BAZI",
        advantages2: "AVANTAJLARIMIZ !",
        tagline1: "Profesyonel işin güvenilir ortağı.",
        tagline2: "Her detayda kalite, her aşamada özen.",
        expert: "Uzman Kadro",
        expertDesc: "Yüksek deneyime sahip mühendis ve operatörler",
        equipment: "Modern Ekipman",
        equipmentDesc: "En son teknoloji delme ve patlatma sistemleri",
        safety: "Güvenlik",
        safetyDesc: "Tüm çalışmalarımız yerel ve uluslararası güvenlik standartlarına uygun olarak yürütülür.",
        environment: "Çevre Bilinci",
        environmentDesc: "Çevresel etkiyi minimize eden yöntemler kullanıyoruz"
      }
    },
    
    // Drilling Page
    drilling: {
      title: "MWD",
      subtitle: "Delme Esnasında Ölçüm",
      description: "MWD, sondaj sırasında penetrasyon hızı, tork, basınç ve yön gibi parametreleri anlık olarak kaydeden ve yüzeye aktaran bir teknolojidir. Bu sayede maden ve tünel projelerinde jeolojik belirsizlikler azaltılır, güvenlik artırılır ve operasyon verimliliği yükseltilir."
    },
    
    // Blasting Page
    blasting: {
      quarry: {
        title: "TAŞ OCAĞI PATLATMALARI"
      },
      urban: {
        title: "ŞEHİR İÇİ PATLATMALAR",
      },
      underwater: {
        title: "KONTROLLÜ SUALTI PATLATMALARI",
      }
    },
    
    // Consulting Page
    consulting: {
      title: "Danışmanlık",
      subtitle: "Uzman ekibimizle projeleriniz için teknik danışmanlık ve rehberlik hizmetleri sunuyoruz.",
      process: {
        title: "Çalışma Sürecimiz"
      },
      cta: {
        title: "Danışmanlık Hizmetlerimizden Yararlanın",
        description: "Projeleriniz için uzman danışmanlık hizmeti almak için hemen iletişime geçin.",
        button: "İletişime Geçin"
      }
    },
    
    // Team Page
    team: {
      title: "Ekibimiz",
      subtitle: "Uzman Kadromuz",
      description: "Deneyimli ve uzman ekibimizle çalışın, \"İşinizi Sağlama Alın\".",
      member: {
        name: "Rıza Sağlam",
        position: "Kurucu & Genel Müdür",
        education: "Patlayıcı Mühendisliği Yüksek Lisans",
        expertise: "Patlayıcı Mühendisi & Patlatma Uzmanı",
        description: "<strong>Karadeniz Teknik Üniversitesi'ndeki lisans eğitiminden sonra</strong>, Okan Üniversitesi <strong>Patlayıcı Mühendisliği Tezli Yüksek Lisans Programı</strong>'na kaydolmuş ve bu programı başarıyla tamamlayarak uzmanlık alanını derinleştirmiştir.",
        career: {
          title: "Kariyer Geçmişi",
          items: [
            "Afrika'daki altyapı projelerinde <strong>Patlatma Mühendisliği</strong>",
            "Türkiye'nin büyük ölçekli köprü ve otoyol projelerinde <strong>Patlatma Kısım Şefliği</strong>",
            "İstanbul metro projelerinde <strong>Tünel ve Patlatma İşleri Şefliği</strong>",
            "Avrupa'da yürütülen tünel projelerinde <strong>Delme-Patlatma Şefliği</strong>",
            "Güney Amerika, Uruguay'da <strong>su altı patlatma uygulamalarında uzmanlık</strong>"
          ]
        },
      },
      cta: {
        title: "Uzman Ekibimizle Çalışmak İster misiniz?",
        description: "Projeleriniz için güvenilir ve profesyonel hizmet almak için hemen iletişime geçin.",
        button: "İletişime Geçin"
      }
    },
    
    // Contact Page
    contact: {
      title: "Bize Ulaşın",
      form: {
        companyType: "Müşteri Tipi",
        serviceType: "Hizmet Türü",
        name: "Ad Soyad",
        email: "E-posta",
        phone: "Telefon",
        subject: "Konu",
        message: "Mesaj",
        submit: "Gönder",
        success: "Mesajınız başarıyla gönderildi!",
        error: "Mesaj gönderilirken bir hata oluştu."
      }
    },
    
    // Drilling Page
    drilling: {
      mwd: {
        title: "MWD",
        subtitle: "Delme Esnasında Ölçüm",
        description: "MWD, sondaj sırasında penetrasyon hızı, tork, basınç ve yön gibi parametreleri anlık olarak kaydeden ve yüzeye aktaran bir teknolojidir. Bu sayede maden ve tünel projelerinde jeolojik belirsizlikler azaltılır, güvenlik artırılır ve operasyon verimliliği yükseltilir."
      },
      applications: {
        geological: "Jeolojik Modelleme",
        geologicalDesc: "Kaya sertliği, çatlaklık ve su zonları MWD verileriyle belirlenir.",
        support: "Tahkimat Tasarımı",
        supportDesc: "Kaya bulonu, püskürtme beton veya çelik hasır ihtiyacı önceden belirlenir.",
        efficiency: "Verimlilik",
        efficiencyDesc: "Delme parametrelerinin optimizasyonu ile daha hızlı ilerleme sağlanır.",
        environmental: "Çevresel Fayda",
        environmentalDesc: "Kontrollü patlatma sayesinde titreşim ve çevresel etkiler azaltılır.",
        ore: "Cevher – Yan Kaya Ayrımı",
        oreDesc: "Altın, bakır ve diğer değerli cevherlerin damarları daha doğru belirlenir, kayıplar minimize edilir.",
        blasting: "Patlatma Optimizasyonu",
        blastingDesc: "Daha kontrollü kırılma, düşük patlayıcı tüketimi ve yüksek cevher kazanımı sağlanır.",
        safety: "Güvenlik",
        safetyDesc: "Su girişi, boşluk veya zayıf zonlar önceden tespit edilerek iş güvenliği artırılır.",
        economic: "Ekonomik Verimlilik",
        economicDesc: "Daha az kırma–nakliye maliyeti ve daha hızlı üretim."
      }
    },
    
    // Blasting Page
    blasting: {
      quarry: {
        title: "TAŞ OCAĞI PATLATMALARI",
        description: "Taş ocaklarında patlatmanın temel amacı, kayaçları ekonomik ve güvenli bir şekilde kırma-eleme tesislerine uygun boyutlarda parçalara ayırmaktır.",
        paragraph1: "Delme ve patlatma operasyonlarımızda, kaya yapısına uygun delik desenleri ve patlayıcı yükleri ile yüksek verimlilik sağlıyoruz. Patlatma tasarımlarımız, parçalanma verimliliğini artırarak ikincil kırma ihtiyacını azaltacak şekilde optimize edilmiştir.",
        paragraph2: "Operasyonlarımız USBM ve DIN 4150 standartlarına uygun olarak yürütülür. Yerleşim alanlarına yakınlık durumuna göre tasarlanan patlatmalar ile titreşim ve gürültü kontrolü sağlanarak çevredeki yerleşimler, altyapı tesisleri ve doğal çevre korunur. Geoteknik parametreler dikkate alınarak şev stabilitesi, güvenli kazı ve optimal parça boyutu sağlanır.",
        paragraph3: "İş güvenliği tüm operasyonlarımızın merkezinde yer alır. Kontrollü patlatma sistemleri, güvenlik protokollerine uygun saha düzenlemeleri ve sürekli izleme ile hem çalışanlarımızın hem de çevrenin güvenliği sağlanır."
      },
      urban: {
        title: "ŞEHİR İÇİ PATLATMALAR",
        description: "Şehir içi patlatmalar, hassas çevre koşulları nedeniyle yüksek dikkat ve kontrol gerektirir. Planlı patlatma ile USBM ve DIN 4250 normlarına uygun olarak titreşim, gürültü ve taş fırlaması minimize edilerek çevredeki yapılar, altyapı tesisleri ve insanlar korunur."
      },
      underwater: {
        title: "KONTROLLÜ SUALTI PATLATMALARI",
        description: "Deniz, göl veya nehir tabanında yapılan kazı ve inşaat çalışmalarında kullanılan su altı patlatmaları, çevreye ve canlı yaşama zarar vermeden, kontrollü bir şekilde kaya ve beton yapıların parçalanmasını sağlar.",
        paragraph1: "Su altı patlatma operasyonlarımızda, yüksek su basıncına dayanıklı özel patlayıcı sistemler ve su geçirmez fünye teknolojileri kullanılmaktadır. Operasyonlar sırasında su canlılarının korunması için özel önlemler alınır ve çevresel etki minimize edilir.",
        paragraph2: "Dalga ve akıntı koşullarına uygun operasyon planlaması ile güvenli ve verimli kazı işlemleri gerçekleştirilir. Su altı görüntüleme ve izleme teknolojileri ile sürekli kontrol sağlanarak proje hedeflerine ulaşılır."
      },
      standards: {
        title: "Kullanılan Standartlar",
        usbm: "USBM Normları",
        usbmDesc: "Patlatma titreşimlerinin yapılara etkisini sınırlar ve güvenlik sınırlarını belirler.",
        din: "DIN 4150 / 4250 Normları",
        dinDesc: "Alman standartları olup hem insan konforu hem de yapı güvenliği için titreşim sınırlarını belirler."
      },
      principles: {
        title: "Uygulama Esasları",
        vibration: "Titreşim Kontrolü",
        vibrationDesc: "Patlatma tasarımı, çevredeki yapı ve binalara zarar vermeyecek şekilde hesaplanır.",
        loading: "Patlayıcı Yükleme",
        loadingDesc: "Delik başına maksimum patlayıcı miktarı sınırlandırılır.",
        timing: "Zaman Gecikmeleri",
        timingDesc: "Elektronik fünye ile kontrollü gecikmeler kullanılarak titreşim ve gürültü azaltılır.",
        flyrock: "Taş Fırlaması Önlemleri",
        flyrockDesc: "Delik ağzı sıkıca tıkanır ve güvenlik mesafeleri gözetilir."
      },
      benefits: {
        title: "Çevresel ve Teknik Faydalar",
        building: "Çevredeki yapıların korunması",
        noise: "Gürültü ve titreşim değerlerinin yasal sınırların altında tutulması",
        safety: "İş güvenliği ve çevre güvenliğinin sağlanması",
        reporting: "Proje süresince şeffaf raporlama (titreşim ölçüm cihazları ile kayıt)"
      },
      underwaterApplications: {
        title: "Uygulama Alanları",
        port: "Liman ve Rıhtım İnşaatları",
        portDesc: "Deniz tabanında güvenli kazı ve temel hazırlığı için kontrollü patlatma",
        dam: "Baraj ve Hidroelektrik Projeleri",
        damDesc: "Su altında kaya kazısı ve tünel açma işlemleri",
        bridge: "Köprü Ayakları ve Viyadükler",
        bridgeDesc: "Nehir ve göl tabanında temel kazısı ve kaya temizliği",
        tunnel: "Deniz Tüneli Projeleri",
        tunnelDesc: "Su altı geçişlerinde güvenli kazı ve açma işlemleri"
      },
      underwaterBenefits: {
        title: "Teknik Özellikler",
        environmental: "Çevresel etkiyi minimize eden kontrollü patlatma",
        marine: "Su canlılarının korunması için özel önlemler",
        pressure: "Yüksek su basıncına dayanıklı patlayıcı sistemler",
        monitoring: "Su altı görüntüleme ve izleme teknolojileri",
        planning: "Dalga ve akıntı koşullarına uygun operasyon planlaması"
      }
    },
    
    // Consulting Page
    consulting: {
      title: "Danışmanlık",
      subtitle: "Uzman ekibimizle projeleriniz için teknik danışmanlık ve rehberlik hizmetleri sunuyoruz.",
      hero: {
        description: "Sağlam Delme Patlatma Ltd. Şti., delme-patlatma uygulamalarının yanı sıra ruhsat süreçleri, patlayıcı dizayn çalışmaları ve MWD verilerine dayalı teknik optimizasyon konularında danışmanlık hizmeti sunar. Deneyimli mühendis kadrosu ile projelere her aşamada teknik refakat ederek güvenli, verimli ve çevreye duyarlı çözümler üretir."
      },
      services: {
        permit: "Ruhsat Süreçleri",
        permitDesc: "Delme ve patlatma projeleri için gerekli tüm ruhsat süreçlerinde teknik danışmanlık ve rehberlik hizmeti sunuyoruz.",
        design: "Patlayıcı Dizayn",
        designDesc: "Proje özelliklerine uygun patlayıcı dizayn çalışmaları ve güvenlik analizleri gerçekleştiriyoruz.",
        optimization: "Teknik Optimizasyon",
        optimizationDesc: "MWD verilerine dayalı teknik optimizasyon çalışmaları ile proje verimliliğini artırıyoruz.",
        support: "Teknik Refakat",
        supportDesc: "Deneyimli mühendis kadromuzla projelerinize her aşamada teknik refakat sağlıyoruz."
      },
      process: {
        title: "Çalışma Sürecimiz",
        analysis: "Proje Analizi",
        analysisDesc: "Projenizin teknik gereksinimlerini detaylı olarak analiz ediyoruz.",
        solution: "Çözüm Tasarımı",
        solutionDesc: "Size özel güvenli ve verimli çözümler tasarlıyoruz.",
        implementation: "Uygulama Desteği",
        implementationDesc: "Projenizin her aşamasında teknik destek sağlıyoruz.",
        evaluation: "Sonuç Değerlendirme",
        evaluationDesc: "Proje sonuçlarını değerlendirip optimizasyon önerileri sunuyoruz."
      },
      cta: {
        title: "Danışmanlık Hizmetlerimizden Yararlanın",
        description: "Uzman ekibimizle projelerinize değer katacak danışmanlık hizmetleri sunuyoruz.",
        button: "İletişime Geçin"
      }
    },
    
    // Not Found Page
    notFound: {
      title: "Sayfa Bulunamadı",
      description: "Aradığınız sayfa mevcut değil veya taşınmış olabilir.",
      homeButton: "Ana Sayfaya Dön",
      contactButton: "İletişime Geç",
      imageAlt: "Patlatma sonrası görünüm"
    },
    
    // Contact Page
    contact: {
      title: "Bize Ulaşın",
      form: {
        companyType: "Müşteri Tipi",
        serviceType: "Hizmet Türü",
        name: "Ad Soyad",
        companyName: "Şirket Adı",
        email: "E-posta",
        phone: "Telefon",
        subject: "Konu",
        message: "Mesaj",
        submit: "Mesaj Gönder",
        submitting: "Gönderiliyor...",
        selectOption: "Seçiniz",
        individual: "Şahıs",
        company: "Firma",
        drilling: "Delme Hizmetleri",
        blasting: "Patlatma Hizmetleri",
        consulting: "Danışmanlık",
        other: "Diğer",
        namePlaceholder: "Adınızı ve soyadınızı girin",
        companyPlaceholder: "Şirket adınızı girin",
        emailPlaceholder: "E-posta adresinizi girin",
        phonePlaceholder: "Telefon numaranızı girin",
        subjectPlaceholder: "Mesaj konusunu girin",
        messagePlaceholder: "Mesajınızı buraya yazın",
        success: "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.",
        error: "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin veya telefon ile iletişime geçin."
      }
    },
    
    // Footer
    footer: {
      contact: "İletişim",
      copyright: "Tüm hakları saklıdır",
      copyrightFull: "© 2025 Sağlam Delme & Patlatma. Tüm hakları saklıdır",
      address: "Tığcılar Mahallesi Pamuklar<br />Sokak No : 14 İç Kapı No: 302<br />Adapazarı / SAKARYA"
    },
    
    // Error
    error: {
      title: "Oops! Bir hata oluştu",
      description: "Sayfa yüklenirken bir sorun yaşandı. Lütfen sayfayı yenileyin.",
      refreshButton: "Sayfayı Yenile",
    },
    
    // Loading
    loading: {
      screenReader: "Yükleniyor...",
      text: "Sayfa yükleniyor..."
    },
    
    // Images Alt Texts
    images: {
      team: "Sağlam Delme & Patlatma ekibi - 2025'ten beri güvenli hizmet",
      logo: "Sağlam Delme & Patlatma logosu - Güvenli sondaj ve patlatma hizmetleri",
      whyUs: "Neden Sağlam Delme & Patlatma - Uzman kadro ve modern ekipmanlar",
      quarry: "Taş ocağında güvenli ve kontrollü patlatma işlemi - Sağlam Delme & Patlatma",
      urban1: "Şehir içi kontrollü patlatma işlemi - Güvenli ve profesyonel hizmet",
      urban2: "Şehir merkezinde güvenli patlatma operasyonu - Sağlam Delme & Patlatma",
      underwater: "Su altı kontrollü patlatma işlemi - Deniz ve göl tabanında güvenli operasyon",
      companyLogo: "Sağlam Delme & Patlatma"
    },
    
    // Services Data
    services: {
      drilling: {
        title: "Delme Hizmetleri",
        description: "Hassas delme teknikleri ile her türlü malzeme ve zemin koşulunda çalışıyoruz."
      },
      mwdServices: {
        title: "MWD Hizmetleri",
        description: "Delme esnasında ölçüm teknolojisi ile jeolojik veri toplama ve analiz hizmetleri."
      },
      tunnelDrilling: {
        title: "Tünel Delme Hizmetleri",
        description: "Metro, karayolu tünelleri ve altyapı projeleri için özel tünel delme teknikleri."
      },
      openFieldDrilling: {
        title: "Açık Saha Delme Hizmetleri",
        description: "Madencilik, inşaat ve altyapı projeleri için açık saha delme operasyonları."
      },
      blasting: {
        title: "Patlatma Hizmetleri",
        description: "Güvenli ve kontrollü patlatma teknikleri ile büyük ölçekli projeler gerçekleştiriyoruz."
      },
      quarryBlasting: {
        title: "Taş Ocağı Patlatmaları",
        description: "Taş ocaklarında güvenli ve verimli patlatma operasyonları ile optimal parça boyutu sağlıyoruz."
      },
      urbanBlasting: {
        title: "Şehir İçi Patlatmalar",
        description: "Hassas çevre koşullarında kontrollü patlatma ile titreşim ve gürültü kontrolü sağlıyoruz."
      },
      underwaterBlasting: {
        title: "Su Altı Patlatmalar",
        description: "Deniz, göl ve nehir tabanında çevre dostu kontrollü patlatma hizmetleri sunuyoruz."
      },
      emergency: {
        title: "Acil Müdahale",
        description: "Acil durumlar için her zaman hazırız."
      },
      underwater: {
        title: "Su Altı İşleri",
        description: "Sertifikalı dalgıç ekibimizle su altı delme ve patlatma hizmetleri."
      },
      demolition: {
        title: "Yıkım İşleri",
        description: "Binalar, köprüler ve beton yapılar için güvenli yıkım hizmetleri."
      },
      consulting: {
        title: "Danışmanlık",
        description: "Uzman ekibimizle projeleriniz için teknik danışmanlık ve rehberlik hizmetleri sunuyoruz."
      }
    },
    
    // Safety Features
    safetyFeatures: {
      experience: {
        title: "10+ Yıllık Tecrübe",
        description: "On yılı aşkın birikimimizle, sadece iş değil, güven ve kalite inşa ediyoruz. Tecrübemizle projelerinizi güvenle geleceğe taşıyoruz."
      },
      technology: {
        title: "Modern Teknoloji",
        description: "Sektörün en güncel ekipmanları ve yenilikçi çözümleriyle, işinizin her aşamasında maksimum verimlilik ve kusursuz kalite sağlıyoruz."
      },
      safety: {
        title: "Güvenlik Standartları",
        description: "Uluslararası güvenlik normlarını aşan yaklaşımımızla, her projede sıfır risk hedefiyle hareket ediyoruz. Çünkü işinizi sağlama almak bizim işimiz."
      }
    },
    
    // FAQ Page
    faq: {
      seo: {
        title: "Sıkça Sorulan Sorular | Sağlam Delme & Patlatma",
        description: "Delme ve patlatma hizmetlerimiz hakkında en çok sorulan sorular ve cevapları. Müşterilerimizin merak ettiği konular hakkında detaylı bilgiler.",
        keywords: "sıkça sorulan sorular, FAQ, delme hizmetleri, patlatma hizmetleri, MWD, su altı patlatma, şehir içi patlatma, güvenlik, çevre"
      },
      hero: {
        title: "Sıkça Sorulan Sorular",
        subtitle: "Delme ve patlatma hizmetlerimiz hakkında merak ettiğiniz her şey"
      },
      categories: {
        general: "Genel Hizmetler",
        technical: "Teknik Hizmetler",
        team: "Ekip ve Deneyim",
        environment: "Çevre ve Güvenlik",
        process: "İletişim ve Proje Süreci",
        cost: "Maliyet ve Süre",
        emergency: "Acil Durumlar"
      },
      questions: {
        services: {
          question: "Sağlam Delme & Patlatma hangi hizmetleri sunuyor?",
          answer: "Delme hizmetleri (MWD destekli tünel delme, açık saha delme), patlatma hizmetleri (taş ocağı, altyapı projeleri, meskun mahal temel kazıları, liman işleri için su altı) ve danışmanlık hizmetleri sunuyoruz."
        },
        sectors: {
          question: "Hangi sektörlerde çalışıyorsunuz?",
          answer: "Madencilik, inşaat ve altyapı projelerinde çalışıyoruz. Metro, köprü, tünel, baraj, liman gibi büyük ölçekli projelerde uzmanız."
        },
        founded: {
          question: "Şirketiniz ne zaman kuruldu?",
          answer: "Sağlam Delme & Patlatma 2025 yılında kurulmuştur. Kurucumuz Rıza Sağlam'ın 10+ yıllık deneyimi ile güçlü bir temel üzerine inşa edilmiştir."
        },
        mwd: {
          question: "MWD (Delme Esnasında Ölçüm) teknolojisi nedir?",
          answer: "MWD, sondaj sırasında penetrasyon hızı, tork, basınç ve yön gibi parametreleri anlık olarak kaydeden ve yüzeye aktaran bir teknolojidir. Bu sayede maden ve tünel projelerinde jeolojik belirsizlikler azaltılır, güvenlik artırılır ve operasyon verimliliği yükseltilir."
        },
        underwater: {
          question: "Su altı patlatma hizmetleriniz hangi projelerde kullanılır?",
          answer: "Liman ve rıhtım inşaatları, baraj ve hidroelektrik projeleri, köprü ayakları ve viyadükler, deniz tüneli projeleri gibi su altı altyapı projelerinde kontrollü patlatma hizmetleri sunuyoruz."
        },
        urbanSafety: {
          question: "Şehir içi patlatmalarda güvenlik önlemleriniz nelerdir?",
          answer: "Çevredeki yapıların korunması, gürültü ve titreşim değerlerinin yasal sınırların altında tutulması, iş güvenliği ve çevre güvenliğinin sağlanması için kapsamlı önlemler alıyoruz. Proje süresince, titreşim ölçüm cihazları ile yapılan kayıtlar sayesinde şeffaf raporlama sağlıyor; bu süreçte üniversiteler ile iş birliği yaparak bilimsel destekli ve güvenilir sonuçlar elde ediyoruz."
        },
        leader: {
          question: "Ekip liderinizin deneyimi nedir?",
          answer: "Rıza Sağlam, 10+ yıl deneyime sahip Patlayıcı Mühendisliği Yüksek Lisans mezunudur. Türkiye, Afrika, Avrupa ve Güney Amerika'da büyük ölçekli projelerde görev almıştır. Liderliğini yaptığı Sağlam Delme & Patlatma, delme-patlatma alanında uzmanlaşmış, deneyimli mühendis kadrosu ve kalifiye ateşçi personeliyle güvenli, verimli ve uluslararası standartlarda çözümler sunmaktadır."
        },
        certifications: {
          question: "Hangi sertifikalara sahipsiniz?",
          answer: "Patlayıcı Mühendisi sertifikası, sertifikalı dalgıç ekibi ve uluslararası güvenlik standartları uyumluluğu sertifikalarımız bulunmaktadır. Tüm çalışmalarımız yerel ve uluslararası standartlara uygun olarak yürütülür."
        },
        environmentalImpact: {
          question: "Çevresel etkiyi nasıl minimize ediyorsunuz?",
          answer: "Çevre dostu ve kontrollü patlatma yöntemleri uyguluyor, su canlılarının korunması için özel önlemler alıyoruz. Çevresel etkiyi minimize eden teknolojiler kullanıyor, tüm projelerimizde çevre duyarlılığını öncelikli tutuyoruz. Ulusal ve uluslararası patlatma normlarına (USBM, German DIN 4152 vb.) uygun çalışıyor; bu normların takibini sürekli ölçüm, raporlama ve denetim mekanizmalarıyla sağlıyoruz. Ayrıca, her proje özelinde dizayn revizeleri yaparak süreçleri optimize ediyor, verimliliği sürekli artırıyoruz."
        },
        safetyStandards: {
          question: "Güvenlik standartlarınız nelerdir?",
          answer: "Yerel ve uluslararası güvenlik standartlarına tam uyumluluk, her projede güvenlik önceliği, sürekli güvenlik eğitimleri ve denetimler, modern güvenlik ekipmanları kullanımı ile en yüksek güvenlik standartlarını sağlıyoruz."
        },
        workflow: {
          question: "Proje süreciniz nasıl işliyor?",
          answer: "1) Analiz ve değerlendirme, 2) Çözüm tasarımı, 3) Uygulama, 4) Değerlendirme ve raporlama aşamalarından oluşan sistematik bir süreç izliyoruz. Her aşamada müşteri ile şeffaf iletişim kuruyoruz."
        },
        regions: {
          question: "Hangi bölgelerde hizmet veriyorsunuz?",
          answer: "Türkiye genelinde hizmet veriyoruz. Ayrıca uluslararası projelerde de çalışıyoruz (Afrika, Avrupa, Güney Amerika). Proje lokasyonuna göre mobil ekiplerimizle hizmet sunuyoruz."
        },
        quote: {
          question: "Proje teklifi nasıl alabilirim?",
          answer: "Proje teklifi almak için iletişim sayfamızdaki formu doldurabilir, telefonla doğrudan bizimle iletişime geçebilir veya e-posta yoluyla bilgi talebinde bulunabilirsiniz. Talebiniz sonrası öncelikli olarak keşif ve saha kontrolü yapılmakta, ardından 1-5 iş günü içerisinde kapsamlı teklif hazırlanmaktadır."
        },
        pricing: {
          question: "Proje maliyetleri nasıl belirleniyor?",
          answer: "Proje kapsamı, karmaşıklığı, lokasyonu ve süresine göre değişkenlik gösterir. Detaylı analiz sonrası şeffaf fiyatlandırma politikamızla teklif hazırlıyoruz. Her proje için özel değerlendirme yapıyoruz."
        },
        duration: {
          question: "Proje süreleri ne kadar?",
          answer: "Proje büyüklüğüne ve karmaşıklığına göre değişkenlik gösterir. Küçük projeler birkaç gün, büyük ölçekli projeler ise aylar sürebilir. Ön analiz sonrası net süre belirlenir ve müşteriye bildirilir."
        },
        emergencyResponse: {
          question: "Acil müdahale hizmetiniz var mı?",
          answer: "Evet, acil durumlar için 7/24 hazır ekibimiz bulunmaktadır. Hızlı müdahale ve çözüm üretme kapasitesi ile acil durumlarda anında destek sağlıyoruz."
        }
      },
      cta: {
        title: "Sorunuzun Cevabını Bulamadınız mı?",
        description: "Uzman ekibimizle iletişime geçin, size özel çözümler sunalım.",
        button: "İletişime Geçin"
      }
    },

    // Common
    common: {
      details: "Detaylar",
      learnMore: "Daha Fazla Bilgi",
      readMore: "Devamını Oku",
      close: "Kapat",
      loading: "Yükleniyor...",
      error: "Hata",
      success: "Başarılı"
    }
  }
};

// İngilizce çeviriler
const en = {
  translation: {
    // Navbar
    navbar: {
      home: "Home",
      about: "About Us",
      services: "Services",
      consulting: "Consulting",
      drilling: "Drilling Services",
      blasting: "Blasting Services",
      team: "Our Team",
      publications: "Publications",
      faq: "FAQ",
      contact: "Contact",
      tagline: "Secure Your Business"
    },
    
    // Homepage
    homepage: {
      hero: {
        title: "Sağlam Drilling & Blasting",
        description: "Since 2025, we have been providing safe and professional drilling and blasting services. Safety is our priority in every project.",
        button: "Learn More"
      },
      carousel: {
        slide1: {
          imageTitle: "Professional Team",
          imageDescription: "Safe solutions with our expert staff"
        },
        slide2: {
          title: "MWD Services",
          description: "We provide instant data collection and analysis capabilities during drilling with Measurement While Drilling (MWD) technology. Thanks to real-time information, we produce more accurate, safe and efficient solutions by instantly reading geological conditions.",
          button: "Learn More",
          imageTitle: "MWD Technology",
          imageDescription: "Real-time drilling data collection"
        },
        slide2_5: {
          title: "Tunnel Drilling Services",
          description: "In metro, highway and infrastructure projects; we provide safe, fast and efficient tunnel opening services with jumbo drilling machines and the latest technologies. With our expert team, we bring your projects to life on time, reliably and to international standards.",
          button: "Learn More",
          imageTitle: "Tunnel Drilling",
          imageDescription: "Metro and highway tunnel projects"
        },
        slide2_6: {
          title: "Open Field Drilling Services",
          description: "We provide open field drilling services for mining, construction, infrastructure projects and foundation excavations. We ensure the highest level of vibration and noise control, especially in our work near residential areas; we conduct our operations in accordance with USBM and German DIN 4152 standards.",
          button: "Learn More",
          imageTitle: "Open Field Drilling",
          imageDescription: "Mining and construction projects"
        },
        slide3: {
          title: "Quarry Blasting Services",
          description: "We carry out safe, controlled and highly efficient blasting operations in quarries. In our blasting designs, we provide cost and time advantages in crushing-screening processes by ensuring the targeted particle sizing.",
          button: "Learn More",
          imageTitle: "Quarry Blasting",
          imageDescription: "Safe and efficient quarry operations"
        },
        slide4: {
          title: "Urban Controlled Blasting Services",
          description: "We carry out safe operations with precise and controlled blasting techniques in city centers. Especially in metro projects and foundation excavations; we minimize environmental impacts through vibration, noise and dust control, prioritizing safety and engineering standards.",
          button: "Learn More",
          imageTitle: "Urban Blasting",
          imageDescription: "Precise and controlled urban operations"
        },
        slide5: {
          title: "Underwater Blasting Services",
          description: "We carry out safe and controlled underwater blasting operations on seabed, lake and river beds. While a completely harmless method may not be possible, we aim to minimize environmental impacts through special engineering techniques and protective measures.",
          button: "Learn More",
          imageTitle: "Underwater Blasting",
          imageDescription: "Safe and environmentally friendly underwater operations"
        },
        slide6: {
          title: "Technical Consulting",
          description: "We provide comprehensive technical consulting services for your projects with our expert team. We are with you at every stage.",
          button: "Learn More",
          imageTitle: "Expert Consulting",
          imageDescription: "Guidance in your projects"
        },
        navigation: {
          previous: "Previous",
          next: "Next"
        }
      },
      safety: {
        title: "Safety is Our Priority",
        description: "Safety is not an option for us, it is a mandatory principle. We always keep the safety of our people, our partners and our environment at the highest level."
      },
      services: {
        title: "Our Services",
        description: "We provide solutions for all kinds of projects with our wide range of services"
      },
      cta: {
        title: "Ready to Start Your Project?",
        description: "Contact us immediately for safe and professional drilling & blasting services with our expert team.",
        button: "Contact Us"
      }
    },
    
    // About Page
    about: {
      title: "About Us",
      subtitle: "What Do We Do?",
      description: "As Sağlam Drilling & Blasting, we have been providing safe and effective drilling and blasting services in mining, construction and infrastructure projects since 2025. With our expert team and modern equipment, we successfully complete the most challenging projects.",
      content: {
        paragraph1: "<strong>Sağlam Drilling & Blasting</strong> is an <strong>expertise brand</strong> born from the combination of long-standing experience, strong field practice and engineering discipline.",
        paragraph2: "Our founder has gained valuable engineering expertise by taking part in the most challenging and critical areas of the sector, from <strong>underwater blasting to tunnel, metro, highway and port projects, from quarries to large infrastructure and canal works</strong>.",
        paragraph3: "In addition, the experiences gained in international projects in <strong>Europe, Africa and South America</strong> have given our company the advantage of overcoming challenges encountered in different geographies, working in multicultural business environments and <strong>integrating global best practices into our projects</strong>.",
        paragraph4: "Our company, built on this deep-rooted accumulation; provides <strong>safe, efficient and controlled drilling-blasting solutions in open field and tunnel applications</strong>. It approaches each project with an <strong>engineering-based vision</strong>, applies the <strong>highest occupational safety standards</strong>, <strong>minimizes environmental impacts</strong> and produces <strong>sustainable results with maximum benefit</strong> for the employer.",
        paragraph5: "Thanks to our <strong>experience, technical capacity and solution-oriented approach</strong>, we aim to be a <strong>reliable, innovative and internationally standard solution partner</strong> in the sector."
      },
      whyUs: {
        title: "Why Us?",
        description: "We aim for excellence in every project with our expert staff and modern equipment.",
        advantages: "SOME OF OUR",
        advantages2: "ADVANTAGES !",
        tagline1: "Reliable partner of professional work.",
        tagline2: "Quality in every detail, care in every stage.",
        expert: "Expert Staff",
        expertDesc: "Engineers and operators with high experience",
        equipment: "Modern Equipment",
        equipmentDesc: "Latest technology drilling and blasting systems",
        safety: "Safety",
        safetyDesc: "All our work is carried out in accordance with local and international safety standards.",
        environment: "Environmental Awareness",
        environmentDesc: "We use methods that minimize environmental impact"
      }
    },
    
    // Drilling Page
    drilling: {
      title: "MWD",
      subtitle: "Measurement While Drilling",
      description: "MWD is a technology that records and transmits to the surface parameters such as penetration rate, torque, pressure and direction during drilling in real time. This reduces geological uncertainties in mining and tunnel projects, increases safety and improves operational efficiency."
    },
    
    // Blasting Page
    blasting: {
      quarry: {
        title: "QUARRY BLASTING",
      },
      urban: {
        title: "URBAN BLASTING",
      },
      underwater: {
        title: "CONTROLLED UNDERWATER BLASTING",
      }
    },
    
    // Consulting Page
    consulting: {
      title: "Consulting",
      subtitle: "We provide technical consulting and guidance services for your projects with our expert team.",
      process: {
        title: "Our Working Process"
      },
      cta: {
        title: "Benefit from Our Consulting Services",
        description: "Contact us immediately to get expert consulting service for your projects.",
        button: "Contact Us"
      }
    },
    
    // Team Page
    team: {
      title: "Our Team",
      subtitle: "Expert Staff",
      description: "Work with our experienced and expert team, \"Secure Your Business\".",
      member: {
        name: "Rıza Sağlam",
        position: "Founder & General Manager",
        education: "Explosive Engineering Master's Degree",
        expertise: "Explosive Engineer & Blasting Expert",
        description: "After his <strong>undergraduate education at Karadeniz Technical University</strong>, he enrolled in Okan University <strong>Explosive Engineering Master's Program</strong> and successfully completed this program, deepening his expertise in this field.",
        career: {
          title: "Career History",
          items: [
            "<strong>Explosive Engineering</strong> in Africa's infrastructure projects",
            "<strong>Explosive Section Supervision</strong> in Turkey's large-scale bridge and highway projects",
            "<strong>Tunnel and Blasting Works Supervision</strong> in Istanbul metro projects",
            "<strong>Drilling-Blasting Supervision</strong> in tunnel projects conducted in Europe",
            "Expertise in <strong>underwater blasting applications</strong> in Uruguay, South America"
          ]
        },
      },
      cta: {
        title: "Would You Like to Work with Our Expert Team?",
        description: "Contact us immediately for reliable and professional service for your projects.",
        button: "Contact Us"
      }
    },
    
    // Contact Page
    contact: {
      title: "Contact Us",
      form: {
        companyType: "Customer Type",
        serviceType: "Service Type",
        name: "Full Name",
        email: "Email",
        phone: "Phone",
        subject: "Subject",
        message: "Message",
        submit: "Send",
        success: "Your message has been sent successfully!",
        error: "An error occurred while sending the message."
      }
    },
    
    // Drilling Page
    drilling: {
      mwd: {
        title: "MWD",
        subtitle: "Measurement While Drilling",
        description: "MWD is a technology that records and transmits to the surface parameters such as penetration rate, torque, pressure and direction during drilling in real time. This reduces geological uncertainties in mining and tunnel projects, increases safety and improves operational efficiency."
      },
      applications: {
        geological: "Geological Modeling",
        geologicalDesc: "Rock hardness, fracturing and water zones are determined with MWD data.",
        support: "Support Design",
        supportDesc: "Rock bolt, shotcrete or steel mesh requirements are determined in advance.",
        efficiency: "Efficiency",
        efficiencyDesc: "Faster progress is achieved through optimization of drilling parameters.",
        environmental: "Environmental Benefit",
        environmentalDesc: "Vibration and environmental impacts are reduced through controlled blasting.",
        ore: "Ore – Waste Rock Separation",
        oreDesc: "Veins of gold, copper and other valuable ores are determined more accurately, losses are minimized.",
        blasting: "Blasting Optimization",
        blastingDesc: "More controlled fracturing, low explosive consumption and high ore recovery are achieved.",
        safety: "Safety",
        safetyDesc: "Water ingress, voids or weak zones are detected in advance, increasing work safety.",
        economic: "Economic Efficiency",
        economicDesc: "Less crushing-transportation cost and faster production."
      }
    },
    
    // Blasting Page
    blasting: {
      quarry: {
        title: "QUARRY BLASTING",
        description: "The main purpose of blasting in quarries is to break rocks into pieces of suitable sizes for crushing-screening plants economically and safely.",
        paragraph1: "In our drilling and blasting operations, we provide high efficiency with hole patterns and explosive loads suitable for rock structure. Our blasting designs are optimized to increase fragmentation efficiency and reduce secondary crushing needs.",
        paragraph2: "Our operations are carried out in accordance with USBM and DIN 4150 standards. With blasting designed according to proximity to residential areas, vibration and noise control is provided, protecting surrounding settlements, infrastructure facilities and natural environment. Considering geotechnical parameters, slope stability, safe excavation and optimal fragment size are ensured.",
        paragraph3: "Work safety is at the center of all our operations. With controlled blasting systems, site arrangements in accordance with safety protocols and continuous monitoring, the safety of both our employees and the environment is ensured."
      },
      urban: {
        title: "URBAN BLASTING",
        description: "Urban blasting requires high attention and control due to sensitive environmental conditions. With planned blasting in accordance with USBM and DIN 4250 standards, vibration, noise and flyrock are minimized, protecting surrounding structures, infrastructure facilities and people."
      },
      underwater: {
        title: "CONTROLLED UNDERWATER BLASTING",
        description: "Underwater blasting used in excavation and construction works on seabed, lakebed or riverbed ensures controlled fragmentation of rock and concrete structures without harming the environment and living organisms.",
        paragraph1: "In our underwater blasting operations, special explosive systems resistant to high water pressure and waterproof detonator technologies are used. Special measures are taken to protect marine life during operations and environmental impact is minimized.",
        paragraph2: "Safe and efficient excavation operations are carried out with operation planning suitable for wave and current conditions. Continuous control is provided with underwater imaging and monitoring technologies and project goals are achieved."
      },
      standards: {
        title: "Standards Used",
        usbm: "USBM Standards",
        usbmDesc: "Limits the effect of blasting vibrations on structures and determines safety limits.",
        din: "DIN 4150 / 4250 Standards",
        dinDesc: "German standards that determine vibration limits for both human comfort and structural safety."
      },
      principles: {
        title: "Application Principles",
        vibration: "Vibration Control",
        vibrationDesc: "Blasting design is calculated to not damage surrounding structures and buildings.",
        loading: "Explosive Loading",
        loadingDesc: "Maximum explosive amount per hole is limited.",
        timing: "Time Delays",
        timingDesc: "Controlled delays using electronic detonators reduce vibration and noise.",
        flyrock: "Flyrock Prevention",
        flyrockDesc: "Hole mouth is tightly plugged and safety distances are observed."
      },
      benefits: {
        title: "Environmental and Technical Benefits",
        building: "Protection of surrounding structures",
        noise: "Keeping noise and vibration values below legal limits",
        safety: "Ensuring work safety and environmental safety",
        reporting: "Transparent reporting throughout the project (recording with vibration measurement devices)"
      },
      underwaterApplications: {
        title: "Application Areas",
        port: "Port and Wharf Construction",
        portDesc: "Controlled blasting for safe excavation and foundation preparation on seabed",
        dam: "Dam and Hydroelectric Projects",
        damDesc: "Underwater rock excavation and tunnel opening operations",
        bridge: "Bridge Piers and Viaducts",
        bridgeDesc: "Foundation excavation and rock cleaning on river and lake beds",
        tunnel: "Undersea Tunnel Projects",
        tunnelDesc: "Safe excavation and opening operations in underwater passages"
      },
      underwaterBenefits: {
        title: "Technical Features",
        environmental: "Controlled blasting that minimizes environmental impact",
        marine: "Special measures for protection of marine life",
        pressure: "Explosive systems resistant to high water pressure",
        monitoring: "Underwater imaging and monitoring technologies",
        planning: "Operation planning suitable for wave and current conditions"
      }
    },
    
    // About Page
    
    // Consulting Page
    consulting: {
      title: "Consulting",
      subtitle: "We provide technical consulting and guidance services for your projects with our expert team.",
      hero: {
        description: "Sağlam Drilling & Blasting Ltd., in addition to drilling-blasting applications, provides consulting services in permit processes, explosive design studies and technical optimization based on MWD data. With its experienced engineering staff, it provides technical support to projects at every stage and produces safe, efficient and environmentally sensitive solutions."
      },
      services: {
        permit: "Permit Processes",
        permitDesc: "We provide technical consulting and guidance services in all necessary permit processes for drilling and blasting projects.",
        design: "Explosive Design",
        designDesc: "We carry out explosive design studies and safety analyses suitable for project characteristics.",
        optimization: "Technical Optimization",
        optimizationDesc: "We increase project efficiency through technical optimization studies based on MWD data.",
        support: "Technical Support",
        supportDesc: "We provide technical support at every stage of your projects with our experienced engineering staff."
      },
      process: {
        title: "Our Working Process",
        analysis: "Project Analysis",
        analysisDesc: "We analyze the technical requirements of your project in detail.",
        solution: "Solution Design",
        solutionDesc: "We design safe and efficient solutions specific to you.",
        implementation: "Implementation Support",
        implementationDesc: "We provide technical support at every stage of your project.",
        evaluation: "Result Evaluation",
        evaluationDesc: "We evaluate project results and provide optimization recommendations."
      },
      cta: {
        title: "Benefit from Our Consulting Services",
        description: "We provide consulting services that will add value to your projects with our expert team.",
        button: "Contact Us"
      }
    },
    
    // Not Found Page
    notFound: {
      title: "Page Not Found",
      description: "The page you are looking for does not exist or may have been moved.",
      homeButton: "Go to Home",
      contactButton: "Contact Us",
      imageAlt: "Post-blasting view"
    },
    
    // Contact Page
    contact: {
      title: "Contact Us",
      form: {
        companyType: "Customer Type",
        serviceType: "Service Type",
        name: "Full Name",
        companyName: "Company Name",
        email: "Email",
        phone: "Phone",
        subject: "Subject",
        message: "Message",
        submit: "Send Message",
        submitting: "Sending...",
        selectOption: "Select",
        individual: "Individual",
        company: "Company",
        drilling: "Drilling Services",
        blasting: "Blasting Services",
        consulting: "Consulting",
        other: "Other",
        namePlaceholder: "Enter your first and last name",
        companyPlaceholder: "Enter your company name",
        emailPlaceholder: "Enter your email address",
        phonePlaceholder: "Enter your phone number",
        subjectPlaceholder: "Enter message subject",
        messagePlaceholder: "Write your message here",
        success: "Your message has been sent successfully! We will get back to you as soon as possible.",
        error: "An error occurred while sending the message. Please try again or contact us by phone."
      }
    },
    
    // Footer
    footer: {
      contact: "Contact",
      copyright: "All rights reserved",
      copyrightFull: "© 2025 Sağlam Delme & Patlatma. All rights reserved",
      address: "Tığcılar Mahallesi Pamuklar<br />Sokak No : 14 İç Kapı No: 302<br />Adapazarı / SAKARYA"
    },
    
    // Error
    error: {
      title: "Oops! An error occurred",
      description: "A problem occurred while loading the page. Please refresh the page.",
      refreshButton: "Refresh Page",
    },
    
    // Loading
    loading: {
      screenReader: "Loading...",
      text: "Page is loading..."
    },
    
    // Images Alt Texts
    images: {
      team: "Sağlam Delme & Patlatma team - Safe service since 2025",
      logo: "Sağlam Delme & Patlatma logo - Safe drilling and blasting services",
      whyUs: "Why Sağlam Delme & Patlatma - Expert staff and modern equipment",
      quarry: "Safe and controlled blasting operation in quarry - Sağlam Delme & Patlatma",
      urban1: "Urban controlled blasting operation - Safe and professional service",
      urban2: "Safe blasting operation in city center - Sağlam Delme & Patlatma",
      underwater: "Underwater controlled blasting operation - Safe operation on sea and lake floor",
      companyLogo: "Sağlam Delme & Patlatma"
    },
    
    // Services Data
    services: {
      drilling: {
        title: "Drilling Services",
        description: "We work in all kinds of materials and ground conditions with precise drilling techniques."
      },
      mwdServices: {
        title: "MWD Services",
        description: "Geological data collection and analysis services with measurement while drilling technology."
      },
      tunnelDrilling: {
        title: "Tunnel Drilling Services",
        description: "Special tunnel drilling techniques for metro, highway tunnels and infrastructure projects."
      },
      openFieldDrilling: {
        title: "Open Field Drilling Services",
        description: "Open field drilling operations for mining, construction and infrastructure projects."
      },
      blasting: {
        title: "Blasting Services",
        description: "We carry out large-scale projects with safe and controlled blasting techniques."
      },
      quarryBlasting: {
        title: "Quarry Blasting",
        description: "We provide optimal fragment size with safe and efficient blasting operations in quarries."
      },
      urbanBlasting: {
        title: "Urban Blasting",
        description: "We provide vibration and noise control with controlled blasting in sensitive environmental conditions."
      },
      underwaterBlasting: {
        title: "Underwater Blasting",
        description: "We provide environmentally friendly controlled blasting services on sea, lake and river beds."
      },
      emergency: {
        title: "Emergency Response",
        description: "We are always ready for emergencies."
      },
      underwater: {
        title: "Underwater Works",
        description: "Underwater drilling and blasting services with our certified diving team."
      },
      demolition: {
        title: "Demolition Works",
        description: "Safe demolition services for buildings, bridges and concrete structures."
      },
      consulting: {
        title: "Consulting",
        description: "We provide technical consulting and guidance services for your projects with our expert team."
      }
    },
    
    // Safety Features
    safetyFeatures: {
      experience: {
        title: "10+ Years Experience",
        description: "With our 10+ years of experience, we build not just work, but safety and quality. We carry your projects safely to the future with our experience."
      },
      technology: {
        title: "Modern Technology",
        description: "With the latest technology equipment and innovative solutions, we provide maximum efficiency and flawless quality in every stage of your projects."
      },
      safety: {
        title: "Safety Standards",
        description: "With our approach exceeding international safety standards, we move forward with zero risk in every project. Because delivering your project safely is our mission."
      }
    },
    
    // FAQ Page
    faq: {
      seo: {
        title: "Frequently Asked Questions | Sağlam Drilling & Blasting",
        description: "Most frequently asked questions and answers about our drilling and blasting services. Detailed information about topics our customers are curious about.",
        keywords: "frequently asked questions, FAQ, drilling services, blasting services, MWD, underwater blasting, urban blasting, safety, environment"
      },
      hero: {
        title: "Frequently Asked Questions",
        subtitle: "Everything you want to know about our drilling and blasting services"
      },
      categories: {
        general: "General Services",
        technical: "Technical Services",
        team: "Team and Experience",
        environment: "Environment and Safety",
        process: "Communication and Project Process",
        cost: "Cost and Duration",
        emergency: "Emergency Situations"
      },
      questions: {
        services: {
          question: "What services does Sağlam Drilling & Blasting offer?",
          answer: "We offer drilling services (MWD-supported tunnel drilling, open field drilling), blasting services (quarry, infrastructure projects, residential area foundation excavations, underwater for port works) and consulting services."
        },
        sectors: {
          question: "Which sectors do you work in?",
          answer: "We work in mining, construction and infrastructure projects. We are experts in large-scale projects such as metro, bridge, tunnel, dam, port."
        },
        founded: {
          question: "When was your company founded?",
          answer: "Sağlam Drilling & Blasting was founded in 2025. It was built on a strong foundation with the 10+ years of experience of our founder Rıza Sağlam."
        },
        mwd: {
          question: "What is MWD (Measurement While Drilling) technology?",
          answer: "MWD is a technology that records and transmits to the surface parameters such as penetration rate, torque, pressure and direction during drilling in real time. This reduces geological uncertainties in mining and tunnel projects, increases safety and improves operational efficiency."
        },
        underwater: {
          question: "In which projects are your underwater blasting services used?",
          answer: "We provide controlled blasting services in underwater infrastructure projects such as port and wharf construction, dam and hydroelectric projects, bridge piers and viaducts, undersea tunnel projects."
        },
        urbanSafety: {
          question: "What are your safety measures in urban blasting?",
          answer: "We take comprehensive measures to protect surrounding structures, keep noise and vibration values below legal limits, and ensure work safety and environmental safety. Throughout the project, we provide transparent reporting through recordings made with vibration measurement devices; in this process, we collaborate with universities to achieve scientifically supported and reliable results."
        },
        leader: {
          question: "What is the experience of your team leader?",
          answer: "Rıza Sağlam is a Master's degree graduate in Explosive Engineering with 10+ years of experience. He has taken part in large-scale projects in Turkey, Africa, Europe and South America. Sağlam Drilling & Blasting, which he leads, provides safe, efficient and internationally standard solutions with its specialized, experienced engineering staff and qualified blasting personnel in the drilling-blasting field."
        },
        certifications: {
          question: "What certifications do you have?",
          answer: "We have Explosive Engineer certification, certified diving team and international safety standards compliance certificates. All our work is carried out in accordance with local and international standards."
        },
        environmentalImpact: {
          question: "How do you minimize environmental impact?",
          answer: "We apply environmentally friendly and controlled blasting methods, take special measures for the protection of marine life. We use technologies that minimize environmental impact and prioritize environmental sensitivity in all our projects. We work in compliance with national and international blasting standards (USBM, German DIN 4152, etc.); we ensure the follow-up of these standards through continuous measurement, reporting and monitoring mechanisms. In addition, we optimize processes and continuously increase efficiency by making design revisions specific to each project."
        },
        safetyStandards: {
          question: "What are your safety standards?",
          answer: "We ensure the highest safety standards with full compliance with local and international safety standards, safety priority in every project, continuous safety training and inspections, and use of modern safety equipment."
        },
        workflow: {
          question: "How does your project process work?",
          answer: "We follow a systematic process consisting of 1) Analysis and evaluation, 2) Solution design, 3) Implementation, 4) Evaluation and reporting. We maintain transparent communication with the customer at every stage."
        },
        regions: {
          question: "In which regions do you provide services?",
          answer: "We provide services throughout Turkey. We also work on international projects (Africa, Europe, South America). We provide services with our mobile teams according to project location."
        },
        quote: {
          question: "How can I get a project quote?",
          answer: "To get a project quote, you can fill out the form on our contact page, contact us directly by phone, or request information via email. After your request, we primarily conduct site exploration and control, then prepare a comprehensive quote within 1-5 business days."
        },
        pricing: {
          question: "How are project costs determined?",
          answer: "It varies according to project scope, complexity, location and duration. We prepare quotes with our transparent pricing policy after detailed analysis. We make special evaluations for each project."
        },
        duration: {
          question: "How long are project durations?",
          answer: "It varies according to project size and complexity. Small projects can take a few days, while large-scale projects can take months. The exact duration is determined after preliminary analysis and communicated to the customer."
        },
        emergencyResponse: {
          question: "Do you have emergency response service?",
          answer: "Yes, we have a 24/7 ready team for emergencies. We provide immediate support in emergency situations with our rapid response and solution generation capacity."
        }
      },
      cta: {
        title: "Couldn't Find the Answer to Your Question?",
        description: "Contact our expert team, let us offer you special solutions.",
        button: "Contact Us"
      }
    },

    // Common
    common: {
      details: "Details",
      learnMore: "Learn More",
      readMore: "Read More",
      close: "Close",
      loading: "Loading...",
      error: "Error",
      success: "Success"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      tr,
      en
    },
    lng: 'tr', // Varsayılan dil Türkçe
    fallbackLng: 'tr',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;

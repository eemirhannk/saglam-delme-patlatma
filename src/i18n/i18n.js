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
      projectManagement: "Proje Yönetimi",
      team: "Ekibimiz",
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
          description: "Measurement While Drilling (MWD) teknolojisi ile delme sırasında gerçek zamanlı veri toplama ve analiz hizmetleri sunuyoruz. Modern sondaj teknolojileri ile projelerinizi optimize ediyoruz.",
          button: "Daha Fazla Bilgi",
          imageTitle: "MWD Teknolojisi",
          imageDescription: "Gerçek zamanlı delme verisi toplama"
        },
        slide2_5: {
          title: "Tünel Delme Hizmetleri",
          description: "Metro, karayolu tünelleri ve altyapı projeleri için özel tünel delme teknikleri. Modern ekipmanlarımız ve uzman ekibimizle güvenli ve verimli tünel açma hizmetleri sunuyoruz.",
          button: "Daha Fazla Bilgi",
          imageTitle: "Tünel Delme",
          imageDescription: "Metro ve karayolu tüneli projeleri"
        },
        slide2_6: {
          title: "Açık Saha Delme Hizmetleri",
          description: "Madencilik, inşaat ve altyapı projeleri için açık saha delme operasyonları. Modern sondaj ekipmanlarımız ve uzman ekibimizle güvenli ve verimli delme hizmetleri sunuyoruz.",
          button: "Daha Fazla Bilgi",
          imageTitle: "Açık Saha Delme",
          imageDescription: "Madencilik ve inşaat projeleri"
        },
        slide3: {
          title: "Taş Ocağı Patlatma Hizmetleri",
          description: "Taş ocaklarında güvenli ve verimli patlatma operasyonları gerçekleştiriyoruz. USBM ve DIN standartlarına uygun çalışıyoruz.",
          button: "Daha Fazla Bilgi",
          imageTitle: "Taş Ocağı Patlatma",
          imageDescription: "Güvenli ve verimli taş ocağı operasyonları"
        },
        slide4: {
          title: "Şehir İçi Patlatma Hizmetleri",
          description: "Şehir merkezlerinde hassas ve kontrollü patlatma teknikleri ile güvenli operasyonlar yürütüyoruz. Çevre koruma önceliğimizdir.",
          button: "Daha Fazla Bilgi",
          imageTitle: "Şehir İçi Patlatma",
          imageDescription: "Hassas ve kontrollü şehir içi operasyonlar"
        },
        slide5: {
          title: "Su Altı Patlatma Hizmetleri",
          description: "Deniz, göl ve nehir tabanında güvenli su altı patlatma operasyonları gerçekleştiriyoruz. Çevre dostu teknolojiler kullanıyoruz.",
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
        description: "Her kararımız, halkın, ortaklarımızın ve çalışanlarımızın güvenliği üzerine kuruludur."
      },
      services: {
        title: "Hizmetlerimiz",
        description: "Geniş hizmet yelpazemizle her türlü projeye çözüm sunuyoruz",
        projectManagement: {
          title: "Proje Yönetimi",
          description: "Uzman ekibimizle projelerinizi planlama aşamasından teslim aşamasına kadar yönetiyoruz."
        }
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
      whyUs: {
        title: "Neden Biz?",
        description: "Uzman kadromuz ve modern ekipmanlarımızla her projede mükemmellik hedefliyoruz."
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
        experience: "10+ Yıl Deneyim",
        education: "Jeoloji Mühendisliği",
        education2: "Patlayıcı Mühendisliği Yüksek Lisans",
        expertise: "Patlayıcı Mühendisi & Patlatma Uzmanı",
        description: "Sakarya'da doğan Rıza Sağlam, ilköğretim, ortaöğretim ve lise eğitimini burada tamamladıktan sonra, Karadeniz Teknik Üniversitesi Jeoloji Mühendisliği Bölümü'nden derece ile mezun olmuştur. Lisans eğitiminin ardından Okan Üniversitesi Patlayıcı Mühendisliği Tezli Yüksek Lisans Programı'na kaydolmuş ve uzmanlık alanını bu doğrultuda geliştirmiştir.",
        company: {
          title: "Şirket Kuruluşu",
          description: "2025 yılında kendi soyadını taşıyan Sağlam Patlatma Ltd. Şti.'yi kurarak, Türkiye'de bilimsel tabana dayalı, uluslararası tecrübe ile desteklenmiş bir patlayıcı mühendisliği hizmeti vizyonunu hayata geçirmiştir. Firma, hem yurt içi hem de yurt dışındaki projelerde uzman mühendis kadrosu ile güvenli, ekonomik ve çevresel normlara uygun çözümler üretmeyi misyon edinmiştir."
        },
        career: {
          title: "Kariyer Geçmişi",
          items: [
            "Türkiye'nin büyük ölçekli köprü ve otoyol projelerinde patlatma şefliği",
            "İstanbul metro projelerinde şehir içi zorlu jeoteknik koşullarda delme-patlatma tasarımları",
            "Afrika'daki altyapı projelerinde farklı jeolojik koşullarda deneyim",
            "Avrupa'da yürütülen tünel projelerinde uluslararası normlara uygun patlatma yönetimi",
            "Güney Amerika Uruguay'da deniz altı patlatma işlerinde uzmanlık"
          ]
        },
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
    
    // About Page
    about: {
      title: "Hakkımızda",
      subtitle: "Neler Yapıyoruz?",
      description: "Sağlam Delme & Patlatma olarak, 2025'ten beri madencilik, inşaat ve altyapı projelerinde güvenli ve etkili delme ve patlatma hizmetleri sunuyoruz. Uzman ekibimiz ve modern ekipmanlarımızla, en zorlu projeleri başarıyla tamamlıyoruz.",
      content: {
        paragraph1: "Sağlam, delme ve patlatma alanında uzun yıllara dayanan tecrübenin, güçlü saha pratiğinin ve mühendislik disiplininin bir araya gelmesiyle kurulmuştur.",
        paragraph2: "Firmamızın kurucusu, yıllar boyunca; sualtı ve offshore patlatmalardan, tünel, metro, otoyol projelerine; taş ocaklarından büyük altyapı ve kanal çalışmalarına kadar sektörün hemen her alanında aktif olarak görev almıştır.",
        paragraph3: "Bu birikim doğrultusunda Sağlam Delme & Patlatma hem açık saha hem de tünel uygulamalarında; güvenli, verimli ve kontrollü delme-patlatma çözümleri sunar. Amacımız; her projeye mühendislik temelli yaklaşarak, yüksek iş güvenliği standartlarına bağlı, çevresel etkileri minimuma indiren ve işverene maksimum fayda sağlayan uygulamalar gerçekleştirmektir.",
        paragraph4: "Sahip olduğumuz tecrübe, ekipman altyapısı ve çözüm odaklı yaklaşım sayesinde, sektörde güvenilir bir çözüm ortağı olmayı hedefliyoruz."
      },
      whyUs: {
        title: "Neden Biz?",
        description: "Uzman kadromuz ve modern ekipmanlarımızla her projede mükemmellik hedefliyoruz.",
        advantages: "BAZI ARTILARIMIZ",
        advantages2: "VAR !",
        tagline1: "Profesyonel işlerin güvenilir ortağı.",
        tagline2: "Her detayda kalite, her aşamada özen.",
        expert: "Uzman Kadro",
        expertDesc: "Yüksek deneyime sahip mühendis ve operatörler",
        equipment: "Modern Ekipman",
        equipmentDesc: "Son teknoloji sondaj ve patlatma sistemleri",
        safety: "Güvenlik",
        safetyDesc: "Tüm işlerimiz, yerel ve uluslararası güvenlik standartlarına uygun olarak yürütülür.",
        environment: "Çevre Duyarlılığı",
        environmentDesc: "Çevresel etkiyi en aza indiren yöntemler kullanıyoruz"
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
        title: "10+ Yıl Deneyim",
        description: "Sektörde uzun yıllara dayanan tecrübemizle güvenilir hizmet sunuyoruz."
      },
      technology: {
        title: "Modern Teknoloji",
        description: "En son teknoloji ekipmanlarla en yüksek kaliteyi hedefliyoruz."
      },
      safety: {
        title: "Güvenlik Önceliği",
        description: "Her projede güvenlik standartlarını en üst seviyede tutuyoruz."
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
          answer: "Delme hizmetleri (MWD, tünel delme, açık saha delme), patlatma hizmetleri (taş ocağı, şehir içi, su altı) ve danışmanlık ile proje yönetimi hizmetleri sunuyoruz."
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
          answer: "Çevredeki yapıların korunması, gürültü ve titreşim değerlerinin yasal sınırların altında tutulması, iş güvenliği ve çevre güvenliğinin sağlanması, proje süresince şeffaf raporlama (titreşim ölçüm cihazları ile kayıt) gibi kapsamlı güvenlik önlemleri alıyoruz."
        },
        leader: {
          question: "Ekip liderinizin deneyimi nedir?",
          answer: "Rıza Sağlam, 10+ yıl deneyime sahip Jeoloji Mühendisi ve Patlayıcı Mühendisliği Yüksek Lisans mezunudur. Türkiye, Afrika, Avrupa ve Güney Amerika'da büyük ölçekli projelerde çalışmıştır."
        },
        certifications: {
          question: "Hangi sertifikalara sahipsiniz?",
          answer: "Patlayıcı Mühendisi sertifikası, sertifikalı dalgıç ekibi ve uluslararası güvenlik standartları uyumluluğu sertifikalarımız bulunmaktadır. Tüm çalışmalarımız yerel ve uluslararası standartlara uygun olarak yürütülür."
        },
        environmentalImpact: {
          question: "Çevresel etkiyi nasıl minimize ediyorsunuz?",
          answer: "Çevre dostu kontrollü patlatma yöntemleri, su canlılarının korunması için özel önlemler, çevresel etkiyi minimize eden teknolojiler kullanıyoruz. Tüm projelerimizde çevre duyarlılığı önceliğimizdir."
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
          answer: "İletişim sayfamızdaki formu doldurarak, telefon ile direkt iletişim kurarak veya e-posta ile detaylı bilgi talebinde bulunarak proje teklifi alabilirsiniz. Proje detaylarınızı aldıktan sonra 24-48 saat içinde kapsamlı teklif hazırlıyoruz."
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
      projectManagement: "Project Management",
      team: "Our Team",
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
          description: "We provide real-time data collection and analysis services during drilling with Measurement While Drilling (MWD) technology. We optimize your projects with modern drilling technologies.",
          button: "Learn More",
          imageTitle: "MWD Technology",
          imageDescription: "Real-time drilling data collection"
        },
        slide2_5: {
          title: "Tunnel Drilling Services",
          description: "Special tunnel drilling techniques for metro, highway tunnels and infrastructure projects. We provide safe and efficient tunnel opening services with our modern equipment and expert team.",
          button: "Learn More",
          imageTitle: "Tunnel Drilling",
          imageDescription: "Metro and highway tunnel projects"
        },
        slide2_6: {
          title: "Open Field Drilling Services",
          description: "Open field drilling operations for mining, construction and infrastructure projects. We provide safe and efficient drilling services with our modern drilling equipment and expert team.",
          button: "Learn More",
          imageTitle: "Open Field Drilling",
          imageDescription: "Mining and construction projects"
        },
        slide3: {
          title: "Quarry Blasting Services",
          description: "We carry out safe and efficient blasting operations in quarries. We work in accordance with USBM and DIN standards.",
          button: "Learn More",
          imageTitle: "Quarry Blasting",
          imageDescription: "Safe and efficient quarry operations"
        },
        slide4: {
          title: "Urban Blasting Services",
          description: "We carry out safe operations with precise and controlled blasting techniques in city centers. Environmental protection is our priority.",
          button: "Learn More",
          imageTitle: "Urban Blasting",
          imageDescription: "Precise and controlled urban operations"
        },
        slide5: {
          title: "Underwater Blasting Services",
          description: "We carry out safe underwater blasting operations on seabed, lake and river beds. We use environmentally friendly technologies.",
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
        description: "Every decision we make is based on the safety of the public, our partners and our employees."
      },
      services: {
        title: "Our Services",
        description: "We provide solutions for all kinds of projects with our wide range of services",
        projectManagement: {
          title: "Project Management",
          description: "We manage your projects from the planning stage to the delivery stage with our expert team."
        }
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
      whyUs: {
        title: "Why Us?",
        description: "We aim for excellence in every project with our expert staff and modern equipment."
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
        experience: "10+ Years Experience",
        education: "Geological Engineering",
        education2: "Explosive Engineering Master's Degree",
        expertise: "Explosive Engineer & Blasting Expert",
        description: "Born in Sakarya, Rıza Sağlam completed his primary, secondary and high school education there, then graduated with honors from Karadeniz Technical University Geological Engineering Department. After his undergraduate education, he enrolled in Okan University Explosive Engineering Master's Program and developed his expertise in this field.",
        company: {
          title: "Company Foundation",
          description: "In 2025, he founded Sağlam Patlatma Ltd., carrying his own surname, and realized his vision of providing explosive engineering services based on scientific foundations and supported by international experience in Turkey. The company has adopted the mission of producing safe, economical and environmentally compliant solutions with expert engineering staff in both domestic and international projects."
        },
        career: {
          title: "Career History",
          items: [
            "Blasting supervision in Turkey's large-scale bridge and highway projects",
            "Drilling-blasting designs in challenging urban geotechnical conditions in Istanbul metro projects",
            "Experience in different geological conditions in Africa's infrastructure projects",
            "International standard blasting management in tunnel projects conducted in Europe",
            "Expertise in underwater blasting works in Uruguay, South America"
          ]
        },
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
    about: {
      title: "About Us",
      subtitle: "What Do We Do?",
      description: "As Sağlam Drilling & Blasting, we have been providing safe and effective drilling and blasting services in mining, construction and infrastructure projects since 2025. With our expert team and modern equipment, we successfully complete the most challenging projects.",
      content: {
        paragraph1: "Sağlam was established by bringing together long-standing experience in the field of drilling and blasting, strong field practice and engineering discipline.",
        paragraph2: "The founder of our company has been actively involved in almost every field of the sector for years; from underwater and offshore blasting to tunnel, metro, highway projects; from quarries to large infrastructure and canal works.",
        paragraph3: "Based on this accumulation, Sağlam Drilling & Blasting offers safe, efficient and controlled drilling-blasting solutions in both open field and tunnel applications. Our aim is to approach each project with an engineering-based approach, to carry out applications that adhere to high occupational safety standards, minimize environmental impacts and provide maximum benefit to the employer.",
        paragraph4: "Thanks to our experience, equipment infrastructure and solution-oriented approach, we aim to be a reliable solution partner in the sector."
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
        title: "25+ Years Experience",
        description: "We provide reliable service with our long-standing experience in the sector."
      },
      technology: {
        title: "Modern Technology",
        description: "We aim for the highest quality with the latest technology equipment."
      },
      safety: {
        title: "Safety Priority",
        description: "We keep safety standards at the highest level in every project."
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
          answer: "We offer drilling services (MWD, tunnel drilling, open field drilling), blasting services (quarry, urban, underwater) and consulting with project management services."
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
          answer: "We take comprehensive safety measures such as protection of surrounding structures, keeping noise and vibration values below legal limits, ensuring work safety and environmental safety, transparent reporting throughout the project (recording with vibration measurement devices)."
        },
        leader: {
          question: "What is the experience of your team leader?",
          answer: "Rıza Sağlam is a Geological Engineer with 10+ years of experience and a Master's degree in Explosive Engineering. He has worked on large-scale projects in Turkey, Africa, Europe and South America."
        },
        certifications: {
          question: "What certifications do you have?",
          answer: "We have Explosive Engineer certification, certified diving team and international safety standards compliance certificates. All our work is carried out in accordance with local and international standards."
        },
        environmentalImpact: {
          question: "How do you minimize environmental impact?",
          answer: "We use environmentally friendly controlled blasting methods, special measures for protection of marine life, and technologies that minimize environmental impact. Environmental sensitivity is our priority in all our projects."
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
          answer: "You can get a project quote by filling out the form on our contact page, contacting us directly by phone, or requesting detailed information by email. After receiving your project details, we prepare a comprehensive quote within 24-48 hours."
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

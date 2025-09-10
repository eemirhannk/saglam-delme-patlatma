import React from 'react';
import './BlastingPage.css';
import quarryImage from '@public/images/quarry-blasting.jpeg';
import urbanImage from '@public/images/sehiricipatlatma.jpeg';
import urbanImage2 from '@public/images/sehiricipatlatma2.jpeg';
import underwaterImage from '@public/images/sualti4.jpeg';

function BlastingPage() {
  const standards = [
    {
      id: 1,
      title: "USBM Normları",
      description: "Patlatma titreşimlerinin yapılara etkisini sınırlar ve güvenlik sınırlarını belirler."
    },
    {
      id: 2,
      title: "DIN 4150 / 4250 Normları",
      description: "Alman standartları olup hem insan konforu hem de yapı güvenliği için titreşim sınırlarını belirler."
    }
  ];

  const principles = [
    {
      id: 1,
      title: "Titreşim Kontrolü",
      description: "Patlatma tasarımı, çevredeki yapı ve binalara zarar vermeyecek şekilde hesaplanır."
    },
    {
      id: 2,
      title: "Patlayıcı Yükleme",
      description: "Delik başına maksimum patlayıcı miktarı sınırlandırılır."
    },
    {
      id: 3,
      title: "Zaman Gecikmeleri",
      description: "Elektronik fünye ile kontrollü gecikmeler kullanılarak titreşim ve gürültü azaltılır."
    },
    {
      id: 4,
      title: "Taş Fırlaması Önlemleri",
      description: "Delik ağzı sıkıca tıkanır ve güvenlik mesafeleri gözetilir."
    }
  ];

  const benefits = [
    "Çevredeki yapıların korunması",
    "Gürültü ve titreşim değerlerinin yasal sınırların altında tutulması",
    "İş güvenliği ve çevre güvenliğinin sağlanması",
    "Proje süresince şeffaf raporlama (titreşim ölçüm cihazları ile kayıt)"
  ];

  const underwaterApplications = [
    {
      id: 1,
      title: "Liman ve Rıhtım İnşaatları",
      description: "Deniz tabanında güvenli kazı ve temel hazırlığı için kontrollü patlatma"
    },
    {
      id: 2,
      title: "Baraj ve Hidroelektrik Projeleri",
      description: "Su altında kaya kazısı ve tünel açma işlemleri"
    },
    {
      id: 3,
      title: "Köprü Ayakları ve Viyadükler",
      description: "Nehir ve göl tabanında temel kazısı ve kaya temizliği"
    },
    {
      id: 4,
      title: "Deniz Tüneli Projeleri",
      description: "Su altı geçişlerinde güvenli kazı ve açma işlemleri"
    }
  ];

  const underwaterBenefits = [
    "Çevresel etkiyi minimize eden kontrollü patlatma",
    "Su canlılarının korunması için özel önlemler",
    "Yüksek su basıncına dayanıklı patlayıcı sistemler",
    "Su altı görüntüleme ve izleme teknolojileri",
    "Dalga ve akıntı koşullarına uygun operasyon planlaması"
  ];

  const urbanImages = [
    {
      id: 1,
      src: urbanImage,
      alt: "Şehir İçi Patlatma 1"
    },
    {
      id: 2,
      src: urbanImage2,
      alt: "Şehir İçi Patlatma 2"
    }
  ];

  return (
    <div className="blasting-page">
        <section className="quarry-image-container">
          <img src={quarryImage} alt="Taş Ocağı Patlatma" className="quarry-image" />
          
          {/* Overlay Content */}
          <div className="image-overlay-content">
            <div className="overlay-text">
              <h2 className="blasting-title orange-gold">
                TAŞ OCAĞI
              </h2>
              
              <div className="blasting-description">
                <p>
                  Taş ocaklarında patlatmanın temel amacı, kayaçları ekonomik ve güvenli bir şekilde 
                  kırma-eleme tesislerine uygun boyutlarda parçalara ayırmaktır.
                </p>
                
                <p>
                  Delme ve patlatma operasyonlarımızda, kaya yapısına uygun delik desenleri ve 
                  patlayıcı yükleri ile yüksek verimlilik sağlıyoruz. Patlatma tasarımlarımız, 
                  parçalanma verimliliğini artırarak ikincil kırma ihtiyacını azaltacak şekilde optimize edilmiştir.
                </p>
                
                <p>
                  Operasyonlarımız USBM ve DIN 4150 standartlarına uygun olarak yürütülür. 
                  Yerleşim alanlarına yakınlık durumuna göre tasarlanan patlatmalar ile titreşim 
                  ve gürültü kontrolü sağlanarak çevredeki yerleşimler, altyapı tesisleri ve 
                  doğal çevre korunur. Geoteknik parametreler dikkate alınarak şev stabilitesi, 
                  güvenli kazı ve optimal parça boyutu sağlanır.
                </p>
                
                <p>
                  İş güvenliği tüm operasyonlarımızın merkezinde yer alır. Kontrollü patlatma 
                  sistemleri, güvenlik protokollerine uygun saha düzenlemeleri ve sürekli 
                  izleme ile hem çalışanlarımızın hem de çevrenin güvenliği sağlanır.
                </p>
              </div>
            </div>
          </div>
        </section>

      {/* Urban Blasting Section */}
      <section className="urban-blasting-section">
        <div className="container-custom">
          <div className="urban-blasting-content">
            <div className="urban-blasting-text">
              <h2 className="urban-blasting-title">
                ŞEHİR İÇİ <span className="orange-gold">PATLAMALAR</span>
              </h2>
              
              <div className="urban-blasting-intro">
                <p>
                  Şehir içi patlatmalar, hassas çevre koşulları nedeniyle yüksek dikkat ve kontrol gerektirir. 
                  Planlı patlatma ile USBM ve DIN 4250 normlarına uygun olarak titreşim, gürültü ve taş fırlaması 
                  minimize edilerek çevredeki yapılar, altyapı tesisleri ve insanlar korunur.
                </p>
              </div>

              <div className="standards-section">
                <h3 className="section-subtitle">Kullanılan Standartlar</h3>
                <div className="standards-list">
                  {standards.map((standard) => (
                    <div key={standard.id} className="standard-item">
                      <h4 className="standard-title">{standard.title}</h4>
                      <p className="standard-description">{standard.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="principles-section">
                <h3 className="section-subtitle">Uygulama Esasları</h3>
                <div className="principles-list">
                  {principles.map((principle) => (
                    <div key={principle.id} className="principle-item">
                      <h4 className="principle-title">{principle.title}</h4>
                      <p className="principle-description">{principle.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="urban-blasting-visual">
              {urbanImages.map((image) => (
                <div key={image.id} className="urban-image-container">
                  <img src={image.src} alt={image.alt} className="urban-image" />
                </div>
              ))}
              
              <div className="benefits-box">
                <h3 className="benefits-title">Çevresel ve Teknik Faydalar</h3>
                <ul className="benefits-list">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="benefit-item">{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Underwater Blasting Section */}
      <section id="underwater-blasting" className="underwater-blasting-section">
        <div className="underwater-image-container">
          <img src={underwaterImage} alt="Su Altı Patlatma" className="underwater-image" />
          
          {/* Overlay Content */}
          <div className="image-overlay-content">
            <div className="overlay-text">
              <h2 className="blasting-title orange-gold">
                KONTROLLÜ SUALTI PATLATMALARI
              </h2>
              
              <div className="blasting-description">
                <p>
                  Deniz, göl veya nehir tabanında yapılan kazı ve inşaat çalışmalarında (liman, rıhtım, baraj, köprü ayakları vb.) 
                  kullanılan su altı patlatmaları, çevreye ve canlı yaşama zarar vermeden, kontrollü bir şekilde kaya ve beton 
                  yapıların parçalanmasını sağlar.
                </p>
                
                <p>
                  Su altı patlatma operasyonlarımızda, yüksek su basıncına dayanıklı özel patlayıcı sistemler ve 
                  su geçirmez fünye teknolojileri kullanılmaktadır. Operasyonlar sırasında su canlılarının korunması 
                  için özel önlemler alınır ve çevresel etki minimize edilir.
                </p>
                
                <p>
                  Dalga ve akıntı koşullarına uygun operasyon planlaması ile güvenli ve verimli kazı işlemleri 
                  gerçekleştirilir. Su altı görüntüleme ve izleme teknolojileri ile sürekli kontrol sağlanarak 
                  proje hedeflerine ulaşılır.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom">
          <div className="underwater-content">
            <div className="underwater-applications">
              <h3 className="section-subtitle">Uygulama Alanları</h3>
              <div className="applications-grid">
                {underwaterApplications.map((application) => (
                  <div key={application.id} className="application-card">
                    <h4 className="application-title">{application.title}</h4>
                    <p className="application-description">{application.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="underwater-benefits">
              <h3 className="section-subtitle">Teknik Özellikler</h3>
              <ul className="benefits-list">
                {underwaterBenefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlastingPage;

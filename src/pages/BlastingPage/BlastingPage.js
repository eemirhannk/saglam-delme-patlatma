import React from 'react';
import './BlastingPage.css';
import quarryImage from '@public/images/quarry-blasting.jpeg';
import urbanImage from '@public/images/sehiricipatlatma.jpeg';

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

  return (
    <div className="blasting-page">
        <section className="quarry-image-container">
          <img src={quarryImage} alt="Taş Ocağı Patlatma" className="quarry-image" />
          
          {/* Overlay Content */}
          <div className="image-overlay-content">
            <div className="overlay-text">
              <h2 className="blasting-title">
                <span className="orange-gold">TAŞ OCAĞI</span>
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
              <div className="urban-image-container">
                <img src={urbanImage} alt="Şehir İçi Patlatma" className="urban-image" />
              </div>
              
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
    </div>
  );
}

export default BlastingPage;

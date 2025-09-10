import React from 'react';
import './DrillingPage.css';

function DrillingPage() {
  const applications = [
    {
      id: 1,
      title: "Jeolojik Modelleme",
      description: "Kaya sertliği, çatlaklılık ve su zonları MWD verileriyle belirlenir."
    },
    {
      id: 2,
      title: "Tahkimat Tasarımı",
      description: "Kaya bulonu, püskürtme beton veya çelik hasır ihtiyacı önceden belirlenir."
    },
    {
      id: 3,
      title: "Verimlilik",
      description: "Delme parametrelerinin optimizasyonu ile daha hızlı ilerleme sağlanır."
    },
    {
      id: 4,
      title: "Çevresel Fayda",
      description: "Kontrollü patlatma sayesinde titreşim ve çevresel etkiler azaltılır."
    },
    {
      id: 5,
      title: "Cevher – Yan Kaya Ayrımı",
      description: "Altın, bakır ve diğer değerli cevherlerin damarları daha doğru belirlenir, kayıplar minimize edilir."
    },
    {
      id: 6,
      title: "Patlatma Optimizasyonu",
      description: "Daha kontrollü kırılma, düşük patlayıcı tüketimi ve yüksek cevher kazanımı sağlanır."
    },
    {
      id: 7,
      title: "Güvenlik",
      description: "Su girişi, boşluk veya zayıf zonlar önceden tespit edilerek iş güvenliği artırılır."
    },
    {
      id: 8,
      title: "Ekonomik Verimlilik",
      description: "Daha az kırma–nakliye maliyeti ve daha hızlı üretim."
    }
  ];

  return (
    <div className="drilling-page">
      <div className="container">
        <div className="drilling-hero">
          <div className="drilling-content">
              <div className="drilling-acronym">
                <h1>MWD</h1>
                <div className="drilling-subtitle">
                  <span>Delme Esnasında Ölçüm</span>
                </div>
            </div>
            
            <div className="drilling-right-content">
              <div className="drilling-description">
                <p>
                  MWD, sondaj sırasında penetrasyon hızı, tork, basınç ve yön gibi parametreleri 
                  anlık olarak kaydeden ve yüzeye aktaran bir teknolojidir. Bu sayede maden ve 
                  tünel projelerinde jeolojik belirsizlikler azaltılır, güvenlik artırılır ve 
                  operasyon verimliliği yükseltilir.
                </p>
              </div>

              <div className="drilling-applications">
                {applications.map((application) => (
                  <div key={application.id} className="application-item">
                    <h3>{application.title}</h3>
                    <p>{application.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrillingPage;

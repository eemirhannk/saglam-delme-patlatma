import React from 'react';
import { Link } from 'react-router-dom';
import './ConsultingPage.css';

function ConsultingPage() {
  const services = [
    {
      id: 1,
      icon: "fas fa-file-alt",
      title: "Ruhsat Süreçleri",
      description: "Delme ve patlatma projeleri için gerekli tüm ruhsat süreçlerinde teknik danışmanlık ve rehberlik hizmeti sunuyoruz."
    },
    {
      id: 2,
      icon: "fas fa-cogs",
      title: "Patlayıcı Dizayn",
      description: "Proje özelliklerine uygun patlayıcı dizayn çalışmaları ve güvenlik analizleri gerçekleştiriyoruz."
    },
    {
      id: 3,
      icon: "fas fa-chart-line",
      title: "Teknik Optimizasyon",
      description: "MWD verilerine dayalı teknik optimizasyon çalışmaları ile proje verimliliğini artırıyoruz."
    },
    {
      id: 4,
      icon: "fas fa-users",
      title: "Teknik Refakat",
      description: "Deneyimli mühendis kadromuzla projelerinize her aşamada teknik refakat sağlıyoruz."
    }
  ];

  const processSteps = [
    {
      id: 1,
      number: "1",
      title: "Proje Analizi",
      description: "Projenizin teknik gereksinimlerini detaylı olarak analiz ediyoruz."
    },
    {
      id: 2,
      number: "2",
      title: "Çözüm Tasarımı",
      description: "Size özel güvenli ve verimli çözümler tasarlıyoruz."
    },
    {
      id: 3,
      number: "3",
      title: "Uygulama Desteği",
      description: "Projenizin her aşamasında teknik destek sağlıyoruz."
    },
    {
      id: 4,
      number: "4",
      title: "Sonuç Değerlendirme",
      description: "Proje sonuçlarını değerlendirip optimizasyon önerileri sunuyoruz."
    }
  ];

  return (
    <div className="consulting-page">
      {/* Hero Section */}
      <section className="consulting-hero">
        <div className="container-custom">
          <div className="consulting-hero-content">
            <div className="consulting-hero-text">
              <h1 className="consulting-title">Danışmanlık</h1>
              <p className="consulting-subtitle">
                Sağlam Delme Patlatma Ltd. Şti., delme-patlatma uygulamalarının yanı sıra 
                ruhsat süreçleri, patlayıcı dizayn çalışmaları ve MWD verilerine dayalı 
                teknik optimizasyon konularında danışmanlık hizmeti sunar. Deneyimli mühendis 
                kadrosu ile projelere her aşamada teknik refakat ederek güvenli, verimli ve 
                çevreye duyarlı çözümler üretir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="consulting-services">
        <div className="container-custom">
          <div className="consulting-services-grid">
            {services.map((service) => (
              <div key={service.id} className="consulting-service-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="consulting-process">
        <div className="container-custom">
          <h2 className="section-title">Çalışma Sürecimiz</h2>
          <div className="process-steps">
            {processSteps.map((step) => (
              <div key={step.id} className="process-step">
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="consulting-cta">
        <div className="container-custom">
          <div className="cta-content">
            <h2 className="cta-title">Danışmanlık Hizmetlerimizden Yararlanın</h2>
            <p className="cta-description">
              Uzman ekibimizle projelerinize değer katacak danışmanlık hizmetleri sunuyoruz.
            </p>
            <Link to="/iletisim" className="btn-consulting">İletişime Geçin</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ConsultingPage;

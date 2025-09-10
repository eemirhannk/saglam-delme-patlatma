import React from 'react';
import './ConsultingPage.css';

function ConsultingPage() {
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
            <div className="consulting-service-card">
              <div className="service-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <h3 className="service-title">Ruhsat Süreçleri</h3>
              <p className="service-description">
                Delme ve patlatma projeleri için gerekli tüm ruhsat süreçlerinde 
                teknik danışmanlık ve rehberlik hizmeti sunuyoruz.
              </p>
            </div>

            <div className="consulting-service-card">
              <div className="service-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3 className="service-title">Patlayıcı Dizayn</h3>
              <p className="service-description">
                Proje özelliklerine uygun patlayıcı dizayn çalışmaları ve 
                güvenlik analizleri gerçekleştiriyoruz.
              </p>
            </div>

            <div className="consulting-service-card">
              <div className="service-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="service-title">Teknik Optimizasyon</h3>
              <p className="service-description">
                MWD verilerine dayalı teknik optimizasyon çalışmaları ile 
                proje verimliliğini artırıyoruz.
              </p>
            </div>

            <div className="consulting-service-card">
              <div className="service-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="service-title">Teknik Refakat</h3>
              <p className="service-description">
                Deneyimli mühendis kadromuzla projelerinize her aşamada 
                teknik refakat sağlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="consulting-process">
        <div className="container-custom">
          <h2 className="section-title">Çalışma Sürecimiz</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3 className="step-title">Proje Analizi</h3>
              <p className="step-description">
                Projenizin teknik gereksinimlerini detaylı olarak analiz ediyoruz.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3 className="step-title">Çözüm Tasarımı</h3>
              <p className="step-description">
                Size özel güvenli ve verimli çözümler tasarlıyoruz.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3 className="step-title">Uygulama Desteği</h3>
              <p className="step-description">
                Projenizin her aşamasında teknik destek sağlıyoruz.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3 className="step-title">Sonuç Değerlendirme</h3>
              <p className="step-description">
                Proje sonuçlarını değerlendirip optimizasyon önerileri sunuyoruz.
              </p>
            </div>
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
            <a href="/iletisim" className="btn-consulting">İletişime Geçin</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ConsultingPage;

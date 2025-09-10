import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasAnimated) return; // Bir kere animasyon yapıldıysa dur
      
      const servicesSection = document.getElementById('services-section');
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          setIsServicesVisible(true);
          setHasAnimated(true); // Animasyon yapıldı olarak işaretle
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // İlk yüklemede kontrol et

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  return (
    <>
      {/* Hero Slider Section */}
      <section className="hero-slider">
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          
          <div className="carousel-inner">
            {/* Slide 1 - Ana Hizmet */}
            <div className="carousel-item active">
              <div className="hero-slide orange-gold">
                <div className="container">
                  <div className="row align-items-center min-vh-75">
                    <div className="col-lg-6">
                      <h1 className="display-3 fw-bold mb-4 text-white">
                        Sağlam Delme & Patlatma
                      </h1>
                      <p className="lead mb-4 text-white">
                        1997'den beri güvenli ve profesyonel delme ve patlatma hizmetleri sunuyoruz. 
                        Her projede güvenlik önceliğimizdir.
                      </p>
                      <div className="btn-group-custom">
                        <button className="btn-custom btn-light-custom btn-custom--lg">
                          Projenizi Başlatın
                        </button>
                        <button className="btn-custom btn-outline-custom btn-custom--lg">
                          Hizmetlerimiz
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="hero-image text-center">
                        <i className="fas fa-hammer fa-5x mb-3 text-white"></i>
                        <h3 className="text-white">Profesyonel Ekip</h3>
                        <p className="text-white">Uzman kadromuzla güvenli çözümler</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 - Delme Hizmetleri */}
            <div className="carousel-item">
              <div className="hero-slide bg-gradient-primary">
                <div className="container">
                  <div className="row align-items-center min-vh-75">
                    <div className="col-lg-6">
                      <h1 className="display-3 fw-bold mb-4 text-white">
                        Delme Hizmetleri
                      </h1>
                      <p className="lead mb-4 text-white">
                        Hassas delme teknikleri ile her türlü malzeme ve zemin koşulunda çalışıyoruz. 
                        Modern ekipmanlarımızla en zorlu projeleri başarıyla tamamlıyoruz.
                      </p>
                      <div className="btn-group-custom">
                        <button className="btn-custom btn-light-custom btn-custom--lg">
                          Delme Hizmetleri
                        </button>
                        <button className="btn-custom btn-outline-custom btn-custom--lg">
                          Teknik Detaylar
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="hero-image text-center">
                        <i className="fas fa-mountain fa-5x mb-3 text-white"></i>
                        <h3 className="text-white">Hassas Delme</h3>
                        <p className="text-white">Her türlü zemin koşulunda çalışma</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 - Patlatma Hizmetleri */}
            <div className="carousel-item">
              <div className="hero-slide bg-gradient-secondary">
                <div className="container">
                  <div className="row align-items-center min-vh-75">
                    <div className="col-lg-6">
                      <h1 className="display-3 fw-bold mb-4 text-white">
                        Patlatma Hizmetleri
                      </h1>
                      <p className="lead mb-4 text-white">
                        Güvenli ve kontrollü patlatma teknikleri ile büyük ölçekli projeler gerçekleştiriyoruz. 
                        En sıkı güvenlik protokolleri ile çalışıyoruz.
                      </p>
                      <div className="btn-group-custom">
                        <button className="btn-custom btn-light-custom btn-custom--lg">
                          Patlatma Hizmetleri
                        </button>
                        <button className="btn-custom btn-outline-custom btn-custom--lg">
                          Güvenlik Protokolleri
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="hero-image text-center">
                        <i className="fas fa-bomb fa-5x mb-3 text-white"></i>
                        <h3 className="text-white">Kontrollü Patlatma</h3>
                        <p className="text-white">Güvenli ve profesyonel patlatma</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 4 - Danışmanlık */}
            <div className="carousel-item">
              <div className="hero-slide bg-gradient-tertiary">
                <div className="container">
                  <div className="row align-items-center min-vh-75">
                    <div className="col-lg-6">
                      <h1 className="display-3 fw-bold mb-4 text-white">
                        Teknik Danışmanlık
                      </h1>
                      <p className="lead mb-4 text-white">
                        Uzman ekibimizle projeleriniz için kapsamlı teknik danışmanlık hizmetleri sunuyoruz. 
                        Her aşamada yanınızdayız.
                      </p>
                      <div className="btn-group-custom">
                        <Link to="/danismanlik" className="btn-custom btn-light-custom btn-custom--lg btn-custom--icon">
                          <i className="fas fa-user-tie"></i>
                          Danışmanlık
                        </Link>
                        <button className="btn-custom btn-outline-custom btn-custom--lg">
                          Teknik Destek
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="hero-image text-center">
                        <i className="fas fa-user-tie fa-5x mb-3 text-white"></i>
                        <h3 className="text-white">Uzman Danışmanlık</h3>
                        <p className="text-white">Projelerinizde rehberlik</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Önceki</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Sonraki</span>
          </button>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-5 bg-light-custom">
        <div className="container-custom">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="text-3xl font-bold orange-gold">Güvenlik Önceliğimiz</h2>
              <p className="text-lg">Her kararımız, halkın, ortaklarımızın ve çalışanlarımızın güvenliği üzerine kuruludur.</p>
            </div>
          </div>
          <div className="grid grid--3">
            <div className="feature-card-custom">
              <div className="feature-card-custom__icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4 className="feature-card-custom__title">Güvenlik Protokolleri</h4>
              <p className="feature-card-custom__text">Her proje için özel güvenlik planları geliştiriyoruz.</p>
            </div>
            <div className="feature-card-custom">
              <div className="feature-card-custom__icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h4 className="feature-card-custom__title">Uzman Ekip</h4>
              <p className="feature-card-custom__text">Yüksek eğitimli ve sertifikalı personelimiz.</p>
            </div>
            <div className="feature-card-custom">
              <div className="feature-card-custom__icon">
                <i className="fas fa-clock"></i>
              </div>
              <h4 className="feature-card-custom__title">7/24 Hizmet</h4>
              <p className="feature-card-custom__text">Acil durumlar için her zaman hazırız.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className={`py-5 services-lazy-loading ${isServicesVisible ? 'services-visible' : ''}`}>
        <div className="container-custom">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="text-3xl font-bold orange-gold">Hizmetlerimiz</h2>
              <p className="text-lg">Geniş hizmet yelpazemizle her türlü projeye çözüm sunuyoruz</p>
            </div>
          </div>
          <div className="card-grid-custom">
            <div className="card-custom service-card-custom">
              <div className="card-custom__body">
                <div className="service-card-custom__icon">
                  <i className="fas fa-mountain"></i>
                </div>
                <h5 className="service-card-custom__title">Delme Hizmetleri</h5>
                <p className="service-card-custom__text">
                  Hassas delme teknikleri ile her türlü malzeme ve zemin koşulunda çalışıyoruz.
                </p>
                <a href="#" className="btn-custom btn-secondary-custom">Detaylar</a>
              </div>
            </div>
            <div className="card-custom service-card-custom">
              <div className="card-custom__body">
                <div className="service-card-custom__icon">
                  <i className="fas fa-bomb"></i>
                </div>
                <h5 className="service-card-custom__title">Patlatma Hizmetleri</h5>
                <p className="service-card-custom__text">
                  Güvenli ve kontrollü patlatma teknikleri ile büyük ölçekli projeler gerçekleştiriyoruz.
                </p>
                <Link to="/patlatma-hizmetleri" className="btn-custom btn-secondary-custom">Detaylar</Link>
              </div>
            </div>
            <div className="card-custom service-card-custom">
              <div className="card-custom__body">
                <div className="service-card-custom__icon">
                  <i className="fas fa-cogs"></i>
                </div>
                <h5 className="service-card-custom__title">Proje Yönetimi</h5>
                <p className="service-card-custom__text">
                  Uzman ekibimizle projelerinizi planlama aşamasından teslim aşamasına kadar yönetiyoruz.
                </p>
                <a href="#" className="btn-custom btn-secondary-custom">Detaylar</a>
              </div>
            </div>
            <div className="card-custom service-card-custom">
              <div className="card-custom__body">
                <div className="service-card-custom__icon">
                  <i className="fas fa-user-tie"></i>
                </div>
                <h5 className="service-card-custom__title">Danışmanlık</h5>
                <p className="service-card-custom__text">
                  Uzman ekibimizle projeleriniz için teknik danışmanlık ve rehberlik hizmetleri sunuyoruz.
                </p>
                <Link to="/danismanlik" className="btn-custom btn-secondary-custom">Detaylar</Link>
              </div>
            </div>
            <div className="card-custom service-card-custom">
              <div className="card-custom__body">
                <div className="service-card-custom__icon">
                  <i className="fas fa-water"></i>
                </div>
                <h5 className="service-card-custom__title">Su Altı İşleri</h5>
                <p className="service-card-custom__text">
                  Sertifikalı dalgıç ekibimizle su altı delme ve patlatma hizmetleri.
                </p>
                <a href="#" className="btn-custom btn-secondary-custom">Detaylar</a>
              </div>
            </div>
            <div className="card-custom service-card-custom">
              <div className="card-custom__body">
                <div className="service-card-custom__icon">
                  <i className="fas fa-building"></i>
                </div>
                <h5 className="service-card-custom__title">Yıkım İşleri</h5>
                <p className="service-card-custom__text">
                  Binalar, köprüler ve beton yapılar için güvenli yıkım hizmetleri.
                </p>
                <a href="#" className="btn-custom btn-secondary-custom">Detaylar</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary-custom text-white">
        <div className="container-custom">
          <div className="flex flex--center flex--between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">Projenizi Başlatmaya Hazır mısınız?</h2>
              <p className="text-lg mb-0">
                Uzman ekibimizle güvenli ve profesyonel delme & patlatma hizmetleri için hemen iletişime geçin.
              </p>
            </div>
            <div className="text-right">
              <Link to="/iletisim" className="btn-custom btn-light-custom btn-custom--lg btn-custom--icon">
                <i className="fas fa-envelope"></i>
                Bize Ulaşın
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;

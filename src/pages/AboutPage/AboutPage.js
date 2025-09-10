import React from 'react';
import './AboutPage.css';
import hakkimizdaImage from '../../public/images/hakkimizda.jpeg';
import nedenbizImage from '../../public/images/nedenbiz.jpeg';

function AboutPage() {
  return (
    <div className="about-page">
      {/* Main Content - Hakkımızda */}
      <div className="about-container">
        {/* Left Side - Image */}
        <div className="about-left">
          <div className="about-image">
            <img src={hakkimizdaImage} alt="Hakkımızda" className="about-img" />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="about-right">
          <div className="about-content">
            <h1 className="about-title">Hakkımızda</h1>
            <h2 className="about-subtitle">Neler Yapıyoruz?</h2>
            
            <div className="about-text">
              <p>
                Sağlam, delme ve patlatma alanında uzun yıllara dayanan tecrübenin, 
                güçlü saha pratiğinin ve mühendislik disiplininin bir araya gelmesiyle kurulmuştur.
              </p>
              
              <p>
                Firmamızın kurucusu, yıllar boyunca; sualtı ve offshore patlatmalardan, 
                tünel, metro, otoyol projelerine; taş ocaklarından büyük altyapı ve kanal 
                çalışmalarına kadar sektörün hemen her alanında aktif olarak görev almıştır.
              </p>
              
              <p>
                Bu birikim doğrultusunda Sağlam Delme & Patlatma hem açık saha hem de tünel 
                uygulamalarında; güvenli, verimli ve kontrollü delme-patlatma çözümleri sunar. 
                Amacımız; her projeye mühendislik temelli yaklaşarak, yüksek iş güvenliği 
                standartlarına bağlı, çevresel etkileri minimuma indiren ve işverene maksimum 
                fayda sağlayan uygulamalar gerçekleştirmektir.
              </p>
              
              <p>
                Sahip olduğumuz tecrübe, ekipman altyapısı ve çözüm odaklı yaklaşım sayesinde, 
                sektörde güvenilir bir çözüm ortağı olmayı hedefliyoruz.
              </p>
            </div>
            
            <div className="about-logo">
              <img src="/images/logo.jpeg" alt="Sağlam Delme & Patlatma" className="about-logo-img" />
            </div>
          </div>
        </div>

        {/* Right Green Bar for Hakkımızda */}
        <div className="green-bar"></div>
      </div>

      {/* NEDEN BİZ Section */}
      <div className="neden-biz-section">
        <div className="neden-biz-container">
          {/* Left Side - Visual */}
          <div className="neden-biz-left">
            <div className="neden-biz-image">
              <img src={nedenbizImage} alt="Neden Biz" className="neden-biz-img" />
            </div>
            <div className="advantages-boxes">
              <div className="advantage-box">BAZI ARTILARIMIZ</div>
              <div className="advantage-box">VAR !</div>
            </div>
            <div className="advantage-description">
              <p>Profesyonel işlerin güvenilir ortağı.</p>
              <p>Her detayda kalite, her aşamada özen.</p>
            </div>
          </div>

          {/* Right Side - Advantages List */}
          <div className="neden-biz-right">
            <div className="advantages-list">
              <div className="advantage-item">
                <h3 className="advantage-title">Uzman Kadro</h3>
                <p className="advantage-text">Yüksek deneyime sahip mühendis ve operatörler</p>
              </div>
              
              <div className="advantage-item">
                <h3 className="advantage-title">Modern Ekipman</h3>
                <p className="advantage-text">Son teknoloji sondaj ve patlatma sistemleri</p>
              </div>
              
              <div className="advantage-item">
                <h3 className="advantage-title">Güvenlik</h3>
                <p className="advantage-text">Tüm işlerimiz, yerel ve uluslararası güvenlik standartlarına uygun olarak yürütülür.</p>
              </div>
              
              <div className="advantage-item">
                <h3 className="advantage-title">Çevre Duyarlılığı</h3>
                <p className="advantage-text">Çevresel etkiyi en aza indiren yöntemler kullanıyoruz</p>
              </div>
            </div>
          </div>

          {/* Right Green Bar for NEDEN BİZ */}
          <div className="green-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

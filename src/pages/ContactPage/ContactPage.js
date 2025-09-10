import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import './ContactPage.css';

function ContactPage() {
  const { t } = useTranslation();
  const [companyType, setCompanyType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleCompanyTypeChange = (e) => {
    const value = e.target.value;
    setCompanyType(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const formData = new FormData(e.target);
    const data = {
      companyType: formData.get('companyType'),
      serviceType: formData.get('serviceType'),
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    try {
      // EmailJS ile e-posta gönder
      const result = await emailjs.send(
        'service_5v1epin', // EmailJS Service ID
        'template_oxnvwrt', // EmailJS Template ID
        {
          to_email: 'emirhank5466@gmail.com',
          to_name: 'Emirhan',
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          company_type: data.companyType === 'individual' ? 'Şahıs' : 'Firma',
          service_type: data.serviceType,
          subject: data.subject,
          message: data.message
        },
        'BdQi-hU_cHJ4sSEFD' // EmailJS Public Key
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        e.target.reset(); // Formu temizle
        setCompanyType(''); // State'i de temizle
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('E-posta gönderme hatası:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="contact-page">


      {/* Contact Form Section */}
      <div className="contact-form-section">
        <div className="container-custom">
          <div className="contact-form-container">
            <div className="contact-form-wrapper">
              <h2 className="form-title">{t('contact.title')}</h2>
              
              {/* Başarı/Hata Mesajları */}
              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  <i className="fas fa-check-circle"></i>
                  {t('contact.form.success')}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="alert alert-error">
                  <i className="fas fa-exclamation-circle"></i>
                  {t('contact.form.error')}
                </div>
              )}
              
              <form className="contact-form" onSubmit={handleSubmit}>
                        {/* En üstte - Müşteri Tipi ve Hizmet Türü */}
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="companyType" className="form-label">{t('contact.form.companyType')}</label>
                            <select
                              id="companyType"
                              name="companyType"
                              className="form-input"
                              value={companyType}
                              onChange={handleCompanyTypeChange}
                              required
                            >
                              <option value="">{t('contact.form.selectOption')}</option>
                              <option value="individual">{t('contact.form.individual')}</option>
                              <option value="company">{t('contact.form.company')}</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor="serviceType" className="form-label">{t('contact.form.serviceType')}</label>
                            <select
                              id="serviceType"
                              name="serviceType"
                              className="form-input"
                              required
                            >
                              <option value="">{t('contact.form.selectOption')}</option>
                              <option value="drilling">{t('contact.form.drilling')}</option>
                              <option value="blasting">{t('contact.form.blasting')}</option>
                              <option value="consulting">{t('contact.form.consulting')}</option>
                              <option value="other">{t('contact.form.other')}</option>
                            </select>
                          </div>
                        </div>

                        {/* İkinci sıra - Ad Soyad ve E-posta */}
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="name" className="form-label">
                              {companyType === 'company' ? t('contact.form.companyName') : t('contact.form.name')}
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="form-input"
                              placeholder={companyType === 'company' ? t('contact.form.companyPlaceholder') : t('contact.form.namePlaceholder')}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="email" className="form-label">{t('contact.form.email')}</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="form-input"
                              placeholder={t('contact.form.emailPlaceholder')}
                              required
                            />
                          </div>
                        </div>

                        {/* Üçüncü sıra - Telefon ve Konu */}
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="phone" className="form-label">{t('contact.form.phone')}</label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              className="form-input"
                              placeholder={t('contact.form.phonePlaceholder')}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="subject" className="form-label">{t('contact.form.subject')}</label>
                            <input
                              type="text"
                              id="subject"
                              name="subject"
                              className="form-input"
                              placeholder={t('contact.form.subjectPlaceholder')}
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="message" className="form-label">{t('contact.form.message')}</label>
                          <textarea 
                            id="message" 
                            name="message" 
                            className="form-textarea" 
                            rows="5" 
                            placeholder={t('contact.form.messagePlaceholder')} 
                            required
                          ></textarea>
                        </div>

                        <div className="form-actions">
                          <button 
                            type="submit" 
                            className="btn-submit"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <i className="fas fa-spinner fa-spin"></i>
                                {t('contact.form.submitting')}
                              </>
                            ) : (
                              <>
                                <i className="fas fa-paper-plane"></i>
                                {t('contact.form.submit')}
                              </>
                            )}
                          </button>
                        </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

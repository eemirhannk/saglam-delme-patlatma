import React from 'react';
import { useTranslation } from 'react-i18next';
import './DrillingPage.css';

function DrillingPage() {
  const { t } = useTranslation();
  const applications = [
    {
      id: 1,
      title: t('drilling.applications.geological'),
      description: t('drilling.applications.geologicalDesc')
    },
    {
      id: 2,
      title: t('drilling.applications.support'),
      description: t('drilling.applications.supportDesc')
    },
    {
      id: 3,
      title: t('drilling.applications.efficiency'),
      description: t('drilling.applications.efficiencyDesc')
    },
    {
      id: 4,
      title: t('drilling.applications.environmental'),
      description: t('drilling.applications.environmentalDesc')
    },
    {
      id: 5,
      title: t('drilling.applications.ore'),
      description: t('drilling.applications.oreDesc')
    },
    {
      id: 6,
      title: t('drilling.applications.blasting'),
      description: t('drilling.applications.blastingDesc')
    },
    {
      id: 7,
      title: t('drilling.applications.safety'),
      description: t('drilling.applications.safetyDesc')
    },
    {
      id: 8,
      title: t('drilling.applications.economic'),
      description: t('drilling.applications.economicDesc')
    }
  ];

  return (
    <div className="drilling-page">
      <div className="container">
        <div className="drilling-hero">
          <div className="drilling-content">
              <div className="drilling-acronym">
                <h1>{t('drilling.mwd.title')}</h1>
                <div className="drilling-subtitle">
                  <span>{t('drilling.mwd.subtitle')}</span>
                </div>
            </div>
            
            <div className="drilling-right-content">
              <div className="drilling-description">
                <p>
                  {t('drilling.mwd.description')}
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

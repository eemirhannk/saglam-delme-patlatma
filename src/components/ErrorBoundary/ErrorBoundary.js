import React from 'react';
import i18n from '../../i18n/i18n';
import './ErrorBoundary.css';
import errorImage from '@public/images/ErrorBoundary/FARKLI 2 FORMASYON AYNA GÖRÜNÜM2.webp';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-container">
          <div className="error-boundary-content">
            <div className="error-boundary-image">
              <img 
                src={errorImage} 
                alt="Error Background" 
                className="error-boundary-img"
              />
            </div>
            <div className="error-boundary-overlay"></div>
            <div className="error-boundary-text">
              <h1 className="error-boundary-title">!</h1>
              <h2 className="error-boundary-subtitle">{i18n.t('error.title')}</h2>
              <p className="error-boundary-description">{i18n.t('error.description')}</p>
              <div className="error-boundary-actions">
                <button 
                  className="btn btn-primary error-boundary-btn"
                  onClick={() => window.location.reload()}
                >
                  {i18n.t('error.refreshButton')}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

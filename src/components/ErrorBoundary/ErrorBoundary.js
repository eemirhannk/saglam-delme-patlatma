import React from 'react';
import i18n from '../../i18n/i18n';
import './ErrorBoundary.css';

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
        <div className="error-boundary">
          <div className="error-content">
            <h2>{i18n.t('error.title')}</h2>
            <p>{i18n.t('error.description')}</p>
            <button 
              className="btn btn-primary"
              onClick={() => window.location.reload()}
            >
              {i18n.t('error.refreshButton')}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

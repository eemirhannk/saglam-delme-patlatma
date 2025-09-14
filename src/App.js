import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './styles/main.css';
import './App.css';
import './i18n/i18n';
import Layout from './components/Layout';
import ScrollToTop from './helpers/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy loading - Her sayfa ayrı bundle olacak
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ConsultingPage = lazy(() => import('./pages/ConsultingPage'));
const BlastingPage = lazy(() => import('./pages/BlastingPage'));
const DrillingPage = lazy(() => import('./pages/DrillingPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <ScrollToTop />
          <Layout>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/consulting" element={<ConsultingPage />} />
                <Route path="/drilling-services" element={<DrillingPage />} />
                <Route path="/blasting-services" element={<BlastingPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </Layout>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
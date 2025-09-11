import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.css';
import './App.css';
import './i18n/i18n';
import Layout from './components/Layout';
import ScrollToTop from './helpers/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ConsultingPage from './pages/ConsultingPage';
import BlastingPage from './pages/BlastingPage';
import DrillingPage from './pages/DrillingPage';
import TeamPage from './pages/TeamPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/consulting" element={<ConsultingPage />} />
          <Route path="/drilling-services" element={<DrillingPage />} />
          <Route path="/blasting-services" element={<BlastingPage />} />
          <Route path="/project-management" element={<ConsultingPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
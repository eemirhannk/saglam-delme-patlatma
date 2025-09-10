import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.css';
import './App.css';
import Layout from './components/Layout';
import ScrollToTop from './helpers/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ConsultingPage from './pages/ConsultingPage';
import BlastingPage from './pages/BlastingPage';
import DrillingPage from './pages/DrillingPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/danismanlik" element={<ConsultingPage />} />
          <Route path="/delme-hizmetleri" element={<DrillingPage />} />
          <Route path="/patlatma-hizmetleri" element={<BlastingPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
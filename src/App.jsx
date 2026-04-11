import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import ContactModal from './components/ContactModal';

const Home = lazy(() => import('./pages/Home'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));

const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <div style={{ width: '40px', height: '40px', border: '3px solid rgba(255,255,255,0.1)', borderTop: '3px solid #6366f1', borderRadius: '50%', animation: 'spin 1s linear infinite' }}>
      <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="bento-app-container">
        <NavBar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/FAQPage" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/GalleryPage" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </Suspense>
        <Footer />
        <ContactModal />
      </div>
    </Router>
  );
}

export default App;

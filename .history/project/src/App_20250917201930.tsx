import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import HealthBenefits from './components/HealthBenefits';
import HowItWorks from './components/NutritionScience';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import CookieGate from './components/CookieGate';
import ResetPasswordPage from './pages/ResetPasswordPage';

// New single-product sections
import SingleProduct from './components/SingleProduct';
import WhyChoose from './components/WhyChoose';
import Comparison from './components/Comparison';
import UseCases from './components/UseCases';
import WhereToUse from './components/WhereToUse';
import Certifications from './components/Certifications';
import Precautions from './components/Precautions';
import Ingredients from './components/Ingredients';
import DilutionGuide from './components/DilutionGuide';
import CoverageCalculator from './components/CoverageCalculator';
import StainOdorGuide from './components/StainOdorGuide';
import Sustainability from './components/Sustainability';

function Home() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop((window.scrollY || 0) > 300);
    window.addEventListener('scroll', onScroll, { passive: true } as any);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // Apply global paw background
    <div className="min-h-screen paw-bg">
      <Header />
      <main className="space-y-20">
        <Hero />
        <SingleProduct />
        <Ingredients />
        <HealthBenefits />
        <HowItWorks />
        <DilutionGuide />
        <CoverageCalculator />
        <StainOdorGuide />
        <Precautions />
        <Sustainability />
        <AboutUs />
        <FAQ />
      </main>

      {/* Mobile-only Scroll to Top button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="md:hidden fixed bottom-20 right-4 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <Footer />
    </div>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Fallback to hide splash in case the SplashScreen onFinish doesn't fire
    const t = setTimeout(() => setShowSplash(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <CookieGate>
      {showSplash && (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      )}
      {!showSplash && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Routes>
      )}
    </CookieGate>
  );
}

export default App;
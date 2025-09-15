import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import ProductCategories from './components/ProductCategories';
import Benefits from './components/Benefits';
import Muscles from './components/Muscles';
import HealthBenefits from './components/HealthBenefits';
import NutritionScience from './components/NutritionScience';
import NutritionGuide from './components/NutritionGuide';
// import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white px-6 sm:px-8 lg:px-12">
      <Header />
      <main className="space-y-16">
        {/* Each section handles its own vertical rhythm via section-premium */}
        <Hero />
        <ProductShowcase />
        <ProductCategories />
        <Benefits />
        <Muscles />
        <HealthBenefits />
        <NutritionScience />
        <NutritionGuide />
        {/* <Testimonials /> */}
        <AboutUs />
        <FAQ />
        <Newsletter />
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
}

export default App;
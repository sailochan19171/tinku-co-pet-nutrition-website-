import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
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
import PetQuizModal from './components/PetQuizModal';

function App() {
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="space-y-20">
        {/* Each section handles its own vertical rhythm via section-premium */}
        <Hero onStartQuiz={() => setQuizOpen(true)} />
        {/* Removed ProductShowcase section per request */}
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
      <PetQuizModal open={quizOpen} onClose={() => setQuizOpen(false)} />
    </div>
  );
}

export default App;
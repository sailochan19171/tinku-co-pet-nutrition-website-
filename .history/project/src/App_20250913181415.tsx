import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';

import Muscles from './components/Muscles';
import HealthBenefits from './components/HealthBenefits';
import NutritionScience from './components/NutritionScience';
import NutritionGuide from './components/NutritionGuide';
// import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';

import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import PetQuizModal from './components/PetQuizModal';
import MealPlanPreview from './components/MealPlanPreview';

// New pages
import QuizPage from './pages/QuizPage';
import JourneyPage from './pages/JourneyPage';

function Home() {
  const [quizOpen, setQuizOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="space-y-20">
        <Hero onStartQuiz={() => setQuizOpen(true)} />
        <MealPlanPreview />
        <ProductCategories />
        <Muscles />
        <HealthBenefits />
        <NutritionScience />
        <NutritionGuide />
        <AboutUs />
        <FAQ />
      </main>
      <ChatBot />
      <Footer />
      <PetQuizModal open={quizOpen} onClose={() => setQuizOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/find-recipe" element={<QuizPage />} />
      <Route path="/start-journey" element={<JourneyPage />} />
    </Routes>
  );
}

export default App;
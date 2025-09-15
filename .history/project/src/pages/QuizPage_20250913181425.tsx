import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PetQuizModal from '../components/PetQuizModal';

// Dedicated page to find ideal recipe
const QuizPage: React.FC = () => {
  const [open, setOpen] = React.useState(true); // open on page load
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Find Your Ideal Recipe</h1>
        <p className="text-gray-700 mb-6">Answer a few quick questions to tailor the perfect nutrition for your pet.</p>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setOpen(true)}
        >Start Quiz</button>
      </main>
      <Footer />
      <PetQuizModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default QuizPage;
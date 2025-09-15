import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PetQuizModal from '../components/PetQuizModal';
import MealPlanPreview from '../components/MealPlanPreview';

// Find Your Ideal Recipe page with richer layout
const QuizPage: React.FC = () => {
  const [open, setOpen] = React.useState(true); // open on page load
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-extrabold text-blue-700">Find Your Ideal Recipe</h1>
            <p className="mt-3 text-gray-700 max-w-2xl">Answer a few quick questions and we’ll recommend a tailored nutrition plan for your pet.</p>
            <div className="mt-6">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
                onClick={() => setOpen(true)}
              >Start Quiz</button>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border">
            <h3 className="text-lg font-semibold text-blue-700">Personalized</h3>
            <p className="text-gray-700 mt-2 text-sm">We factor in type, age, activity, preferences, and concerns to recommend the best plan.</p>
          </div>
          <div className="p-6 rounded-xl border">
            <h3 className="text-lg font-semibold text-blue-700">Actionable</h3>
            <p className="text-gray-700 mt-2 text-sm">Get portion guidance, key nutrients, and a clear next step to order or chat with experts.</p>
          </div>
          <div className="p-6 rounded-xl border">
            <h3 className="text-lg font-semibold text-blue-700">Flexible</h3>
            <p className="text-gray-700 mt-2 text-sm">Adjust preferences like grain-free or protein sources and instantly see updated results.</p>
          </div>
        </section>


      </main>
      <Footer />
      <PetQuizModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default QuizPage;
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Dedicated page for "Start Your Pet's Journey" with richer guided content
const JourneyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-extrabold text-blue-700">Start Your Pet's Journey</h1>
            <p className="mt-3 text-gray-700 max-w-2xl">A step-by-step path to better health: onboarding, plan selection, and expert support.</p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">1) Getting Started</h2>
            <p className="text-gray-700">Transition smoothly to a new diet and set your pet up for success.</p>
            <ul className="list-disc pl-5 mt-3 text-gray-700 text-sm space-y-1">
              <li>7–10 day transition plan</li>
              <li>Portion size and feeding frequency</li>
              <li>Monitoring weight and condition</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">2) Choose a Plan</h2>
            <p className="text-gray-700">Curated options by type, age, and activity.</p>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="p-4 border rounded">Active Adult (High Protein)</div>
              <div className="p-4 border rounded">Sensitive Digestion (Balanced)</div>
              <div className="p-4 border rounded">Senior Wellness (Joint Support)</div>
              <div className="p-4 border rounded">Grain-Free Salmon</div>
            </div>
          </div>

          <div className="p-6 rounded-xl border">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">3) Expert Support</h2>
            <p className="text-gray-700">Talk to a nutritionist for custom needs.</p>
            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">Chat with a Nutritionist</button>
          </div>

          <div className="p-6 rounded-xl border">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Resources</h2>
            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
              <li>Ingredient glossary</li>
              <li>Allergen info</li>
              <li>Feeding guidelines by weight</li>
              <li>FAQs</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JourneyPage;
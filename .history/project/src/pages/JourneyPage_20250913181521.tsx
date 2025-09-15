import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Dedicated page for "Start Your Pet's Journey" with different content
const JourneyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-8">
        <h1 className="text-3xl font-bold text-blue-700">Start Your Pet's Journey</h1>
        <p className="text-gray-700">Welcome to your pet's personalized nutrition journey. Explore plans, transition guides, and expert support.</p>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Getting Started</h2>
            <p className="text-gray-700">Learn how to transition your pet to a new diet smoothly and safely.</p>
            <ul className="list-disc pl-5 mt-3 text-gray-700 text-sm space-y-1">
              <li>7–10 day transition plan</li>
              <li>Portion size and feeding frequency</li>
              <li>Monitoring weight and condition</li>
            </ul>
          </div>

          <div className="p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Recommended Plans</h2>
            <p className="text-gray-700">Discover curated meal plans based on pet type, age, and activity level.</p>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="p-4 border rounded">Active Adult (High Protein)</div>
              <div className="p-4 border rounded">Sensitive Digestion (Balanced)</div>
              <div className="p-4 border rounded">Senior Wellness (Joint Support)</div>
              <div className="p-4 border rounded">Grain-Free Salmon</div>
            </div>
          </div>

          <div className="p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Expert Support</h2>
            <p className="text-gray-700">Chat with our nutrition experts for specific concerns or custom plans.</p>
            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">Chat with a Nutritionist</button>
          </div>

          <div className="p-6 rounded-lg border">
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
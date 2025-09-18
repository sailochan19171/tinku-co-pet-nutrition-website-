import React from 'react';
import { SprayCan, Droplets, Brush, Timer } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-blue-600 mb-6">How It Works</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Clean smarter in four simple steps — powerful on messes, gentle on paws.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          <div className="text-center bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-8">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 opacity-90">
              <Brush className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-blue-600 mb-2">Prep: Sweep</h4>
            <p className="text-gray-700">Remove loose dirt and pet hair to maximize cleaning efficiency.</p>
          </div>
          <div className="text-center bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-8">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 opacity-90">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-blue-600 mb-2">Mix or Spray</h4>
            <p className="text-gray-700">Dilute concentrate as directed or use the ready-to-spray bottle.</p>
          </div>
          <div className="text-center bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-8">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 opacity-90">
              <SprayCan className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-blue-600 mb-2">Mop & Lift</h4>
            <p className="text-gray-700">Work in sections to lift stains, paw prints, and everyday grime.</p>
          </div>
          <div className="text-center bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-8">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 opacity-90">
              <Timer className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-blue-600 mb-2">Quick-Dry</h4>
            <p className="text-gray-700">Let it air-dry for a streak-free, residue-free shine that’s pet-safe once dry.</p>
          </div>
        </div>

        {/* Tips & Safety */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h4 className="text-3xl font-bold text-blue-600 mb-6">Tips & Safety</h4>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Pet-Safe Formula</h5>
                    <p className="text-gray-600">Non-toxic, ammonia-free, and low odor. Always allow surfaces to dry before pet traffic.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Target Odors</h5>
                    <p className="text-gray-600">Use the enzyme remover on urine spots to neutralize odors at the source.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Multi-Surface Safe</h5>
                    <p className="text-gray-600">Great for sealed hardwood, tile, laminate, and vinyl. Test in a small, hidden area first.</p>
                  </div>
                </div>
              </div>
              <a href="#products" className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200">
                Shop Cleaners
              </a>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mopping a pet-friendly floor"
                className="w-full rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

import React from 'react';
import { SprayCan, Droplets, Brush, Timer } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Meet the Essentials Section - Similar to reference site */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every step is thoughtfully designed with attention to detail, quality results, and the modern pet owner in mind.
          </p>
        </div>

        {/* Steps Grid - Clean and modern like reference site */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brush className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Prep: Sweep</h4>
            <p className="text-gray-600">Remove loose dirt and pet hair for maximum cleaning efficiency.</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Droplets className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Mix or Spray</h4>
            <p className="text-gray-600">Dilute concentrate as directed or use the ready-to-spray bottle.</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <SprayCan className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Mop & Lift</h4>
            <p className="text-gray-600">Work in sections to lift stains, paw prints, and everyday grime.</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Timer className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Quick-Dry</h4>
            <p className="text-gray-600">Air-dry for a streak-free, residue-free shine that's pet-safe once dry.</p>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Tips & Safety</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Pet-Safe Formula</h4>
                    <p className="text-gray-600">Non-toxic, ammonia-free, and low odor. Allow surfaces to dry before pet traffic.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Target Odors</h4>
                    <p className="text-gray-600">Use enzyme remover on urine spots to neutralize odors at the source.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Multi-Surface Safe</h4>
                    <p className="text-gray-600">Safe for sealed hardwood, tile, laminate, and vinyl. Test in a small area first.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#product" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  View Product
                </a>
                <a href="#precautions" className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors">
                  Safety Info
                </a>
              </div>
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

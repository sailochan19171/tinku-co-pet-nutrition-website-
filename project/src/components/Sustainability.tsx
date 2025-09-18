import React from 'react';
import { Recycle, Droplets, Leaf } from 'lucide-react';

const Sustainability: React.FC = () => {
  return (
    <section id="sustainability" className="relative overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold text-blue-700">Sustainability</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Thoughtful packaging and formulas designed for pet homes and the planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50">
            <div className="flex items-center gap-3 mb-2">
              <Recycle className="text-blue-700" />
              <h3 className="text-xl font-semibold text-blue-800">Recyclable Bottle</h3>
            </div>
            <p className="text-gray-700 text-sm">Please rinse and recycle according to local guidelines.</p>
          </div>

          <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50">
            <div className="flex items-center gap-3 mb-2">
              <Droplets className="text-blue-700" />
              <h3 className="text-xl font-semibold text-blue-800">Concentrated Formula</h3>
            </div>
            <p className="text-gray-700 text-sm">Less plastic per clean with recommended dilution.</p>
          </div>

          <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50">
            <div className="flex items-center gap-3 mb-2">
              <Leaf className="text-green-700" />
              <h3 className="text-xl font-semibold text-blue-800">Low VOC</h3>
            </div>
            <p className="text-gray-700 text-sm">Low-odor cleaning for indoor air quality when used as directed.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
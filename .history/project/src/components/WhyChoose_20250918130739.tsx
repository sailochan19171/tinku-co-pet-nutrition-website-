import React from 'react';
import { ShieldCheck, Sprout, Sparkles, Wind, Wallet } from 'lucide-react';

const WhyChoose: React.FC = () => {
  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Why Choose Our Cleaner</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every garment is thoughtfully designed with attention to detail, quality materials, and the modern individual in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Pet-Safe Formula</h3>
            <p className="text-gray-600">
              Neutral pH and residue-free finish that protects delicate paw pads and floor finishes.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Powerful Cleaning</h3>
            <p className="text-gray-600">
              Targets pet soils, paw oils, and everyday spills to lift marks and neutralize odors.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wind className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh & Clean</h3>
            <p className="text-gray-600">
              Low-odor, low-VOC formula for fresher indoor air during and after cleaning.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sprout className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Surface Safe</h3>
            <p className="text-gray-600">
              Safe on sealed hardwood, laminate, tile, and vinyl. Dries streak-free.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wallet className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Effective</h3>
            <p className="text-gray-600">
              Concentrated formula means better value - small amount makes large cleaning solution.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy to Use</h3>
            <p className="text-gray-600">
              Clear dilution guidance and quick-dry finish. No machines needed, just dilute and mop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
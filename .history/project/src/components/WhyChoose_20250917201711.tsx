import React from 'react';
import { ShieldCheck, Sprout, Sparkles, Wind, Wallet } from 'lucide-react';

const WhyChoose: React.FC = () => {
  return (
    <section id="why" className="relative overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold text-blue-700">Why Choose Our Pet Floor Cleaner</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto">
            Built specifically for homes with pets. Every decision—from chemistry to scent—prioritizes paws, floors, and indoor air.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50">
            <div className="flex items-start gap-3 mb-3">
              <ShieldCheck className="text-blue-700" />
              <h3 className="text-xl font-semibold text-blue-800">Pet‑First Chemistry</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Neutral pH and residue‑free finish help protect delicate paw pads and floor finishes. No bleach, no ammonia, and no harsh phosphates.
            </p>
          </div>

          <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50">
            <div className="flex items-start gap-3 mb-3">
              <Sparkles className="text-blue-700" />
              <h3 className="text-xl font-semibold text-blue-800">Designed for Pet Messes</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Targets common pet soils—paw oils, proteins, light mud, and everyday spills—to lift marks and help neutralize pet‑related odors.
            </p>
          </div>

          <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50">
            <div className="flex items-start gap-3 mb-3">
              <Wind className="text-blue-700" />
              <h3 className="text-xl font-semibold text-blue-800">Indoor‑Air Mindful</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Low‑odor, low‑VOC formula for fresher rooms during and after cleaning when used as directed.
            </p>
          </div>

          <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50">
            <div className="flex items-start gap-3 mb-3">
              <Sprout className="text-green-700" />
              <h3 className="text-xl font-semibold text-blue-800">Surface‑Smart</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Safe on sealed hardwood, laminate, tile, and vinyl. Dries streak‑free with no sticky films that attract dust.
            </p>
          </div>

          <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50">
            <div className="flex items-start gap-3 mb-3">
              <Wallet className="text-blue-700" />
              <h3 className="text-xl font-semibold text-blue-800">Cost‑Per‑Clean Advantage</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Concentrated formula means a small capful makes a full liter of solution—great results with less product.
            </p>
          </div>

          <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50">
            <div className="flex items-start gap-3 mb-3">
              <ShieldCheck className="text-blue-700" />
              <h3 className="text-xl font-semibold text-blue-800">Trusted Routine</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Clear dilution guidance and quick‑dry finish fit real homes—no machines needed, just dilute and mop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
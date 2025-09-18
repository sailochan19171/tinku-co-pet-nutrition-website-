import React from 'react';
import { Droplets, SprayCan, Sparkles, FlaskConical } from 'lucide-react';

const SingleProduct: React.FC = () => {
  return (
    <section id="product" className="relative overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold text-blue-700">Pet-Safe Floor Cleaner</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            A single, powerful liquid cleaner formulated for homes with pets—tough on stains and odors, gentle on paws.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Product panel */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 ring-1 ring-blue-200/40">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-blue-600/90 flex items-center justify-center shadow-md">
                <Sparkles className="text-white w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-700">What it does</h3>
                <p className="mt-2 text-gray-700">
                  Lifts grime, paw prints, and everyday spills while neutralizing pet-related odors. Dries streak-free without
                  sticky residue.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-white/70 ring-1 ring-blue-100">
                <div className="flex items-center gap-3 mb-2">
                  <Droplets className="text-blue-700" />
                  <h4 className="font-semibold text-blue-800">Dilution & Use</h4>
                </div>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><span className="font-semibold">Daily mopping:</span> Mix 1 cap (10–15ml) in 1L water.</li>
                  <li><span className="font-semibold">Tough spots:</span> Use a small amount undiluted, wipe, then rinse lightly.</li>
                  <li><span className="font-semibold">Odor control:</span> Apply, let sit 5 min, then mop clean.</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-white/70 ring-1 ring-blue-100">
                <div className="flex items-center gap-3 mb-2">
                  <FlaskConical className="text-blue-700" />
                  <h4 className="font-semibold text-blue-800">Surfaces</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Sealed hardwood, tile, vinyl, and laminate. Always spot-test in an inconspicuous area first.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/70 ring-1 ring-blue-100">
                <div className="flex items-center gap-3 mb-2">
                  <Sprayer className="text-blue-700" />
                  <h4 className="font-semibold text-blue-800">Scent & Finish</h4>
                </div>
                <p className="text-sm text-gray-700">Light, fresh scent. Leaves a clean, residue-free shine.</p>
              </div>

              <div className="p-5 rounded-xl bg-white/70 ring-1 ring-blue-100">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="text-blue-700" />
                  <h4 className="font-semibold text-blue-800">Pet Safety</h4>
                </div>
                <p className="text-sm text-gray-700">Safe around pets when used as directed. Keep pets off floors until fully dry.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#how-it-works" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-sm">How to Use</a>
              <a href="#precautions" className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg ring-1 ring-blue-200 hover:bg-blue-50">Precautions</a>
            </div>
          </div>

          {/* Visual panel */}
          <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 ring-1 ring-blue-200/40 overflow-hidden">
            <div className="absolute -top-12 -right-8 w-60 h-60 rounded-full bg-blue-200/50 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-orange-200/50 blur-2xl" />
            <div className="relative z-10">
              <img
                src="/tinku-logo.png"
                alt="Brand"
                className="w-36 h-auto opacity-90 mb-6 select-none pointer-events-none"
              />
              <h4 className="text-2xl font-bold text-blue-700 mb-2">Simple, Single Product</h4>
              <p className="text-gray-700">
                One bottle for everyday cleaning. No machines required—just dilute and mop.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="p-4 rounded-lg bg-white/80 ring-1 ring-blue-100">
                  <div className="text-xs text-gray-500">Bottle Size</div>
                  <div className="font-semibold text-gray-800">1L / 500ml</div>
                </div>
                <div className="p-4 rounded-lg bg-white/80 ring-1 ring-blue-100">
                  <div className="text-xs text-gray-500">Finish</div>
                  <div className="font-semibold text-gray-800">Streak-free</div>
                </div>
                <div className="p-4 rounded-lg bg-white/80 ring-1 ring-blue-100">
                  <div className="text-xs text-gray-500">pH</div>
                  <div className="font-semibold text-gray-800">Neutral</div>
                </div>
                <div className="p-4 rounded-lg bg-white/80 ring-1 ring-blue-100">
                  <div className="text-xs text-gray-500">Residue</div>
                  <div className="font-semibold text-gray-800">None</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
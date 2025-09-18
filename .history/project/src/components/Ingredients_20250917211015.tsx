import React from 'react';
import { CheckCircle2, Shield, Beaker, Leaf, ArrowRight } from 'lucide-react';

const Ingredients: React.FC = () => {
  return (
    <section id="ingredients" className="relative overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold text-blue-700">Ingredients & Safety</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Formulated for homes with pets. Effective cleaning with ingredients selected for safety when used as directed.
          </p>
        </div>

        {/* Balanced grid: 1 column on mobile, 2 on md/lg, 4 on xl+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <Beaker className="text-blue-700" />
              <h3 className="text-xl font-semibold text-blue-800">Cleansing Agents</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Mild non-ionic surfactants help lift dirt and grime without harsh residues.
            </p>
            <a href="#dilution-guide" className="mt-4 inline-flex items-center gap-1 text-blue-700 hover:text-blue-800 font-semibold text-sm">
              Learn more <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <Leaf className="text-green-700" />
              <h3 className="text-xl font-semibold text-blue-800">Odor Neutralizers</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Targets pet-related odors to keep floors and rooms smelling fresh.
            </p>
            <a href="#stain-odor" className="mt-4 inline-flex items-center gap-1 text-blue-700 hover:text-blue-800 font-semibold text-sm">
              Learn more <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-800">pH Balanced</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Neutral pH helps protect floor finishes and sensitive noses.
            </p>
            <a href="#precautions" className="mt-4 inline-flex items-center gap-1 text-blue-700 hover:text-blue-800 font-semibold text-sm">
              Learn more <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle2 className="text-green-600" />
              <h3 className="text-xl font-semibold text-blue-800">Free From</h3>
            </div>
            <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
              <li>Bleach</li>
              <li>Ammonia</li>
              <li>Phosphates</li>
              <li>Parabens & dyes</li>
            </ul>
            <a href="#ingredients" className="mt-4 inline-flex items-center gap-1 text-blue-700 hover:text-blue-800 font-semibold text-sm">
              Learn more <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-600">
          Always read the label and follow directions. Keep pets off floors until completely dry.
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
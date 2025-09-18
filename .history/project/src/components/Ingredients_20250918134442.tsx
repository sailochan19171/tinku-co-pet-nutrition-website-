import React, { useState } from 'react';
import { CheckCircle2, Shield, Beaker, Leaf, ChevronDown } from 'lucide-react';

const Ingredients: React.FC = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setOpen((p) => ({ ...p, [key]: !p[key] }));

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
            <button
              type="button"
              onClick={() => toggle('Cleansing')}
              aria-expanded={!!open['Cleansing']}
              aria-controls="ingr-cleansing"
              className="mt-4 inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold text-sm"
            >
              Learn more
              <ChevronDown className={`w-4 h-4 transition-transform ${open['Cleansing'] ? 'rotate-180' : ''}`} />
            </button>
            {open['Cleansing'] && (
              <div id="ingr-cleansing" className="mt-3 border-t border-blue-100 pt-3">
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>Everyday mix: 10–15 ml per 1L for routine mopping.</li>
                  <li>Heavy soil: 20–30 ml per 1L for muddy paw days.</li>
                  <li>Microfiber tip: Wring well for a streak‑free finish.</li>
                </ul>
              </div>
            )}
          </div>

          <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <Leaf className="text-green-700" />
              <h3 className="text-xl font-semibold text-blue-800">Odor Neutralizers</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Targets pet-related odors to keep floors and rooms smelling fresh.
            </p>
            <button
              type="button"
              onClick={() => toggle('Odor')}
              aria-expanded={!!open['Odor']}
              aria-controls="ingr-odor"
              className="mt-4 inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold text-sm"
            >
              Learn more
              <ChevronDown className={`w-4 h-4 transition-transform ${open['Odor'] ? 'rotate-180' : ''}`} />
            </button>
            {open['Odor'] && (
              <div id="ingr-odor" className="mt-3 border-t border-blue-100 pt-3">
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>Spot & odor: Apply diluted; allow ~5 minutes contact time.</li>
                  <li>Blot first: Remove excess before cleaning for best results.</li>
                  <li>Repeat if needed: For set‑in odors, a second pass helps.</li>
                </ul>
              </div>
            )}
          </div>

          <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-800">pH Balanced</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Neutral pH helps protect floor finishes and sensitive noses.
            </p>
            <button
              type="button"
              onClick={() => toggle('pH')}
              aria-expanded={!!open['pH']}
              aria-controls="ingr-ph"
              className="mt-4 inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold text-sm"
            >
              Learn more
              <ChevronDown className={`w-4 h-4 transition-transform ${open['pH'] ? 'rotate-180' : ''}`} />
            </button>
            {open['pH'] && (
              <div id="ingr-ph" className="mt-3 border-t border-blue-100 pt-3">
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>Safe approach: Neutral pH is friendly to most sealed floors.</li>
                  <li>Finish care: Helps avoid dulling waxes or delicate coatings.</li>
                  <li>Ventilation: Light airflow speeds dry time for quicker access.</li>
                </ul>
              </div>
            )}
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
            <button
              type="button"
              onClick={() => toggle('FreeFrom')}
              aria-expanded={!!open['FreeFrom']}
              aria-controls="ingr-free"
              className="mt-4 inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold text-sm"
            >
              Learn more
              <ChevronDown className={`w-4 h-4 transition-transform ${open['FreeFrom'] ? 'rotate-180' : ''}`} />
            </button>
            {open['FreeFrom'] && (
              <div id="ingr-free" className="mt-3 border-t border-blue-100 pt-3">
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>No harsh chlorine or ammonia-based fumes.</li>
                  <li>No phosphate builders; gentler on surfaces and drains.</li>
                  <li>No added dyes; keeps residue visibility minimal.</li>
                </ul>
              </div>
            )}
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
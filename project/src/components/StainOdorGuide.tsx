import React from 'react';
import { PawPrint, SprayCan, Timer } from 'lucide-react';

const StainOdorGuide: React.FC = () => {
  const tips = [
    {
      title: 'Muddy paw prints',
      steps: [
        'Sweep or vacuum loose dirt first',
        'Mop with standard dilution (10–15 ml / 1L)',
        'Allow to air dry for a streak-free finish',
      ],
    },
    {
      title: 'Urine spots & odor',
      steps: [
        'Apply diluted solution to the spot',
        'Allow 5 minutes contact time',
        'Mop or wipe clean, repeat if needed',
      ],
    },
    {
      title: 'Food spills',
      steps: [
        'Wipe solids first',
        'Use heavy-duty dilution (20–30 ml / 1L)',
        'Rinse lightly if residue remains',
      ],
    },
  ];

  return (
    <section id="stain-odor" className="relative overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold text-blue-700">Stain & Odor Guide</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Quick references for common pet messes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <div key={tip.title} className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50">
              <div className="flex items-center gap-3 mb-3">
                <PawPrint className="text-blue-700" />
                <h3 className="text-xl font-semibold text-blue-800">{tip.title}</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                {tip.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
                <SprayCan className="w-4 h-4" />
                <Timer className="w-4 h-4" />
                Follow label directions; allow surfaces to dry completely before pet traffic.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StainOdorGuide;
import React from 'react';
import { Check, X, Droplets } from 'lucide-react';

const Comparison: React.FC = () => {
  const rows = [
    { feature: 'Neutral pH (floor finish friendly)', us: true, alt: false },
    { feature: 'Low residue, streak‑free dry', us: true, alt: false },
    { feature: 'Odor support for pet soils', us: true, alt: 'partial' },
    { feature: 'No bleach / no ammonia', us: true, alt: 'varies' },
    { feature: 'Clear dilution for daily & heavy', us: true, alt: 'unclear' },
  ];

  const cell = (value: boolean | string) => {
    if (value === true) return <span className="inline-flex items-center gap-1 text-green-700"><Check className="w-4 h-4" /> Yes</span>;
    if (value === false) return <span className="inline-flex items-center gap-1 text-red-600"><X className="w-4 h-4" /> No</span>;
    return <span className="text-gray-600 capitalize">{String(value)}</span>;
  };

  return (
    <section id="comparison" className="relative overflow-hidden py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold text-blue-700">How We Compare</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Focused on pet households vs. generic floor cleaners.
          </p>
        </div>

        <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg ring-1 ring-blue-200/50 overflow-hidden">
          <div className="px-6 py-4 text-sm text-gray-600 flex items-center gap-2 border-b border-blue-100/60">
            <Droplets className="w-4 h-4 text-blue-700" />
            Concentrated liquid—dilute to fit the mess.
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-blue-800">
                  <th className="py-3 px-4">Feature</th>
                  <th className="py-3 px-4">Our Cleaner</th>
                  <th className="py-3 px-4">Typical Generic</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {rows.map((r) => (
                  <tr key={r.feature} className="border-t border-blue-100/60">
                    <td className="py-3 px-4 font-medium">{r.feature}</td>
                    <td className="py-3 px-4">{cell(r.us)}</td>
                    <td className="py-3 px-4">{cell(r.alt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
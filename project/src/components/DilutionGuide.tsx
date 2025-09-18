import React from 'react';
import { Droplets, CupSoda, SprayCan } from 'lucide-react';

const DilutionGuide: React.FC = () => {
  const rows = [
    { use: 'Daily mopping', ratio: '10–15 ml per 1L water', method: 'Bucket & mop' },
    { use: 'Heavy soil', ratio: '20–30 ml per 1L water', method: 'Bucket & mop' },
    { use: 'Spot treatment', ratio: 'Use small amount undiluted', method: 'Apply, wipe, light rinse' },
    { use: 'Odor neutralization', ratio: 'Diluted; let sit 5 min', method: 'Mop or wipe clean' },
  ];

  return (
    <section id="dilution" className="relative overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold text-blue-700">Dilution Guide</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Exact mixing instructions for different cleaning needs.
          </p>
        </div>

        <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg ring-1 ring-blue-200/50 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-blue-100">
            <div className="p-8 flex items-start gap-4">
              <CupSoda className="text-blue-700 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-blue-800">Standard</h3>
                <p className="text-gray-700">10–15 ml per 1L for everyday cleaning.</p>
              </div>
            </div>
            <div className="p-8 flex items-start gap-4">
              <Droplets className="text-blue-700 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-blue-800">Heavy Duty</h3>
                <p className="text-gray-700">Increase to 20–30 ml per 1L for muddy paw days.</p>
              </div>
            </div>
            <div className="p-8 flex items-start gap-4">
              <SprayCan className="text-blue-700 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-blue-800">Spot & Odor</h3>
                <p className="text-gray-700">Use small amount undiluted. Allow contact time before wiping.</p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-blue-800">
                    <th className="py-3 pr-4">Use</th>
                    <th className="py-3 pr-4">Mix Ratio</th>
                    <th className="py-3 pr-4">Method</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {rows.map((r) => (
                    <tr key={r.use} className="border-t border-blue-100/60">
                      <td className="py-3 pr-4 font-medium">{r.use}</td>
                      <td className="py-3 pr-4">{r.ratio}</td>
                      <td className="py-3 pr-4">{r.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DilutionGuide;
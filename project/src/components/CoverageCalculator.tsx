import React, { useMemo, useState } from 'react';
import { Ruler, Calculator, Droplets } from 'lucide-react';

// Simple non-persistent estimator: estimates how much solution you need for a floor area.
const CoverageCalculator: React.FC = () => {
  const [area, setArea] = useState<string>('50'); // m²
  const [soiling, setSoiling] = useState<'standard' | 'heavy'>('standard');

  const { mixPerL, litersNeeded, mlConcentrate } = useMemo(() => {
    const a = Math.max(0, Number(area) || 0);
    const coveragePerL = 40; // approx m² per 1L cleaning solution for mopping
    const liters = a / coveragePerL;
    const mix = soiling === 'standard' ? 12.5 : 25; // ml per 1L
    const ml = liters * mix;
    return { mixPerL: mix, litersNeeded: liters, mlConcentrate: ml };
  }, [area, soiling]);

  return (
    <section id="coverage" className="relative overflow-hidden py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-5xl lg:text-6xl font-bold text-blue-700">Coverage Estimator</h2>
          <p className="mt-4 text-lg text-gray-700">Estimate how much diluted solution you’ll need.</p>
        </div>

        <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg ring-1 ring-blue-200/50 p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <label className="flex flex-col">
              <span className="text-sm text-gray-600 mb-1 flex items-center gap-2"><Ruler className="w-4 h-4" /> Floor area (m²)</span>
              <input
                value={area}
                onChange={(e) => setArea(e.target.value)}
                type="number"
                min={0}
                className="rounded-lg border border-blue-200 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="e.g., 50"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-sm text-gray-600 mb-1 flex items-center gap-2"><Droplets className="w-4 h-4" /> Soiling</span>
              <select
                value={soiling}
                onChange={(e) => setSoiling(e.target.value as any)}
                className="rounded-lg border border-blue-200 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="standard">Standard</option>
                <option value="heavy">Heavy</option>
              </select>
            </label>
            <div className="flex items-end">
              <div className="w-full bg-blue-600 text-white rounded-lg px-4 py-3 flex items-center justify-center gap-2 shadow-sm">
                <Calculator className="w-4 h-4" /> Calculate
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-white/80 ring-1 ring-blue-100">
              <div className="text-xs text-gray-500">Mix per 1L</div>
              <div className="font-semibold text-gray-800">{mixPerL.toFixed(1)} ml</div>
            </div>
            <div className="p-4 rounded-lg bg-white/80 ring-1 ring-blue-100">
              <div className="text-xs text-gray-500">Solution Needed</div>
              <div className="font-semibold text-gray-800">{litersNeeded.toFixed(2)} L</div>
            </div>
            <div className="p-4 rounded-lg bg-white/80 ring-1 ring-blue-100">
              <div className="text-xs text-gray-500">Concentrate Total</div>
              <div className="font-semibold text-gray-800">{mlConcentrate.toFixed(0)} ml</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageCalculator;
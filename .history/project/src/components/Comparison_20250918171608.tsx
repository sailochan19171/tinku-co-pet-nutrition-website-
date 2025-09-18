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

  const Badge: React.FC<{ color: 'green' | 'red' | 'amber' | 'slate' | 'gray'; children: React.ReactNode }> = ({ color, children }) => {
    const base = 'inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ring-1 ring-inset';
    const map: Record<string, string> = {
      green: 'bg-green-50 text-green-700 ring-green-200',
      red: 'bg-red-50 text-red-600 ring-red-200',
      amber: 'bg-amber-50 text-amber-700 ring-amber-200',
      slate: 'bg-slate-50 text-slate-700 ring-slate-200',
      gray: 'bg-gray-50 text-gray-700 ring-gray-200',
    };
    return <span className={`${base} ${map[color]}`}>{children}</span>;
  };

  const cell = (value: boolean | string) => {
    if (value === true)
      return (
        <Badge color="green">
          <Check className="w-4 h-4" /> Yes
        </Badge>
      );
    if (value === false)
      return (
        <Badge color="red">
          <X className="w-4 h-4" /> No
        </Badge>
      );

    const v = String(value).toLowerCase();
    const label = v.charAt(0).toUpperCase() + v.slice(1);
    const color = v === 'partial' ? 'amber' : v === 'varies' ? 'slate' : 'gray';
    return <Badge color={color as any}>{label}</Badge>;
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

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg ring-1 ring-blue-200/60 overflow-hidden">
          <div className="px-6 py-4 text-sm text-gray-600 flex items-center gap-2 border-b border-blue-100">
            <Droplets className="w-4 h-4 text-blue-700" />
            Concentrated liquid—dilute to fit the mess.
          </div>
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-sm">
              <colgroup>
                <col className="w-1/2" />
                <col className="w-1/4" />
                <col className="w-1/4" />
              </colgroup>
              <thead>
                <tr className="text-blue-800">
                  <th className="py-3 px-4">Feature</th>
                  <th className="py-3 px-4">Our Cleaner</th>
                  <th className="py-3 px-4">Typical Generic</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {rows.map((r) => (
                  <tr key={r.feature} className="border-t border-blue-100">
                    <td className="py-3 px-4 font-medium align-top">{r.feature}</td>
                    <td className="py-3 px-4 align-top">{cell(r.us)}</td>
                    <td className="py-3 px-4 align-top">{cell(r.alt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden divide-y divide-blue-100">
            {rows.map((r) => (
              <div key={r.feature} className="px-4 py-3">
                <div className="font-medium text-blue-900">{r.feature}</div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-sm items-center">
                  <div>
                    <div className="text-xs text-blue-800/80">Our Cleaner</div>
                    <div className="mt-1">{cell(r.us)}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-blue-800/80">Typical Generic</div>
                    <div className="mt-1 inline-block">{cell(r.alt)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
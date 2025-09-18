import React, { useState } from 'react';
import { PawPrint, Home, Baby, Dog, ChevronDown } from 'lucide-react';

type CaseItem = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
  details: string[]; // bullet points for expanded content
};

const UseCases: React.FC = () => {
  const cases: CaseItem[] = [
    {
      title: 'Daily Pet Traffic',
      icon: PawPrint,
      desc:
        'Quick mop after walks—removes paw oils and prints without leaving a film that attracts dust.',
      details: [
        'How to use: Mix 10–15 ml per 1L of warm water and mop high‑traffic paths.',
        'Microfiber tip: Wring well—slightly damp is enough for streak‑free results.',
        'Why it works: Non‑ionic surfactants lift light grime without sticky residues.',
      ],
    },
    {
      title: 'Family Living Areas',
      icon: Home,
      desc:
        'Low odor and quick dry support use around play areas and common rooms when used as directed.',
      details: [
        'Fast routine: A light pass keeps oils and fine dust from building up.',
        'Comfort first: Dries quickly, leaving floors comfortable for socks and paws.',
        'Tip: Open a window or run a fan to speed drying on humid days.',
      ],
    },
    {
      title: 'Puppies & Training',
      icon: Dog,
      desc:
        'Helps neutralize common puppy soils; follow Precautions and allow full dry before paw traffic.',
      details: [
        'Spot‑treat: Apply diluted solution, allow ~5 minutes contact, then wipe clean.',
        'Layered messes: Blot first, then clean; repeat if needed for set‑in odors.',
        'Safety: Keep pups off until the area is completely dry.',
      ],
    },
    {
      title: 'Kids & Crawlers',
      icon: Baby,
      desc:
        'Residue‑free finish helps keep floors comfortable for hands, knees, and paws.',
      details: [
        'No sticky film: Leaves a natural feel that won’t attract dust or lint.',
        'Gentle approach: Neutral pH supports sensitive noses and finished floors.',
        'Daily shine: A quick damp mop refresh keeps play zones looking tidy.',
      ],
    },
  ];

  // First card expanded by default
  const [expanded, setExpanded] = useState<Record<number, boolean>>({ 0: true });

  const toggle = (idx: number) =>
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));

  return (
    <section id="use-cases" className="relative overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold text-blue-700">Made for Real Pet Homes</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Where this cleaner shines day‑to‑day.
          </p>
        </div>

        {/* Balanced grid: 1 column on mobile, 2 on md/lg, 4 on xl+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {cases.map((c, idx) => (
            <div key={c.title} className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <c.icon className="text-blue-700" />
                <h3 className="text-xl font-semibold text-blue-800">{c.title}</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{c.desc}</p>

              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={!!expanded[idx]}
                aria-controls={`usecase-details-${idx}`}
                className="mt-4 inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold text-sm"
              >
                Learn more
                <ChevronDown className={`w-4 h-4 transition-transform ${expanded[idx] ? 'rotate-180' : ''}`} />
              </button>

              {expanded[idx] && (
                <div id={`usecase-details-${idx}`} className="mt-3 border-t border-blue-100 pt-3">
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    {c.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
import React from 'react';
import { PawPrint, Home, Baby, Dog } from 'lucide-react';

const UseCases: React.FC = () => {
  const cases = [
    {
      title: 'Daily Pet Traffic',
      icon: PawPrint,
      desc:
        'Quick mop after walks—removes paw oils and prints without leaving a film that attracts dust.',
    },
    {
      title: 'Family Living Areas',
      icon: Home,
      desc:
        'Low odor and quick dry support use around play areas and common rooms when used as directed.',
    },
    {
      title: 'Puppies & Training',
      icon: Dog,
      desc:
        'Helps neutralize common puppy soils; follow Precautions and allow full dry before paw traffic.',
    },
    {
      title: 'Kids & Crawlers',
      icon: Baby,
      desc:
        'Residue‑free finish helps keep floors comfortable for hands, knees, and paws.',
    },
  ];

  return (
    <section id="use-cases" className="relative overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold text-blue-700">Made for Real Pet Homes</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Where this cleaner shines day‑to‑day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50">
              <div className="flex items-center gap-3 mb-3">
                <c.icon className="text-blue-700" />
                <h3 className="text-xl font-semibold text-blue-800">{c.title}</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
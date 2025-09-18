import React from 'react';
import { Award, Shield, CheckCircle2 } from 'lucide-react';

const Certifications: React.FC = () => {
  const points = [
    {
      title: 'Quality Control',
      desc: 'Manufactured under controlled processes with batch‑level checks for consistency.',
      icon: Shield,
    },
    {
      title: 'Ingredient Transparency',
      desc: 'Clear labeling and safety guidance for informed use around pets and families.',
      icon: CheckCircle2,
    },
    {
      title: 'Compliance Ready',
      desc: 'Formulated with regulatory best practices in mind; consult local guidelines as needed.',
      icon: Award,
    },
  ];

  return (
    <section id="certifications" className="relative overflow-hidden py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold text-blue-700">Quality & Certification</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Built for trust—clear labels, stable formula, and documented best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((p) => (
            <div key={p.title} className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50">
              <div className="flex items-center gap-3 mb-2">
                <p.icon className="text-blue-700" />
                <h3 className="text-xl font-semibold text-blue-800">{p.title}</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
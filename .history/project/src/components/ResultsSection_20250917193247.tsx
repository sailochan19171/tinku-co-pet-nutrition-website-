import React from 'react';

const ResultsSection: React.FC = () => {
  const results = [
    'Streak-free shine on finished floors',
    'Neutralized pet odors (urine, dander, wet fur)',
    'No sticky residue — safe once dry',
    'Cleaner paws, fewer prints after drying',
  ];

  return (
    <section className="py-20 bg-white" aria-labelledby="results-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="results-title" className="text-4xl lg:text-5xl font-bold text-blue-600 mb-6">What You Get</h2>
        <p className="text-lg text-gray-700 mb-8">Visible results from the first clean.</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {results.map((r, i) => (
            <li key={i} className="flex items-start p-4 rounded-xl border bg-white">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
              <span className="text-gray-800">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ResultsSection;
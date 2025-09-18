import React from 'react';

const UseCasesSection: React.FC = () => {
  const cases = [
    { t: 'Everyday Mopping', d: 'Daily dust, paw prints, and spills.' },
    { t: 'Accident Cleanup', d: 'Urine spots — pair with enzyme remover.' },
    { t: 'Kitchen & Dining', d: 'Food drips and grease on tiles.' },
    { t: 'Rainy-Day Paws', d: 'Muddy paw trails and water marks.' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white" aria-labelledby="usecases-title">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="usecases-title" className="text-4xl lg:text-5xl font-bold text-blue-600 text-center mb-10">Where It Shines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="rounded-2xl border p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900">{c.t}</h3>
              <p className="mt-2 text-gray-700">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
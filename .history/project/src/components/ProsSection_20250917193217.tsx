import React from 'react';

const ProsSection: React.FC = () => {
  const pros = [
    { title: 'Pet-Safe Formula', desc: 'Non-toxic, ammonia-free, and low odor. Safe once dry.' },
    { title: 'Residue-Free Finish', desc: 'Leaves floors streak-free with no sticky residue.' },
    { title: 'Odor Neutralization', desc: 'Targets pet odors at the source with enzyme action.' },
    { title: 'Quick-Dry', desc: 'Fast evaporating for minimal downtime and paw prints.' },
    { title: 'Multi-Surface', desc: 'Ideal for sealed hardwood, tile, vinyl, laminate.' },
    { title: 'Budget-Friendly', desc: 'High performance at just ₹150 per 1L.' },
  ];

  return (
    <section className="py-20 bg-white" aria-labelledby="pros-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="pros-title" className="text-4xl lg:text-5xl font-bold text-blue-600 text-center mb-12">Why Pet Parents Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pros.map((p, i) => (
            <div key={i} className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-gray-700">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProsSection;
import React from 'react';

const FeaturesSection: React.FC = () => {
  const features = [
    { k: 'pH', v: 'Neutral' },
    { k: 'Scent', v: 'Fresh & Light' },
    { k: 'Dilution', v: 'Capful in a bucket (as directed)' },
    { k: 'Surfaces', v: 'Sealed hardwood, tile, vinyl, laminate' },
    { k: 'Safety', v: 'Non-toxic, ammonia-free, low-odor' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50" aria-labelledby="features-title">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="features-title" className="text-4xl lg:text-5xl font-bold text-blue-600 text-center mb-8">Product Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border p-4 bg-white">
              <div className="text-sm text-gray-500">{f.k}</div>
              <div className="text-lg font-semibold">{f.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
import React from 'react';

const ProductCategories: React.FC = () => {
  const categories = [
    {
      title: 'Daily Floor Cleaner',
      description: 'Neutral pH, pet-safe formula for everyday mopping',
      image: 'https://images.pexels.com/photos/4107286/pexels-photo-4107286.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Safe for paws', 'Residue-free shine', 'Fresh, light scent']
    },
    {
      title: 'Enzyme Odor Remover',
      description: 'Targets and breaks down urine and organic odor molecules',
      image: 'https://images.pexels.com/photos/8566444/pexels-photo-8566444.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Eliminates odors at the source', 'Great for accidents', 'Works on tiles & grout']
    },
    {
      title: 'Multi-Surface Cleaner',
      description: 'Streak-free cleaning for tiles, vinyl, sealed hardwood, and laminate',
      image: 'https://images.pexels.com/photos/4107284/pexels-photo-4107284.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['No harsh fumes', 'Quick-dry', 'Non-corrosive']
    },
    {
      title: 'Disinfecting Floor Cleaner',
      description: 'Powerful cleaning action suitable for pet homes when used as directed',
      image: 'https://images.pexels.com/photos/6195110/pexels-photo-6195110.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Removes household germs', 'Pet-safe when dry', 'Low odor']
    },
    {
      title: 'Concentrate Refill',
      description: 'Eco-friendly refills—mix with water to reduce plastic waste',
      image: 'https://images.pexels.com/photos/3735169/pexels-photo-3735169.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Saves space', 'Lower carbon footprint', 'Budget-friendly']
    },
    {
      title: 'Quick-Clean Wipes',
      description: 'On-the-go cleanup for muddy paws and small spills',
      image: 'https://images.pexels.com/photos/4498122/pexels-photo-4498122.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Alcohol-free', 'Soft and durable', 'Plant-based fibers']
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-blue-600 mb-6">
            Pet-Safe Cleaners
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-8">
            For Every Mess
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Powerful on stains and odors, gentle on paws and floors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-blue-600 mb-3">{category.title}</h4>
                <p className="text-gray-700 mb-4">{category.description}</p>
                <ul className="space-y-2 mb-6">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;

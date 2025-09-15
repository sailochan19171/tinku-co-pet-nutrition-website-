import React from 'react';

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-100 to-white px-6 sm:px-8 lg:px-12 border border-gray-300 rounded-none">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Product Images */}
          <div className="lg:w-1/2">
            <div className="relative border border-gray-200 rounded-none p-4">
              <img
                src="https://images.pexels.com/photos/7516366/pexels-photo-7516366.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Pet food products"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-8">
              For strong bones
            </h2>
            <div className="mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-none text-lg transition-colors duration-200">
                Find Your Formula
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
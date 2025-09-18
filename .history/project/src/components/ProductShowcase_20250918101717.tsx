import React from 'react';

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-100 to-white px-4 sm:px-6 lg:px-8 border border-gray-300 rounded-none" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Product Images */}
          <div className="lg:w-1/2" data-aos="zoom-in" data-aos-delay="100">
            <div className="relative border border-gray-200 rounded-none p-4">
              <img
                src="https://images.pexels.com/photos/6195121/pexels-photo-6195121.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Pet-safe floor cleaner kit"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-1/2 lg:pl-12" data-aos="fade-left" data-aos-delay="150">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-8">
              Powerful, Pet-Safe Cleaning
            </h2>
            <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-none text-lg transition-colors duration-200">
                Shop Cleaners
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
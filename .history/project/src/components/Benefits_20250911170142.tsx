import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section className="py-16 bg-white px-6 sm:px-8 lg:px-12 border border-gray-300 rounded-none">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Content */}
          <div className="lg:w-1/2 lg:pr-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-8">
              The Benefits
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-8">
              of a science-led diet
            </h3>
            <div className="mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-none text-lg transition-colors duration-200">
                Find Your Ideal Recipe
              </button>
            </div>
          </div>

          {/* Cat Image */}
          <div className="lg:w-1/2">
            <div className="relative border border-gray-200 rounded-none p-4">
              <img
                src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Orange tabby cat"
                className="w-full max-w-md mx-auto rounded-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content */}
          <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-8">
              The Benefits
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-8">
              of a science-led diet
            </h3>
            <div className="mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200">
                Find Your Ideal Recipe
              </button>
            </div>
          </div>
          
          {/* Cat Image */}
          <div className="lg:w-1/2">
            <img
              src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Orange tabby cat"
              className="w-full max-w-md mx-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
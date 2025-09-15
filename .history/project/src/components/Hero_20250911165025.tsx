import React from 'react';

const Hero: React.FC = () => {
  return (
<section className="relative bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden px-6 sm:px-8 lg:px-12 border border-gray-300 rounded-none">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-bold text-blue-600 sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">Premium Pet</span>
                <span className="block">Nutrition</span>
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-xl">
                Tailored solutions for every life stage, breed, and health need.
              </p>
              <div className="mt-8">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-none text-lg transition-colors duration-200">
                  Find Your Formula
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Hero Image */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Happy white dog"
        />
      </div>
      
      {/* Feedback Button */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
        <button className="bg-blue-600 text-white px-2 py-8 text-sm font-medium transform rotate-90 origin-center hover:bg-blue-700 transition-colors duration-200">
          Feedback
        </button>
      </div>
    </section>
  );
};

export default Hero;
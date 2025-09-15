import React from 'react';
import { Fish, Drumstick, Apple } from 'lucide-react';

const Muscles: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Content */}
          <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-8">
              Muscles
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              We use only high-quality protein sources in our foods since they are the 
              essential building blocks of all tissues and organs of the body.
            </p>
            <div className="mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200">
                Find Your Ideal Recipe
              </button>
            </div>
          </div>
          
          {/* Cat Image and Icons */}
          <div className="lg:w-1/2 relative">
            <div className="flex justify-center mb-8 lg:mb-0">
              <img
                src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Orange tabby cat looking up"
                className="w-full max-w-sm mx-auto"
              />
            </div>
            
            {/* Nutrition Icons */}
            <div className="flex flex-col space-y-6 lg:absolute lg:right-0 lg:top-0 lg:space-y-8">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-blue-200 hover:border-blue-400 transition-colors duration-200">
                <Fish className="w-8 h-8 text-blue-600" />
              </div>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-blue-200 hover:border-blue-400 transition-colors duration-200">
                <Drumstick className="w-8 h-8 text-blue-600" />
              </div>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-blue-200 hover:border-blue-400 transition-colors duration-200">
                <Apple className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Muscles;
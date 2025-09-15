import React from 'react';
import { Microscope, Award, Users, BookOpen } from 'lucide-react';

const NutritionScience: React.FC = () => {
  return (
    <section id="science" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-blue-600 mb-6">
            Science-Backed
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-8">
            Nutrition Research
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Over 50 years of research and development in pet nutrition, working with veterinarians 
            and nutritionists to create the perfect formulas for your pets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Microscope className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-blue-600 mb-2">50+</h4>
            <p className="text-gray-700">Years of Research</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-blue-600 mb-2">200+</h4>
            <p className="text-gray-700">Scientific Studies</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-blue-600 mb-2">100+</h4>
            <p className="text-gray-700">Veterinarians</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-blue-600 mb-2">500+</h4>
            <p className="text-gray-700">Published Papers</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-3xl font-bold text-blue-600 mb-6">Our Research Process</h4>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Ingredient Analysis</h5>
                    <p className="text-gray-600">We analyze every ingredient for nutritional value, digestibility, and safety.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Formula Development</h5>
                    <p className="text-gray-600">Our nutritionists create balanced formulas based on life stage and health needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Clinical Testing</h5>
                    <p className="text-gray-600">Extensive testing with real pets to ensure optimal health outcomes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Continuous Monitoring</h5>
                    <p className="text-gray-600">Ongoing research to improve and refine our formulations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Veterinarian examining a dog"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionScience;
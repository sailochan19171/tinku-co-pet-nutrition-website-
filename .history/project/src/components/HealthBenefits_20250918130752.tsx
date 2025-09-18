import React from 'react';
import { Heart, Shield, Zap, Brain, Bone, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HealthBenefits: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="health" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Section Header - Similar to reference site's new arrivals */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Why Pet Owners Love Our Cleaner</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every bottle is thoughtfully formulated with attention to detail, quality ingredients, and the modern pet owner in mind.
          </p>
        </div>

        {/* Featured Product Showcase - Similar to reference site's product grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img
              src="/pro-results-dog.png"
              alt="Happy healthy dog"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Pro Results for Pet Homes</h3>
              <p className="text-gray-600 text-lg">
                Our commitment extends beyond cleaning – we prioritize pet safety and responsible formulations,
                ensuring that quality and care go hand in hand.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Removes paw prints, mud, and everyday grime</span>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Neutralizes urine and lingering odors</span>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Quick-dry, streak-free finish</span>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Safe once dry—no harsh residue</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#how-it-works" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                See How It Works
              </a>
              <a href="#product" className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthBenefits;
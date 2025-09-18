import React from 'react';
import { AlertTriangle, ShieldCheck, Thermometer, Baby } from 'lucide-react';

const Precautions: React.FC = () => {
  return (
    <section id="precautions" className="relative overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold text-blue-700">Precautions</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Follow these simple steps to keep pets and family safe while cleaning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="text-orange-600" />
              <h3 className="text-xl font-semibold text-blue-800">Keep Off Until Dry</h3>
            </div>
            <p className="text-gray-700">Allow floors to fully dry before letting pets or children walk on the area.</p>
          </div>

          <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="text-green-600" />
              <h3 className="text-xl font-semibold text-blue-800">Use as Directed</h3>
            </div>
            <p className="text-gray-700">Follow dilution instructions. Avoid mixing with bleach or other chemicals.</p>
          </div>

          <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50">
            <div className="flex items-center gap-3 mb-3">
              <Thermometer className="text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-800">Store Safely</h3>
            </div>
            <p className="text-gray-700">Keep in a cool, dry place away from direct sunlight and out of reach of pets.</p>
          </div>

          <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50">
            <div className="flex items-center gap-3 mb-3">
              <Baby className="text-pink-600" />
              <h3 className="text-xl font-semibold text-blue-800">Avoid Contact</h3>
            </div>
            <p className="text-gray-700">Avoid direct contact with eyes or mouth. Rinse with water if contact occurs.</p>
          </div>

          <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="text-orange-600" />
              <h3 className="text-xl font-semibold text-blue-800">Spot Test First</h3>
            </div>
            <p className="text-gray-700">Test on a small, hidden area of the floor to ensure compatibility.</p>
          </div>

          <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="text-green-600" />
              <h3 className="text-xl font-semibold text-blue-800">Ventilation</h3>
            </div>
            <p className="text-gray-700">Use in a well-ventilated area. Low odor, but fresh airflow is always best.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Precautions;
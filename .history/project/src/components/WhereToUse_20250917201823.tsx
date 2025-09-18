import React from 'react';
import { Floor, ShowerHead, ShieldAlert } from 'lucide-react';

const WhereToUse: React.FC = () => {
  return (
    <section id="where-to-use" className="relative overflow-hidden py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold text-blue-700">Where to Use</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Works across common sealed floor types. Always spot‑test first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50">
            <div className="flex items-center gap-3 mb-2">
              <Floor className="text-blue-700" />
              <h3 className="text-xl font-semibold text-blue-800">Yes—Great Fit</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>Sealed hardwood, engineered wood</li>
              <li>Laminate, vinyl (LVT/LVP)</li>
              <li>Tile and sealed stone</li>
              <li>Finished concrete (indoor)</li>
            </ul>
          </div>

          <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 ring-1 ring-blue-200/50">
            <div className="flex items-center gap-3 mb-2">
              <ShieldAlert className="text-orange-600" />
              <h3 className="text-xl font-semibold text-blue-800">Avoid</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>Unsealed wood or stone</li>
              <li>Waxed floors (may dull wax)</li>
              <li>Natural carpets/rugs (not a textile cleaner)</li>
              <li>Outdoor porous surfaces</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-white/80 ring-1 ring-blue-100 rounded-xl p-5 text-sm text-gray-700 flex items-start gap-3">
          <ShowerHead className="text-blue-700 shrink-0" />
          <p>
            For sticky spots, apply a small amount of cleaner undiluted to a cloth, wipe, then lightly rinse and dry. Keep pets off the area until fully dry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhereToUse;
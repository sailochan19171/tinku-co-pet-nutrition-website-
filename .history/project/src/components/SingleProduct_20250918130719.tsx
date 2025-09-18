import React from 'react';
import { Droplets, SprayCan, Sparkles, FlaskConical } from 'lucide-react';

const SingleProduct: React.FC = () => {
  return (
    <section id="product" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Collection Header - Similar to reference site */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Pet-Safe Floor Cleaner</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Premium materials and meticulous craftsmanship in every bottle we create.
          </p>
        </div>

        {/* Product Showcase - Clean grid layout like reference site */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative">
            <img
              src="/tinku-logo.png"
              alt="Pet-Safe Floor Cleaner"
              className="w-full max-w-md mx-auto"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Simple, Single Product</h3>
              <p className="text-gray-600">
                One bottle for everyday cleaning. No machines required—just dilute and mop.
                Designed for the modern pet owner who values quality and simplicity.
              </p>
            </div>

            {/* Product Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Droplets className="text-blue-600" />
                  <h4 className="font-semibold text-gray-900">Easy Dilution</h4>
                </div>
                <p className="text-sm text-gray-600">1 cap per liter of water</p>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="text-blue-600" />
                  <h4 className="font-semibold text-gray-900">Pet Safe</h4>
                </div>
                <p className="text-sm text-gray-600">Gentle on paws, tough on messes</p>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <FlaskConical className="text-blue-600" />
                  <h4 className="font-semibold text-gray-900">Multi-Surface</h4>
                </div>
                <p className="text-sm text-gray-600">Works on hardwood, tile, vinyl</p>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <SprayCan className="text-blue-600" />
                  <h4 className="font-semibold text-gray-900">Fresh Scent</h4>
                </div>
                <p className="text-sm text-gray-600">Light, clean fragrance</p>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#how-it-works" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                How to Use
              </a>
              <a href="#precautions" className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
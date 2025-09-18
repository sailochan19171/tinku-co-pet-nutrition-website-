import React from 'react';
import { Mail, Gift, BookOpen, Heart } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get expert pet-safe cleaning tips, exclusive offers, and practical guides
            delivered straight to your inbox.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-6">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-800">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600 mt-2">Join our community of pet lovers</p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-3" />
                <p className="text-sm text-gray-600">
                  I agree to receive marketing communications and understand I can unsubscribe at any time.
                </p>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200">
                Subscribe & Get Updates
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
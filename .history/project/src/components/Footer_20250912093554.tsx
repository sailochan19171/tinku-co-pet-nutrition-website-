import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 sm:px-8 lg:px-12 border-t border-gray-700 rounded-none">
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="/tinku-logo.png"
                alt="Tinku & Co. logo"
                className="h-12 w-auto"
                loading="lazy"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Science-backed nutrition for your beloved pets. Quality ingredients, proven results.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer border border-gray-600 rounded-none p-1" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer border border-gray-600 rounded-none p-1" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer border border-gray-600 rounded-none p-1" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer border border-gray-600 rounded-none p-1" />
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white border-b border-transparent hover:border-gray-400 pb-1 transition-colors duration-200">Dog Food</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white border-b border-transparent hover:border-gray-400 pb-1 transition-colors duration-200">Cat Food</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white border-b border-transparent hover:border-gray-400 pb-1 transition-colors duration-200">Treats</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white border-b border-transparent hover:border-gray-400 pb-1 transition-colors duration-200">Supplements</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white border-b border-transparent hover:border-gray-400 pb-1 transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white border-b border-transparent hover:border-gray-400 pb-1 transition-colors duration-200">Pet Care Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white border-b border-transparent hover:border-gray-400 pb-1 transition-colors duration-200">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white border-b border-transparent hover:border-gray-400 pb-1 transition-colors duration-200">Store Locator</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white border-b border-transparent hover:border-gray-400 pb-1 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white border-b border-transparent hover:border-gray-400 pb-1 transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white border-b border-transparent hover:border-gray-400 pb-1 transition-colors duration-200">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white border-b border-transparent hover:border-gray-400 pb-1 transition-colors duration-200">Sustainability</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Tinku & Co. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm border-b border-transparent hover:border-gray-400 pb-1 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm border-b border-transparent hover:border-gray-400 pb-1 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm border-b border-transparent hover:border-gray-400 pb-1 transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
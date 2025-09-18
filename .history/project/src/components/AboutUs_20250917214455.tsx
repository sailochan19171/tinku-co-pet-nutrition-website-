import React from 'react';
import { Award, Globe, Users, Heart } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50 px-4 sm:px-6 lg:px-8 border border-gray-300 rounded-none">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-blue-600 mb-6">
            About
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-8">
            Tinku & Co.
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We create pet-safe floor care that’s powerful on stains and odors, yet gentle on paws and homes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h4 className="text-3xl font-bold text-blue-600 mb-6">Our Story</h4>
            <div className="space-y-4 text-gray-700">
              <p>
                Founded to solve real-life pet messes, Tinku & Co. builds cleaning products that keep floors fresh, safe, and sparkling—without harsh fumes or residue.
              </p>
              <p>
                From everyday paw prints to accident cleanups, our formulas combine modern cleaning science with pet-first safety standards so you never have to choose between a clean home and a happy pet.
              </p>
              <p>
                Because for us, pets aren’t just animals—they’re family, and your floors should be family-safe.
              </p>
            </div>
          </div>
          <div>
            <div className="relative border border-gray-200 rounded-none p-4">
              <img
                src="/pet-floor-cleaner.jpg"
                alt="Tinku & Co. Pet Floor Cleaner"
                className="w-full rounded-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center border border-gray-200 rounded-none p-6 hover:border-blue-300 transition-colors duration-300">
            <div className="w-16 h-16 bg-blue-600 rounded-none flex items-center justify-center mx-auto mb-4 border border-gray-300">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h5 className="text-xl font-bold text-blue-600 mb-2">Excellence</h5>
            <p className="text-gray-700">Rigorous quality and safety testing for pet-friendly cleaning performance.</p>
          </div>
          <div className="text-center border border-gray-200 rounded-none p-6 hover:border-blue-300 transition-colors duration-300">
            <div className="w-16 h-16 bg-blue-600 rounded-none flex items-center justify-center mx-auto mb-4 border border-gray-300">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h5 className="text-xl font-bold text-blue-600 mb-2">Global Reach</h5>
            <p className="text-gray-700">Trusted by pet families worldwide for safe, effective floor care.</p>
          </div>
          <div className="text-center border border-gray-200 rounded-none p-6 hover:border-blue-300 transition-colors duration-300">
            <div className="w-16 h-16 bg-blue-600 rounded-none flex items-center justify-center mx-auto mb-4 border border-gray-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h5 className="text-xl font-bold text-blue-600 mb-2">Expert Team</h5>
            <p className="text-gray-700">Chemists and product specialists focused on pet-safe, residue-free formulas.</p>
          </div>
          <div className="text-center border border-gray-200 rounded-none p-6 hover:border-blue-300 transition-colors duration-300">
            <div className="w-16 h-16 bg-blue-600 rounded-none flex items-center justify-center mx-auto mb-4 border border-gray-300">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h5 className="text-xl font-bold text-blue-600 mb-2">Pet Love</h5>
            <p className="text-gray-700">Every decision we make is guided by pet comfort, safety, and wellbeing.</p>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-none p-8 lg:p-12">
          <h4 className="text-3xl font-bold text-blue-600 mb-8 text-center">Our Mission</h4>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center border border-gray-200 rounded-none p-6 hover:border-blue-300 transition-colors duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-none flex items-center justify-center mx-auto mb-4 border-2 border-blue-200">
                <span className="text-3xl font-bold text-blue-600">1</span>
              </div>
              <h5 className="text-xl font-semibold text-gray-800 mb-3">Advance Cleaning Science</h5>
              <p className="text-gray-600">Innovate pet-safe formulas that remove stains and odors without harsh residues.</p>
            </div>
            <div className="text-center border border-gray-200 rounded-none p-6 hover:border-blue-300 transition-colors duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-none flex items-center justify-center mx-auto mb-4 border-2 border-blue-200">
                <span className="text-3xl font-bold text-blue-600">2</span>
              </div>
              <h5 className="text-xl font-semibold text-gray-800 mb-3">Educate Households</h5>
              <p className="text-gray-600">Share simple, effective cleaning routines for healthy pet-friendly homes.</p>
            </div>
            <div className="text-center border border-gray-200 rounded-none p-6 hover:border-blue-300 transition-colors duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-none flex items-center justify-center mx-auto mb-4 border-2 border-blue-200">
                <span className="text-3xl font-bold text-blue-600">3</span>
              </div>
              <h5 className="text-xl font-semibold text-gray-800 mb-3">Protect Pets & Homes</h5>
              <p className="text-gray-600">Help families maintain clean, fresh floors that are safe once dry.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
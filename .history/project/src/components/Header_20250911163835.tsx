import React from 'react';
import { Heart, Search, ShoppingCart, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container-premium">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-blue-600">TINKU</span>
                <span className="text-2xl font-bold text-orange-500 mx-1">&</span>
                <span className="text-2xl font-bold text-blue-600">CO.</span>
                <div className="ml-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-8">
            <a href="#dogs" className="text-gray-700 hover:text-blue-600 font-medium">Dogs</a>
            <a href="#cats" className="text-gray-700 hover:text-blue-600 font-medium">Cats</a>
            <a href="#nutrition" className="text-gray-700 hover:text-blue-600 font-medium">Nutrition</a>
            <a href="#health" className="text-gray-700 hover:text-blue-600 font-medium">Health</a>
            <a href="#science" className="text-gray-700 hover:text-blue-600 font-medium">Science</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
          </nav>

          <div className="flex items-center gap-4">
            <Search className="h-5 w-5 text-gray-400 cursor-pointer hover:text-blue-600" />
            <Heart className="h-5 w-5 text-gray-400 cursor-pointer hover:text-blue-600" />
            <ShoppingCart className="h-5 w-5 text-gray-400 cursor-pointer hover:text-blue-600" />
            <Menu className="h-6 w-6 text-gray-400 cursor-pointer md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
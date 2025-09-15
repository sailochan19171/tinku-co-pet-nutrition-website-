import React, { useEffect, useState } from 'react';
import { Heart, Search, ShoppingCart, Menu, User } from 'lucide-react';
import AuthModal, { AuthUser } from './AuthModal';

const Header: React.FC = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('tinku_auth');
      if (raw) setUser(JSON.parse(raw));
    } catch {}
  }, []);

  const handleAuthSuccess = (u: AuthUser) => {
    setUser(u);
  };

  const handleLogout = () => {
    localStorage.removeItem('tinku_auth');
    setUser(null);
    setMenuOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b-2 border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-blue-600">TINKU</span>
                <span className="text-2xl font-bold text-orange-500 mx-1">&</span>
                <span className="text-2xl font-bold text-blue-600">CO.</span>
                <div className="ml-2 w-6 h-6 bg-blue-600 rounded-none flex items-center justify-center border border-gray-300">
                  <div className="w-4 h-4 bg-white rounded-none opacity-80"></div>
                </div>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex gap-8">
            <a href="#dogs" className="text-gray-700 hover:text-blue-600 font-medium border-b-2 border-transparent hover:border-blue-600 pb-1 transition-colors duration-200">Dogs</a>
            <a href="#cats" className="text-gray-700 hover:text-blue-600 font-medium border-b-2 border-transparent hover:border-blue-600 pb-1 transition-colors duration-200">Cats</a>
            <a href="#nutrition" className="text-gray-700 hover:text-blue-600 font-medium border-b-2 border-transparent hover:border-blue-600 pb-1 transition-colors duration-200">Nutrition</a>
            <a href="#health" className="text-gray-700 hover:text-blue-600 font-medium border-b-2 border-transparent hover:border-blue-600 pb-1 transition-colors duration-200">Health</a>
            <a href="#solutions" className="text-gray-700 hover:text-blue-600 font-medium border-b-2 border-transparent hover:border-blue-600 pb-1 transition-colors duration-200">Science</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium border-b-2 border-transparent hover:border-blue-600 pb-1 transition-colors duration-200">About</a>
          </nav>

          <div className="flex items-center gap-4">
            <Search className="h-5 w-5 text-gray-400 cursor-pointer hover:text-blue-600 border border-gray-300 rounded-none p-1 transition-colors duration-200" />
            <Heart className="h-5 w-5 text-gray-400 cursor-pointer hover:text-blue-600 border border-gray-300 rounded-none p-1 transition-colors duration-200" />
            <ShoppingCart className="h-5 w-5 text-gray-400 cursor-pointer hover:text-blue-600 border border-gray-300 rounded-none p-1 transition-colors duration-200" />
            <Menu className="h-6 w-6 text-gray-400 cursor-pointer md:hidden border border-gray-300 rounded-none p-1 transition-colors duration-200" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
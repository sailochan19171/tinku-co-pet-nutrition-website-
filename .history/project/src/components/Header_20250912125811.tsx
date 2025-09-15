import React, { useEffect, useState } from 'react';
import { ShoppingCart, Menu, User } from 'lucide-react';
import AuthModal, { AuthUser } from './AuthModal';

const Header: React.FC = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = React.useRef(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('tinku_auth');
      if (raw) setUser(JSON.parse(raw));
    } catch {}
  }, []);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      if (y > lastY.current && y > 80) {
        setHidden(true);
      } else if (y < lastY.current) {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true } as any);
    return () => window.removeEventListener('scroll', onScroll);
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
    <header className={`bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b-2 border-gray-300 transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-blue-600">TINKU</span>
                <span className="text-2xl font-bold text-orange-500 mx-1">&</span>
                <span className="text-2xl font-bold text-blue-600">CO.</span>

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

          <div className="relative flex items-center gap-2">
            {/* Simplified: keep only cart, remove heavy borders and extras for cleaner look */}
            <button aria-label="Cart" className="p-1 text-gray-500 hover:text-blue-600 transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </button>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setMenuOpen((v) => !v)}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white hover:bg-blue-700"
                  aria-label="Account menu"
                >
                  {(user.name?.[0] || (user.email?.[0] ?? 'U')).toUpperCase()}
                </button>
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border border-gray-200 py-2 z-50">
                    <div className="px-3 py-2 text-sm text-gray-700 border-b">{user.name || user.email}</div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setAuthOpen(true)}
                className="p-1 text-gray-500 hover:text-blue-600"
                aria-label="Login or Sign up"
              >
                <User className="h-5 w-5" />
              </button>
            )}

            <Menu className="h-6 w-6 text-gray-500 cursor-pointer md:hidden p-1 transition-colors duration-200" />
          </div>
        </div>
      </div>
        <AuthModal
          open={authOpen}
          onClose={() => setAuthOpen(false)}
          onAuthSuccess={handleAuthSuccess}
        />
      </header>
  );
};

export default Header;
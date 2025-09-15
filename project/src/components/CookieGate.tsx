import React, { useEffect, useState } from 'react';

// Cookie gate overlays the main screen: shows blurred app behind a centered cookie card
// and a big animated logo until user accepts.

const STORAGE_KEY = 'tinku.cookie.consent.v1';

function generateToken() {
  return 'consented.' + Math.random().toString(36).slice(2) + '.' + Date.now();
}

const CookieGate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consented, setConsented] = useState<boolean | null>(null);

  useEffect(() => {
    const existing = localStorage.getItem(STORAGE_KEY);
    setConsented(Boolean(existing));
  }, []);

  // Avoid initial flash before we check storage
  if (consented === null) return null;

  return (
    <div className="relative">
      {/* Main app content - blurred and non-interactive until consent */}
      <div className={!consented ? 'pointer-events-none select-none filter blur-sm md:blur-md' : ''}>
        {children}
      </div>

      {/* Overlay only when not consented */}
      {!consented && (
        <div className="fixed inset-0 z-[1100] flex items-center justify-center bg-white/50 backdrop-blur-sm">
          {/* Big animated logo behind the consent card */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/tinku-logo.png"
              alt="Loading"
              className="w-44 h-44 md:w-56 md:h-56 opacity-90 animate-[splash-bounce_1.2s_ease-in-out_infinite]"
            />
          </div>

          {/* Consent card */}
          <div className="relative z-[1110] max-w-md mx-auto p-6 rounded-2xl shadow-xl ring-1 ring-brand-tint2 bg-white">
            <h2 className="text-xl font-semibold text-gray-900">We value your privacy</h2>
            <p className="mt-2 text-sm text-gray-600">
              We use cookies to enhance your experience and analyze traffic. Please accept cookies to continue using the site.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <button
                className="btn-primary px-5 py-2 rounded-lg"
                onClick={() => {
                  const token = generateToken();
                  localStorage.setItem(STORAGE_KEY, token);
                  setConsented(true);
                }}
              >
                Accept Cookies
              </button>
              <button
                className="inline-flex items-center justify-center px-5 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
                onClick={() => {
                  // Keep blurred/overlay if denied
                  // Optionally redirect or show more info
                }}
              >
                Deny
              </button>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Change your choice anytime by clearing site data in your browser.
            </p>
          </div>

          {/* Custom keyframes for the logo pulse */}
          <style>
            {`
            @keyframes splash-bounce {
              0% { transform: scale(0.9); opacity: 0.85; }
              50% { transform: scale(1.06); opacity: 1; }
              100% { transform: scale(0.9); opacity: 0.85; }
            }
            `}
          </style>
        </div>
      )}
    </div>
  );
};

export default CookieGate;
import React, { useEffect, useState } from 'react';

// A hard gate that prevents app rendering until cookies are accepted.
// Stores a signed-style marker in localStorage (no real crypto, just a simple token).

const STORAGE_KEY = 'tinku.cookie.consent.v1';

function generateToken() {
  // Simple pseudo-token; for real signing, use server.
  return 'consented.' + Math.random().toString(36).slice(2) + '.' + Date.now();
}

const CookieGate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consented, setConsented] = useState<boolean | null>(null);

  useEffect(() => {
    const existing = localStorage.getItem(STORAGE_KEY);
    setConsented(Boolean(existing));
  }, []);

  if (consented) {
    return <>{children}</>;
  }

  if (consented === null) {
    // first render before we check storage
    return null;
  }

  return (
    <div className="fixed inset-0 z-[1100] flex items-center justify-center bg-white">
      <div className="max-w-md mx-auto p-6 rounded-2xl shadow-xl ring-1 ring-gray-100 bg-white">
        <h2 className="text-xl font-semibold text-gray-900">We value your privacy</h2>
        <p className="mt-2 text-sm text-gray-600">
          We use cookies to enhance your browsing experience and analyze our traffic. Please accept cookies to continue using the site.
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
            className="inline-flex items-center justify-center px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
            onClick={() => {
              // Deny keeps the gate; user cannot access the site.
              // Optionally, you could redirect to an info page.
              alert('You must accept cookies to use this website.');
            }}
          >
            Deny
          </button>
        </div>
        <p className="mt-3 text-xs text-gray-500">
          You can change your choice anytime by clearing site data in your browser.
        </p>
      </div>
    </div>
  );
};

export default CookieGate;
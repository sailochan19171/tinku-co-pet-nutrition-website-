import React, { useEffect } from 'react';

interface SplashScreenProps {
  logoSrc?: string;
  onFinish?: () => void; // optional callback after animation completes
  minDurationMs?: number; // ensure splash shows at least this long
}

// Animated splash with a bigger, more prominent logo
const SplashScreen: React.FC<SplashScreenProps> = ({
  logoSrc = '/tinku-logo.png',
  onFinish,
  minDurationMs = 1200,
}) => {
  useEffect(() => {
    const t = setTimeout(() => onFinish?.(), minDurationMs);
    return () => clearTimeout(t);
  }, [onFinish, minDurationMs]);

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-white">
      <div className="relative flex flex-col items-center">
        {/* Soft glowing halo */}
        <div className="absolute -inset-8 rounded-full bg-blue-200/50 blur-2xl animate-[pulse-glow_2s_ease-in-out_infinite]" />

        {/* Logo with animated ring */}
        <div className="relative">
          {/* Spinning gradient ring */}
          <svg
            className="absolute inset-0 -m-6 w-[15rem] h-[15rem] md:w-[18rem] md:h-[18rem] animate-[spin-slow_2.4s_linear_infinite]"
            viewBox="0 0 100 100"
          >
            <defs>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="50%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="url(#ringGrad)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="60 28 10 26"
            />
          </svg>

          {/* Bigger logo */}
          <img
            src={logoSrc}
            alt="Loading"
            className="relative w-56 h-56 md:w-72 md:h-72 select-none pointer-events-none animate-[splash-bounce_1.2s_ease-in-out_infinite]"
          />
        </div>

        <div className="mt-4 text-sm text-gray-500">Loading...</div>
      </div>

      <style>
        {`
        @keyframes splash-bounce {
          0% { transform: scale(0.9); opacity: 0.8555; }
          50% { transform: scale(1.06); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0.85; }
        }
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        @keyframes pulse-glow {
          0%, 100% { opacity: .6; transform: scale(1); }
          50% { opacity: .35; transform: scale(1.05); }
        }
        `}
      </style>
    </div>
  );
};

export default SplashScreen;
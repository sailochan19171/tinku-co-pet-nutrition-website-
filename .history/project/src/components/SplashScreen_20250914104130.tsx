import React, { useEffect } from 'react';

interface SplashScreenProps {
  logoSrc?: string;
  onFinish?: () => void; // optional callback after animation completes
  minDurationMs?: number; // ensure splash shows at least this long
}

// Simple animated splash with logo fade/scale
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
      <div className="flex flex-col items-center">
        <img
          src={logoSrc}
          alt="Loading"
          className="w-28 h-28 animate-[splash-bounce_1.2s_ease-in-out_infinite]"
        />
        <div className="mt-4 text-sm text-gray-500">Loading...</div>
      </div>
      {/* Keyframes via Tailwind's arbitrary values are limited; include inline style tag for custom animation */}
      <style>
        {`
        @keyframes splash-bounce {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.8; }
        }
        `}
      </style>
    </div>
  );
};

export default SplashScreen;
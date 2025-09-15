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
      <div className="flex flex-col items-center">
        <img
          src={logoSrc}
          alt="Loading"
          className="w-40 h-40 md:w-52 md:h-52 animate-[splash-bounce_1.2s_ease-in-out_infinite]"
        />
        <div className="mt-4 text-sm text-gray-500">Loading...</div>
      </div>
      {/* Custom keyframes for a subtle pulse */}
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
  );
};

export default SplashScreen;
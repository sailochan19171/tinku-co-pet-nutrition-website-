import React from 'react';

// Hero layout inspired by screenshot: oversized headline on the left,
// dog image on the right, centered CTA, light blue gradient background.
// Button still triggers onStartQuiz passed from parent.

type HeroProps = {
  onStartQuiz?: () => void;
};

const Hero: React.FC<HeroProps> = ({ onStartQuiz }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#dff0fb] to-[#c8e3f6] px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-16 sm:pb-24">
      {/* Right dog image */}
      <div className="pointer-events-none select-none lg:absolute lg:inset-y-0 lg:right-0 lg:w-[42%] flex items-end justify-end pr-0">
        <img
          className="hidden lg:block h-full w-auto object-contain translate-y-8"
          src="https://images.pexels.com/photos/3342691/pexels-photo-3342691.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Happy white dog"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="lg:max-w-3xl">
          <h1 className="font-extrabold leading-[0.9] text-blue-700 tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-[9rem]">
            <span className="block">Advanced</span>
            <span className="block">Nutrition</span>
          </h1>
          <p className="mt-6 text-blue-700/90 text-xl sm:text-2xl md:text-3xl font-semibold">
            backed by science
          </p>

          <div className="mt-10 flex sm:justify-start justify-center">
            <button
              onClick={onStartQuiz}
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-md transition-colors duration-200"
            >
              Find Your Formula
            </button>
          </div>
        </div>

        {/* Product strip approximation */}
        <div className="mt-12 hidden md:block">
          <img
            className="w-full max-w-2xl rounded-md border border-blue-100 shadow-sm"
            src="https://images.pexels.com/photos/3908821/pexels-photo-3908821.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Product assortment"
          />
        </div>
      </div>

      {/* Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button className="bg-blue-600 text-white px-2 py-8 text-sm font-medium rotate-90 origin-center hover:bg-blue-700 transition-colors duration-200">
          Feedback
        </button>
      </div>

      {/* Decorative paw prints (subtle) */}
      <div className="pointer-events-none absolute -bottom-6 right-10 opacity-20 text-6xl select-none">🐾</div>
      <div className="pointer-events-none absolute bottom-4 right-24 opacity-20 text-5xl select-none">🐾</div>
    </section>
  );
};

export default Hero;

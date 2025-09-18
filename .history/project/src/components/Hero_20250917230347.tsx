import React from 'react';

// Hero layout: oversized headline on the left with 3D-styled image beside text,
// centered CTA, light blue gradient background. Button triggers onStartQuiz.



type HeroProps = {
  onStartQuiz?: () => void;
};

const Hero: React.FC<HeroProps> = ({ onStartQuiz }) => {
  const [offsetY, setOffsetY] = React.useState(0);

  React.useEffect(() => {
    let rAF = 0;
    const onScroll = () => {
      rAF = requestAnimationFrame(() => setOffsetY(window.scrollY || 0));
    };
    window.addEventListener('scroll', onScroll, { passive: true } as any);
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rAF);
    };
  }, []);

  const parallaxStyle: React.CSSProperties = {
    transform: `translateY(${offsetY * 0.15}px)`,
    willChange: 'transform',
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#dff0fb] via-[#eaf6ff] to-[#c8e3f6] px-6 sm:px-8 lg:px-12 pt-20 sm:pt-24 pb-20 sm:pb-28">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Text + Image side-by-side */}
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Image on the text side with subtle 3D effect */}
          <div className="order-2 lg:order-1 w-full lg:w-auto flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src="/hero-dog.png"
                alt="Happy dog"
                style={parallaxStyle}
                className="w-[260px] sm:w-[320px] lg:w-[420px] h-auto select-none pointer-events-none transform-gpu"
                loading="eager"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="order-1 lg:order-2 lg:max-w-3xl">
            <h1 className="font-extrabold leading-[0.85] text-blue-800 tracking-tight text-6xl sm:text-8xl md:text-9xl lg:text-[10rem]">
              <span className="block">Pet-Safe</span>
              <span className="block">Floor Cleaner</span>
            </h1>
            <p className="mt-6 text-blue-700/90 text-2xl sm:text-3xl md:text-4xl font-semibold">
              Powerful on messes, gentle on paws
            </p>

            <div className="mt-10 flex sm:justify-start justify-center">
              <a
                href="#product"
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg text-xl sm:text-2xl shadow-md transition-colors duration-200"
              >
                View Product
              </a>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;

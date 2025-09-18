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
    <section className="relative h-screen overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800" data-aos="fade-up">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-800/80"></div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-dog.png"
          alt="Happy dog"
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Centered text content like reference site */}
          <div className="text-center text-white" data-aos="fade-up" data-aos-delay="200">
            <h1 className="font-extrabold leading-[0.9] tracking-tight text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] mb-6">
              <span className="block">Pet-Safe</span>
              <span className="block">Floor Cleaner</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-light mb-10 max-w-3xl mx-auto">
              Powerful on messes, gentle on paws
            </p>

            <div className="flex justify-center" data-aos="fade-up" data-aos-delay="400">
              <a
                href="#product"
                className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-4 px-8 rounded-lg text-xl sm:text-2xl transition-colors duration-200 shadow-lg"
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

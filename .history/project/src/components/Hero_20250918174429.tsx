import React from 'react';

// Hero layout: oversized headline on the left with 3D-styled image beside text,
// centered CTA, light blue gradient background. Button triggers onStartQuiz.



type HeroProps = {
  onStartQuiz?: () => void;
};

const Hero: React.FC<HeroProps> = ({ onStartQuiz }) => {
  const [offsetY, setOffsetY] = React.useState(0);
  const videoRef = React.useRef<HTMLVideoElement>(null);

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

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay failed, user can interact later
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  const parallaxStyle: React.CSSProperties = {
    transform: `translateY(${offsetY * 0.15}px)`,
    willChange: 'transform',
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-tint2 via-white to-brand-tint2 px-6 sm:px-8 lg:px-12 pt-20 sm:pt-24 pb-20 sm:pb-28" data-aos="fade-up">
      <div className="relative z-10 max-w-7xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        {/* Text + Image side-by-side */}
        <div className="flex flex-col lg:flex-row items-start gap-8" data-aos="fade-up" data-aos-delay="200">
          {/* Image on the text side with subtle 3D effect */}
          <div className="order-2 lg:order-2 w-full lg:w-auto flex justify-center lg:justify-start" data-aos="zoom-in" data-aos-delay="250">
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
          <div className="order-1 lg:order-1 lg:max-w-3xl" data-aos="fade-left" data-aos-delay="300">
            <h1 className="font-extrabold leading-[0.85] tracking-tight text-brand-primary text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-heading">
              <span className="block">Pet-Safe</span>
              <span className="block">Floor Cleaner</span>
            </h1>
            <p className="mt-6 text-brand-primaryDark/90 text-2xl sm:text-3xl md:text-4xl font-semibold">
              Powerful on messes, gentle on paws
            </p>

            <div className="mt-10 flex sm:justify-start justify-center" data-aos="fade-up" data-aos-delay="400">
              <a
                href="#product"
                className="btn-primary text-xl sm:text-2xl"
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

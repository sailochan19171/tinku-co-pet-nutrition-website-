import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// GSAP imports
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Initialize AOS after the script is loaded
function AOSInitializer() {
  useEffect(() => {
    // @ts-ignore - AOS is loaded via CDN and available on window
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init({
        duration: 700,
        easing: 'ease-out-cubic',
        once: true,
        offset: 40,
      });
    }
  }, []);
  return null;
}

// Initialize GSAP scroll-triggered reveals
function GSAPInitializer() {
  useEffect(() => {
    // Generic reveal for sections
    const sections = gsap.utils.toArray<HTMLElement>('section');

    sections.forEach((sec, i) => {
      gsap.fromTo(
        sec,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: i === 0 ? 0 : 0.05,
          scrollTrigger: {
            trigger: sec,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // subtle image zoom
      const images = sec.querySelectorAll('img');
      images.forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 0.98, autoAlpha: 0 },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: img,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    });

    // Refresh when AOS runs or on resize
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('resize', refresh);
    setTimeout(refresh, 100); // after first paint

    return () => {
      window.removeEventListener('resize', refresh);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
  return null;
}

// Toggle to enable/disable scroll animations site-wide
const ENABLE_ANIMATIONS = false;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {ENABLE_ANIMATIONS && <AOSInitializer />}
    {ENABLE_ANIMATIONS && <GSAPInitializer />}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

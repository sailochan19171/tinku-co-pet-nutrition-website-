import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AOSInitializer />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

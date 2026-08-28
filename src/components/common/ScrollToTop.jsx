import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#FAF7F2] hover:bg-[#EAE3D5] dark:bg-zinc-900 dark:hover:bg-zinc-800 text-[#231D16] dark:text-zinc-100 border border-[#DDD3C1] dark:border-zinc-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex items-center justify-center group"
      title="ขึ้นไปด้านบนสุด (Scroll to Top)"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}

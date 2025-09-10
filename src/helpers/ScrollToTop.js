import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scrollToElement = () => {
      if (hash) {
        // Hash varsa o elemente scroll yap
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            const elementPosition = element.offsetTop;
            const offsetPosition = elementPosition - 85; // 85px üstüne scroll (navbar için)
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          } else {
            // Element bulunamazsa sayfanın başına scroll
            window.scrollTo(0, 0);
          }
        }, 100);
      } else {
        // Hash yoksa sayfanın başına scroll
        window.scrollTo(0, 0);
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 10);
      }
    };

    scrollToElement();
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;

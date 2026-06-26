'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToElement = () => {
      const hash = window.location.hash;

      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            const elementPosition = element.offsetTop;
            const offsetPosition = elementPosition - 85;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          } else {
            window.scrollTo(0, 0);
          }
        }, 100);
      } else {
        window.scrollTo(0, 0);
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 10);
      }
    };

    scrollToElement();
  }, [pathname]);

  return null;
}

export default ScrollToTop;

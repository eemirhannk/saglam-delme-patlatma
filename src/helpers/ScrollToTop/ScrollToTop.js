import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 10);
    };

    scrollToTop();
  }, [pathname]);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 10);
    };

    scrollToTop();
  }, []);

  return null;
}

export default ScrollToTop;

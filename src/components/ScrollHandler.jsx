import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scrollToElement = () => {
      if (hash) {
        // Remove the '#' from the hash
        const id = hash.replace('#', '');
        
        // Try to scroll multiple times to ensure content is loaded
        const attemptScroll = (attemptsLeft = 5) => {
          const element = document.getElementById(id);
          
          if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          } else if (attemptsLeft > 0) {
            // If element not found, try again after a delay
            setTimeout(() => attemptScroll(attemptsLeft - 1), 200);
          }
        };

        // Initial delay before first attempt
        setTimeout(() => attemptScroll(), 500);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    scrollToElement();
  }, [pathname, hash]);

  return null;
};

export default ScrollHandler;
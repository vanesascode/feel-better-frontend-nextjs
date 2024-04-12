import { useEffect, useState } from "react";

export const useShowScrollToTopArrow = () => {
  const [showScrollToTopArrow, setShowScrollToTopArrow] = useState(false);

  useEffect(() => {
    const handleShowScrollToTopArrow = () => {
      const currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition > 900) {
        setShowScrollToTopArrow(true);
      } else {
        setShowScrollToTopArrow(false);
      }
    };
    window.addEventListener("scroll", handleShowScrollToTopArrow);
    return () => {
      window.removeEventListener("scroll", handleShowScrollToTopArrow);
    };
  });

  return { showScrollToTopArrow };
};

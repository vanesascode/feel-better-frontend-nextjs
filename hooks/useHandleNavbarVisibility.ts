import { useEffect, useState } from "react";

export const useHandleNavbarVisibility = () => {
  const [navbarHidden, setNavbarHidden] = useState<boolean>(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleNavbarVisibility = () => {
      const currentScrollPosition = window.pageYOffset;
      if (
        currentScrollPosition > prevScrollPosition &&
        currentScrollPosition > 100
      ) {
        setNavbarHidden(true);
      } else {
        setNavbarHidden(false);
      }
      setPrevScrollPosition(currentScrollPosition);
    };
    window.addEventListener("scroll", handleNavbarVisibility);
    return () => {
      window.removeEventListener("scroll", handleNavbarVisibility);
    };
  }, [prevScrollPosition]);

  return { navbarHidden };
};

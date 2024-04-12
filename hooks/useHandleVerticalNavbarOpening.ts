import { useEffect, useState } from "react";

export const useHandleVerticalNavbarOpening = () => {
  const [darkBackground, setDarkBackground] = useState<boolean>(false);
  const [showOptionsNavbar, setShowOptionsNavbar] = useState<boolean>(false);

  useEffect(() => {
    const handleScrollActivation = () => {
      if (showOptionsNavbar && window.innerWidth < 1024) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };
    handleScrollActivation();
    window.addEventListener("resize", handleScrollActivation);
    return () => {
      window.removeEventListener("resize", handleScrollActivation);
    };
  }, [showOptionsNavbar]);

  useEffect(() => {
    const handleDarkBackgroundVisualization = () => {
      if (showOptionsNavbar && window.innerWidth < 1024) {
        setDarkBackground(true);
      } else {
        setDarkBackground(false);
      }
    };
    handleDarkBackgroundVisualization();
    window.addEventListener("resize", handleDarkBackgroundVisualization);
    return () => {
      window.removeEventListener("resize", handleDarkBackgroundVisualization);
    };
  });

  return {
    darkBackground,
    showOptionsNavbar,
    setShowOptionsNavbar,
  };
};

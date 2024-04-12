import { useEffect, useState } from "react";

export const useToggleBreathingInstructions = () => {
  const [toggleBreathe, setToggleBreathe] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setToggleBreathe((prevState) => !prevState);
    }, 7500);

    return () => clearInterval(interval);
  }, []);

  return { toggleBreathe };
};

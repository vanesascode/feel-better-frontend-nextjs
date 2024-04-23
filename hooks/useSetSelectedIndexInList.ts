import { useState } from "react";

export const useSetSelectedIndexInList = <T>(list: T[]) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % list.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + list.length) % list.length);
  };

  return { currentIndex, handleNext, handlePrevious };
};

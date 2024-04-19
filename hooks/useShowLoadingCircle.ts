import { useEffect, useState } from "react";
import { Thought } from "./useGetThoughtsByUser";

interface useShowLoadingCircleProps {
  thoughts: Thought[];
}

export const useShowLoadingCircle = ({
  thoughts,
}: useShowLoadingCircleProps) => {
  const [showLoadingCircle, setShowLoadingCircle] = useState(true);

  useEffect(() => {
    if (thoughts) {
      setTimeout(() => {
        setShowLoadingCircle(false);
      }, 1000);
    }
  }, [thoughts]);

  return { showLoadingCircle };
};

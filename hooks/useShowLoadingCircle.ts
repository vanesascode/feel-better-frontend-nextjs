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
      setShowLoadingCircle(false);
    }
  }, [thoughts]);

  return { showLoadingCircle };
};

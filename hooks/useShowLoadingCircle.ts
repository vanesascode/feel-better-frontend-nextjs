import { useEffect, useState } from "react";
import { useGetThoughtsByUser } from "./useGetThoughtsByUser";

export const useShowLoadingCircle = () => {
  const [showLoadingCircle, setShowLoadingCircle] = useState(true);
  const { thoughts, isLoading } = useGetThoughtsByUser();
  const [showServerError, setShowServerError] = useState(false);

  useEffect(() => {
    if (thoughts && !isLoading) {
      setTimeout(() => {
        setShowLoadingCircle(false);
      }, 1000);
    }
    setTimeout(() => {
      setShowServerError(true);
    }, 6000);
  }, [thoughts]);

  return { showLoadingCircle, showServerError };
};

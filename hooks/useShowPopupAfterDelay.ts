import { useAppSelector } from "@/redux/hooks";
import { selectAuth } from "@/redux/features/authSlice";
import { useEffect, useState } from "react";

export const useShowPopupAfterDelay = () => {
  const { name } = useAppSelector(selectAuth);
  const [showPopupAfterDelay, setShowPopupAfterDelay] =
    useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (!name) {
        setShowPopupAfterDelay(true);
      }
    }, 2000);
  }, []);

  return { showPopupAfterDelay, setShowPopupAfterDelay };
};

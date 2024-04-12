import { useAppSelector } from "@/redux/hooks";
import { selectAuth } from "@/redux/features/authSlice";
import { useEffect, useState } from "react";

export const useAskToLogin = () => {
  const { name } = useAppSelector(selectAuth);
  const [showPopupAskingToLogin, setShowPopupAskingToLogin] =
    useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (!name) {
        setShowPopupAskingToLogin(true);
      }
    }, 2000);
  }, []);

  return { showPopupAskingToLogin, setShowPopupAskingToLogin };
};

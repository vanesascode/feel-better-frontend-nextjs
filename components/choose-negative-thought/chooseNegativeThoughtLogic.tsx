"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setNegativeThought } from "@/redux/features/thoughtSlice";
import { useAppSelector } from "@/redux/hooks";
import { selectAuth } from "@/redux/features/authSlice";
import ChooseNegativeThoughtForm from "./chooseNegativeThoughtForm";

const ChooseNegativeThoughtLogic = () => {
  const [selectedNegativeThought, setSelectedNegativeThought] =
    useState<string>("");
  const [showPopupAskingToLogin, setShowPopupAskingToLogin] =
    useState<boolean>(false);
  const [
    chooseNegativeThoughtFirstMessage,
    setChooseNegativeThoughtFirstMessage,
  ] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { name } = useAppSelector(selectAuth);

  useEffect(() => {
    setTimeout(() => {
      if (!name) {
        setShowPopupAskingToLogin(true);
      }
    }, 2000);
  }, []);

  useEffect(() => {
    if (selectedNegativeThought) {
      dispatch(setNegativeThought(selectedNegativeThought));
    }
  }, [selectedNegativeThought]);

  const handleGoToNextStep = () => {
    if (!selectedNegativeThought) {
      setChooseNegativeThoughtFirstMessage(true);
      return;
    }
    router.push("/is-negative-thought-true");
  };

  return (
    <ChooseNegativeThoughtForm
      handleGoToNextStep={handleGoToNextStep}
      selectedNegativeThought={selectedNegativeThought}
      setSelectedNegativeThought={setSelectedNegativeThought}
      showPopupAskingToLogin={showPopupAskingToLogin}
      setShowPopupAskingToLogin={setShowPopupAskingToLogin}
      chooseNegativeThoughtFirstMessage={chooseNegativeThoughtFirstMessage}
    />
  );
};

export default ChooseNegativeThoughtLogic;

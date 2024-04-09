"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setNegativeThought } from "@/redux/features/thoughtSlice";
import { useAppSelector } from "@/redux/hooks";
import { selectAuth } from "@/redux/features/authSlice";
import NegativeThoughtSelectorForm from "./negativeThoughtSelectorForm";

const NegativeThoughtSelectorLogic = () => {
  const [selectedNegativeThought, setSelectedNegativeThought] = useState("");
  const [showPopupAskingToLogin, setShowPopupAskingToLogin] = useState(false);
  const [
    chooseNegativeThoughtFirstMessage,
    setChooseNegativeThoughtFirstMessage,
  ] = useState(false);
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
    <NegativeThoughtSelectorForm
      handleGoToNextStep={handleGoToNextStep}
      selectedNegativeThought={selectedNegativeThought}
      setSelectedNegativeThought={setSelectedNegativeThought}
      showPopupAskingToLogin={showPopupAskingToLogin}
      setShowPopupAskingToLogin={setShowPopupAskingToLogin}
      chooseNegativeThoughtFirstMessage={chooseNegativeThoughtFirstMessage}
    />
  );
};

export default NegativeThoughtSelectorLogic;

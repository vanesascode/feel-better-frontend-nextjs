"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setNegativeThought } from "@/redux/features/thoughtSlice";
import ChooseNegativeThoughtForm from "./chooseNegativeThoughtForm";
import { useAskUserToLogin } from "@/hooks/useAskUserToLogin";

const ChooseNegativeThoughtLogic = () => {
  const [selectedNegativeThought, setSelectedNegativeThought] =
    useState<string>("");
  const [
    chooseNegativeThoughtFirstMessage,
    setChooseNegativeThoughtFirstMessage,
  ] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { showPopupAskingToLogin, setShowPopupAskingToLogin } =
    useAskUserToLogin();

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

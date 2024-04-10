"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setPositiveThought } from "@/redux/features/thoughtSlice";
import WriteAlternativeThoughtForm from "./writeAlternativeThoughtForm";

const WriteAlternativeThoughtLogic = () => {
  const [selectedPositiveThought, setSelectedPositiveThought] =
    useState<string>("");
  const [
    writePositiveThoughtFirstMessage,
    setWritePositiveThoughtFirstMessage,
  ] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selectedPositiveThought) {
      dispatch(setPositiveThought(selectedPositiveThought));
    }
  }, [selectedPositiveThought]);

  const handleGoToNextStep = () => {
    if (!selectedPositiveThought) {
      setWritePositiveThoughtFirstMessage(true);
      return;
    }
    router.push("/is-negative-thought-true");
  };
  return (
    <WriteAlternativeThoughtForm
      handleGoToNextStep={handleGoToNextStep}
      writePositiveThoughtFirstMessage={writePositiveThoughtFirstMessage}
      selectedPositiveThought={selectedPositiveThought}
      setSelectedPositiveThought={setSelectedPositiveThought}
    />
  );
};

export default WriteAlternativeThoughtLogic;

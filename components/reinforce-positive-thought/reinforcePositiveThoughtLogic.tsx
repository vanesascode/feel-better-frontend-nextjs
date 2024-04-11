"use client";

import ReinforcePositiveThoughtForm from "./reinforcePositiveThoughForm";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { selectThought } from "@/redux/features/thoughtSlice";
import { selectAuth } from "@/redux/features/authSlice";
import { saveThoughtsForFollowup } from "@/api/thoughts/thoughts";
import { useAppDispatch } from "@/redux/hooks";
import { eliminateThoughtsDataStoredinRedux } from "@/redux/features/thoughtSlice";

const ReinforcePositiveThoughtLogic = () => {
  const router = useRouter();
  const { negativeThought, positiveThought } = useAppSelector(selectThought);
  const { _id, token } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const [feelingSelected, setFeelingSelected] = useState<string>("");
  const [chooseFeelingFirstMessage, setChooseFeelingFirstMessage] =
    useState<boolean>(false);
  const [
    showFeelingBetterPopupExplanation,
    setShowFeelingBetterPopupExplanation,
  ] = useState<boolean>(false);
  const [
    showFeelingTheSamePopupExplanation,
    setShowFeelingTheSamePopupExplanation,
  ] = useState<boolean>(false);
  const [savingThoughtsError, setSavingThoughtsError] =
    useState<boolean>(false);

  const handleGoToNextStep = () => {
    if (!feelingSelected) {
      setChooseFeelingFirstMessage(true);
      return;
    }
    if (feelingSelected === "😃" || feelingSelected === "🙂") {
      setShowFeelingBetterPopupExplanation(true);
      return;
    }
    if (feelingSelected === "😐" || feelingSelected === "🙁") {
      setShowFeelingTheSamePopupExplanation(true);
      return;
    }
  };

  const saveThoughts = async () => {
    if (_id) {
      try {
        await saveThoughtsForFollowup({
          user: _id,
          token,
          positiveThought,
          negativeThought,
          feeling: feelingSelected,
        });
        dispatch(eliminateThoughtsDataStoredinRedux());
        router.push("/follow-up");
      } catch (error) {
        setSavingThoughtsError(true);
      }
    } else {
      dispatch(eliminateThoughtsDataStoredinRedux());
      router.push("/");
    }
  };

  return (
    <ReinforcePositiveThoughtForm
      handleGoToNextStep={handleGoToNextStep}
      chooseFeelingFirstMessage={chooseFeelingFirstMessage}
      setFeelingSelected={setFeelingSelected}
      feelingSelected={feelingSelected}
      showFeelingBetterPopupExplanation={showFeelingBetterPopupExplanation}
      setShowFeelingBetterPopupExplanation={
        setShowFeelingBetterPopupExplanation
      }
      showFeelingTheSamePopupExplanation={showFeelingTheSamePopupExplanation}
      setShowFeelingTheSamePopupExplanation={
        setShowFeelingTheSamePopupExplanation
      }
      saveThoughts={saveThoughts}
      savingThoughtsError={savingThoughtsError}
    />
  );
};

export default ReinforcePositiveThoughtLogic;

"use client";

import QuestionDropdown from "../commons/questionDropdown";
import ChallengeNegativeThoughtContent from "./challengeNegativeThoughtContent";
import { useTranslation } from "react-i18next";
import GuidedMeditationContent from "./guidedMeditationContent";

const PracticeContent = () => {
  const { t } = useTranslation();
  return (
    <>
      <QuestionDropdown
        className="bg-dark-green-1 contentTitleBar"
        copy={t("challenge-negative-thought")}
        image="/home/head-icon.svg"
      >
        <ChallengeNegativeThoughtContent />
      </QuestionDropdown>
      <QuestionDropdown
        className="bg-dark-green-2 contentTitleBar"
        copy={t("guided-meditation")}
        image="/home/loto-icon.svg"
      >
        <GuidedMeditationContent />
      </QuestionDropdown>
    </>
  );
};

export default PracticeContent;

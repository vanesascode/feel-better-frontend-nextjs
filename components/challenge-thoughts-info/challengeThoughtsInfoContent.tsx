"use client";

import ChallengeNegativeThoughtContent from "../practice/challengeNegativeThoughtContent";
import PracticeCta from "../practice/practiceCta";
import ChallengeThoughtsInfoCover from "./challengeThoughtsInfoCover";
import { useTranslation } from "react-i18next";

const ChallengeThoughtsInfoContent = () => {
  const { t } = useTranslation();
  return (
    <>
      <ChallengeThoughtsInfoCover />
      <PracticeCta url="/choose-negative-thought" thin>
        {t("top-challenge-thought-cta-explanation-1")}
        <br /> <br />
        {t("top-challenge-thought-cta-explanation-2")}
      </PracticeCta>
      <ChallengeNegativeThoughtContent />
    </>
  );
};

export default ChallengeThoughtsInfoContent;

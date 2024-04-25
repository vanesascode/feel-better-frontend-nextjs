"use client";

import GuidedMeditationContent from "../practice/guidedMeditationContent";
import PracticeCta from "../practice/practiceCta";
import MeditationInfoCover from "./meditationInfoCover";
import { useTranslation } from "react-i18next";

const MeditationInfoContent = () => {
  const { t } = useTranslation();
  return (
    <>
      <MeditationInfoCover />
      <PracticeCta url="/meditation" thin>
        {t("top-guided-meditation-cta-explanation")}
      </PracticeCta>
      <GuidedMeditationContent />
    </>
  );
};

export default MeditationInfoContent;

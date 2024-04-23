import {
  fifteenMinMeditationsSpanishStartingIndex0,
  fifteenMinMeditationsSpanishStartingIndex1,
  fifteenMinMeditationsSpanishStartingIndex2,
  fiveMinMeditationsSpanishStartingIndex0,
  fiveMinMeditationsSpanishStartingIndex1,
  fiveMinMeditationsSpanishStartingIndex2,
  tenMinMeditationsSpanishStartingIndex0,
  tenMinMeditationsSpanishStartingIndex1,
  tenMinMeditationsSpanishStartingIndex2,
} from "../../constants/spanishMeditations";
import {
  fiveMinMeditationsEnglishStartingIndex2,
  fiveMinMeditationsEnglishStartingIndex0,
  fiveMinMeditationsEnglishStartingIndex1,
  tenMinMeditationsEnglishStartingIndex0,
  tenMinMeditationsEnglishStartingIndex1,
  tenMinMeditationsEnglishStartingIndex2,
  fifteenMinMeditationsEnglishStartingIndex0,
  fifteenMinMeditationsEnglishStartingIndex1,
  fifteenMinMeditationsEnglishStartingIndex2,
} from "../../constants/englishMeditations";
import {
  fifteenMinMeditationsFrenchStartingIndex0,
  fifteenMinMeditationsFrenchStartingIndex1,
  fifteenMinMeditationsFrenchStartingIndex2,
  fiveMinMeditationsFrenchStartingIndex0,
  fiveMinMeditationsFrenchStartingIndex1,
  fiveMinMeditationsFrenchStartingIndex2,
  tenMinMeditationsFrenchStartingIndex0,
  tenMinMeditationsFrenchStartingIndex1,
  tenMinMeditationsFrenchStartingIndex2,
} from "../../constants/frenchMeditations";

import React from "react";
import MeditationSlide from "./meditationSlide";
import MeditationBarsFrame from "./meditationBarsFrame";
import { useTranslation } from "react-i18next";

const MeditationBars = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  return (
    <>
      <MeditationBarsFrame title={t("5min")}>
        <MeditationSlide
          list1={
            currentLocale === "es"
              ? fiveMinMeditationsSpanishStartingIndex0
              : currentLocale === "fr"
              ? fiveMinMeditationsFrenchStartingIndex0
              : fiveMinMeditationsEnglishStartingIndex0
          }
          list2={
            currentLocale === "es"
              ? fiveMinMeditationsSpanishStartingIndex1
              : currentLocale === "fr"
              ? fiveMinMeditationsFrenchStartingIndex1
              : fiveMinMeditationsEnglishStartingIndex1
          }
          list3={
            currentLocale === "es"
              ? fiveMinMeditationsSpanishStartingIndex2
              : currentLocale === "fr"
              ? fiveMinMeditationsFrenchStartingIndex2
              : fiveMinMeditationsEnglishStartingIndex2
          }
        />
      </MeditationBarsFrame>

      <MeditationBarsFrame title={t("10min")}>
        <MeditationSlide
          list1={
            currentLocale === "es"
              ? tenMinMeditationsSpanishStartingIndex0
              : currentLocale === "fr"
              ? tenMinMeditationsFrenchStartingIndex0
              : tenMinMeditationsEnglishStartingIndex0
          }
          list2={
            currentLocale === "es"
              ? tenMinMeditationsSpanishStartingIndex1
              : currentLocale === "fr"
              ? tenMinMeditationsFrenchStartingIndex1
              : tenMinMeditationsEnglishStartingIndex1
          }
          list3={
            currentLocale === "es"
              ? tenMinMeditationsSpanishStartingIndex2
              : currentLocale === "fr"
              ? tenMinMeditationsFrenchStartingIndex2
              : tenMinMeditationsEnglishStartingIndex2
          }
        />
      </MeditationBarsFrame>

      <MeditationBarsFrame title={t("15min")}>
        <MeditationSlide
          list1={
            currentLocale === "es"
              ? fifteenMinMeditationsSpanishStartingIndex0
              : currentLocale === "fr"
              ? fifteenMinMeditationsFrenchStartingIndex0
              : fifteenMinMeditationsEnglishStartingIndex0
          }
          list2={
            currentLocale === "es"
              ? fifteenMinMeditationsSpanishStartingIndex1
              : currentLocale === "fr"
              ? fifteenMinMeditationsFrenchStartingIndex1
              : fifteenMinMeditationsEnglishStartingIndex1
          }
          list3={
            currentLocale === "es"
              ? fifteenMinMeditationsSpanishStartingIndex2
              : currentLocale === "fr"
              ? fifteenMinMeditationsFrenchStartingIndex2
              : fifteenMinMeditationsEnglishStartingIndex2
          }
        />
      </MeditationBarsFrame>
    </>
  );
};

export default MeditationBars;

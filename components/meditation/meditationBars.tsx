import {
  fiveMinMeditationsSpanish,
  tenMinMeditationsSpanish,
  fifteenMinMeditationsSpanish,
} from "../../constants/spanishMeditations";
import {
  fiveMinMeditationsEnglish,
  tenMinMeditationsEnglish,
  fifteenMinMeditationsEnglish,
} from "../../constants/englishMeditations";
import {
  fiveMinMeditationsFrench,
  tenMinMeditationsFrench,
  fifteenMinMeditationsFrench,
} from "../../constants/frenchMeditations";
import MeditationBarsFrame from "./meditationBarsFrame";
import MeditationSlide from "./meditationSlide";
import { useTranslation } from "react-i18next";

const MeditationBars = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const { t } = useTranslation();

  return (
    <>
      <MeditationBarsFrame title={t("5min")}>
        <MeditationSlide
          list={
            currentLocale === "es"
              ? fiveMinMeditationsSpanish
              : currentLocale === "fr"
              ? fiveMinMeditationsFrench
              : fiveMinMeditationsEnglish
          }
        />
      </MeditationBarsFrame>

      <MeditationBarsFrame title={t("10min")}>
        <MeditationSlide
          list={
            currentLocale === "es"
              ? tenMinMeditationsSpanish
              : currentLocale === "fr"
              ? tenMinMeditationsFrench
              : tenMinMeditationsEnglish
          }
        />
      </MeditationBarsFrame>

      <MeditationBarsFrame title={t("15min")}>
        <MeditationSlide
          list={
            currentLocale === "es"
              ? fifteenMinMeditationsSpanish
              : currentLocale === "fr"
              ? fifteenMinMeditationsFrench
              : fifteenMinMeditationsEnglish
          }
        />
      </MeditationBarsFrame>
    </>
  );
};

export default MeditationBars;

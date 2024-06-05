"use client";

import CtaButton from "../commons/ctaButton";
import { useTranslation } from "react-i18next";
import SelectorButton from "../commons/selectorButton";
import PopupAskingToLogin from "./popupAskingToLogin";
import NegativeThoughtTextarea from "./negativeThoughtTextarea";
import {
  englishNegativeThoughts,
  frenchNegativeThoughts,
  spanishNegativeThoughts,
} from "@/constants/negativeThoughts";

interface ChooseNegativeThoughtFormProps {
  selectedNegativeThought: string;
  setSelectedNegativeThought: React.Dispatch<React.SetStateAction<string>>;
  chooseNegativeThoughtFirstMessage: boolean;
  handleGoToNextStep: () => void;
}

const ChooseNegativeThoughtForm = ({
  selectedNegativeThought,
  setSelectedNegativeThought,
  chooseNegativeThoughtFirstMessage,
  handleGoToNextStep,
}: ChooseNegativeThoughtFormProps) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const negativeThoughtsList =
    currentLocale === "en"
      ? englishNegativeThoughts
      : currentLocale === "es"
      ? spanishNegativeThoughts
      : frenchNegativeThoughts;

  return (
    <section className="flex flex-col justify-center items-center w-full gap-2">
      <h2 className="md:text-heading3-bold text-body-bold text-center text-white mb-5">
        {t("write-or-choose-thought")}
      </h2>
      <div className="flex flex-col w-full max-w-[37.5rem] text-body-thin text-white gap-5 mb-10">
        <NegativeThoughtTextarea
          selectedNegativeThought={selectedNegativeThought}
          setSelectedNegativeThought={setSelectedNegativeThought}
        />
        {negativeThoughtsList.map((thought, index) => (
          <div key={index} className="flex flex-col w-full">
            <SelectorButton
              onClick={() => {
                setSelectedNegativeThought(thought.negativeThought);
              }}
            >
              {thought.negativeThought}
            </SelectorButton>
          </div>
        ))}
        {chooseNegativeThoughtFirstMessage && (
          <p className="text-red-500 text-base-regular text-center">
            {t("choose-first")}
          </p>
        )}
      </div>
      <CtaButton darkerShadow type="button" onClick={handleGoToNextStep} green>
        {t("continue")}
      </CtaButton>
      <PopupAskingToLogin />
    </section>
  );
};

export default ChooseNegativeThoughtForm;

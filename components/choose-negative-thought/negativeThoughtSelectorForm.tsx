"use client";

import CtaButton from "../commons/ctaButton";
import { useTranslation } from "react-i18next";
import SelectorButton from "./selectorButton";
import PopupAskingToLogin from "./popupAskingToLogin";
import NegativeThoughtTextarea from "./negativeThoughtTextarea";

interface NegativeThoughtSelectorFormProps {
  selectedNegativeThought: string;
  setSelectedNegativeThought: React.Dispatch<React.SetStateAction<string>>;
  chooseNegativeThoughtFirstMessage: boolean;
  handleGoToNextStep: () => void;
  showPopupAskingToLogin: boolean;
  setShowPopupAskingToLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const NegativeThoughtSelectorForm = ({
  selectedNegativeThought,
  setSelectedNegativeThought,
  chooseNegativeThoughtFirstMessage,
  handleGoToNextStep,
  showPopupAskingToLogin,
  setShowPopupAskingToLogin,
}: NegativeThoughtSelectorFormProps) => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col justify-center items-center w-full gap-2">
      <h2 className="md:text-heading3-bold text-body-bold text-center text-white mb-5">
        {t("write-or-choose-thought")}
      </h2>
      <div className="flex flex-col w-full max-w-[600px] text-body-thin text-white gap-5 mb-5">
        <NegativeThoughtTextarea
          selectedNegativeThought={selectedNegativeThought}
          setSelectedNegativeThought={setSelectedNegativeThought}
        />
        <SelectorButton
          onClick={() => {
            setSelectedNegativeThought(t("thought-1"));
          }}
        >
          {t("thought-1")}
        </SelectorButton>
        <SelectorButton
          onClick={() => {
            setSelectedNegativeThought(t("thought-2"));
          }}
        >
          {t("thought-2")}
        </SelectorButton>
        <SelectorButton
          onClick={() => {
            setSelectedNegativeThought(t("thought-3"));
          }}
        >
          {t("thought-3")}
        </SelectorButton>
        <SelectorButton
          onClick={() => {
            setSelectedNegativeThought(t("thought-4"));
          }}
        >
          {t("thought-4")}
        </SelectorButton>
        <SelectorButton
          onClick={() => {
            setSelectedNegativeThought(t("thought-5"));
          }}
        >
          {t("thought-5")}
        </SelectorButton>
        <SelectorButton
          onClick={() => {
            setSelectedNegativeThought(t("thought-6"));
          }}
        >
          {t("thought-6")}
        </SelectorButton>
        <SelectorButton
          onClick={() => {
            setSelectedNegativeThought(t("thought-7"));
          }}
        >
          {t("thought-7")}
        </SelectorButton>
        <SelectorButton
          onClick={() => {
            setSelectedNegativeThought(t("thought-8"));
          }}
        >
          {t("thought-8")}
        </SelectorButton>
        <SelectorButton
          onClick={() => {
            setSelectedNegativeThought(t("thought-9"));
          }}
        >
          {t("thought-9")}
        </SelectorButton>
        {chooseNegativeThoughtFirstMessage && (
          <p className="text-red-500 text-base-regular text-center">
            {t("choose-first")}
          </p>
        )}
      </div>
      <CtaButton darkerShadow type="button" onClick={handleGoToNextStep} green>
        {t("continue")}
      </CtaButton>
      <PopupAskingToLogin
        showPopupAskingToLogin={showPopupAskingToLogin}
        setShowPopupAskingToLogin={setShowPopupAskingToLogin}
      />
    </section>
  );
};

export default NegativeThoughtSelectorForm;

import React from "react";
import CtaButton from "../commons/ctaButton";
import { useTranslation } from "react-i18next";
import NegativeThoughtChosen from "../is-negative-thought-true/negativeThoughtChosen";
import PositiveThoughtTextarea from "./positiveThoughtTextarea";
import Link from "next/link";

interface WriteAlternativeThoughtFormProps {
  selectedPositiveThought: string;
  setSelectedPositiveThought: React.Dispatch<React.SetStateAction<string>>;
  handleGoToNextStep: () => void;
  writePositiveThoughtFirstMessage: boolean;
}

const WriteAlternativeThoughtForm = ({
  handleGoToNextStep,
  selectedPositiveThought,
  setSelectedPositiveThought,
  writePositiveThoughtFirstMessage,
}: WriteAlternativeThoughtFormProps) => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col justify-center items-center w-full gap-2">
      <h2 className="md:text-heading3-thin text-body-thin text-center text-white mb-5">
        {t("challenge-your-thought")}{" "}
        <Link href="/cbt-info" target="_blank">
          <span className="md:text-heading3-bold text-body-bold hover:text-light-green cursor-pointer underline">
            {t("examples")}
          </span>
        </Link>
      </h2>
      <NegativeThoughtChosen />
      <div className="flex flex-col w-full max-w-[1024px] text-body-thin text-white gap-5 mt-5">
        <PositiveThoughtTextarea
          selectedPositiveThought={selectedPositiveThought}
          setSelectedPositiveThought={setSelectedPositiveThought}
        />
      </div>
      {writePositiveThoughtFirstMessage && (
        <p className="text-red-500 text-base-regular text-center">
          {t("choose-first")}
        </p>
      )}
      <div className="mt-5">
        <CtaButton
          darkerShadow
          type="button"
          onClick={handleGoToNextStep}
          green
        >
          {t("continue")}
        </CtaButton>
      </div>
    </section>
  );
};

export default WriteAlternativeThoughtForm;
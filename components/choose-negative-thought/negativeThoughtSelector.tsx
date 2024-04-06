"use client";

import { useState, useEffect } from "react";
import CtaButton from "../commons/ctaButton";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setNegativeThought } from "@/redux/features/thoughtSlice";
import { useTranslation } from "react-i18next";
import SelectorButton from "./selectorButton";

const NegativeThoughtSelector = () => {
  const [selectedNegativeThought, setSelectedNegativeThought] = useState("");
  const [
    chooseNegativeThoughtFirstMessage,
    setChooseNegativeThoughtFirstMessage,
  ] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (selectedNegativeThought) {
      dispatch(setNegativeThought(selectedNegativeThought));
    }
  }, [selectedNegativeThought]);

  const handleGoToNextStep = () => {
    if (!selectedNegativeThought) {
      setChooseNegativeThoughtFirstMessage(true);
      return;
    }
    router.push("/is-negative-thought-true");
  };
  return (
    <section className="flex flex-col justify-center items-center w-full gap-2">
      <h2 className="md:text-heading3-bold text-body-bold text-center text-white mb-5">
        {t("write-or-choose-thought")}
      </h2>
      <div className="flex flex-col w-full max-w-[600px] text-body-thin text-white gap-5">
        <textarea
          value={selectedNegativeThought}
          onChange={(e) => setSelectedNegativeThought(e.target.value)}
          className="textarea-input"
          placeholder={t("write-here")}
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
      <CtaButton darkerShadow type="button" onClick={handleGoToNextStep}>
        {t("continue")}
      </CtaButton>
    </section>
  );
};

export default NegativeThoughtSelector;

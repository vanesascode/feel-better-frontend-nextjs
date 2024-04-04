"use client";

import { useState, useEffect } from "react";
import CtaButton from "../commons/ctaButton";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setNegativeThought } from "@/redux/features/thoughtSlice";
import { useTranslation } from "react-i18next";

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
        <button
          onClick={() => {
            console.log(selectedNegativeThought);
            setSelectedNegativeThought(t("thought-1"));
          }}
          className="login-register-input"
        >
          {t("thought-1")}
        </button>
        <button
          onClick={() => {
            console.log(selectedNegativeThought);
            setSelectedNegativeThought(t("thought-2"));
          }}
          className="login-register-input"
        >
          {t("thought-2")}
        </button>
        <button
          onClick={() => {
            console.log(selectedNegativeThought);
            setSelectedNegativeThought(t("thought-3"));
          }}
          className="login-register-input"
        >
          {t("thought-3")}
        </button>
        <button
          onClick={() => {
            console.log(selectedNegativeThought);
            setSelectedNegativeThought(t("thought-4"));
          }}
          className="login-register-input"
        >
          {t("thought-4")}
        </button>
        <button
          onClick={() => {
            console.log(selectedNegativeThought);
            setSelectedNegativeThought(t("thought-5"));
          }}
          className="login-register-input"
        >
          {t("thought-5")}
        </button>
        <button
          onClick={() => {
            console.log(selectedNegativeThought);
            setSelectedNegativeThought(t("thought-6"));
          }}
          className="login-register-input"
        >
          {t("thought-6")}
        </button>
        <button
          onClick={() => {
            console.log(selectedNegativeThought);
            setSelectedNegativeThought(t("thought-7"));
          }}
          className="login-register-input"
        >
          {t("thought-7")}
        </button>
        <button
          onClick={() => {
            console.log(selectedNegativeThought);
            setSelectedNegativeThought(t("thought-8"));
          }}
          className="login-register-input"
        >
          {t("thought-8")}
        </button>
        <button
          onClick={() => {
            console.log(selectedNegativeThought);
            setSelectedNegativeThought(t("thought-9"));
          }}
          className="login-register-input mb-8"
        >
          {t("thought-9")}
        </button>
        {chooseNegativeThoughtFirstMessage && (
          <p className="text-red-500 text-base-regular text-center">
            Please select a negative thought first
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

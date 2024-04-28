"use client";

import { useTranslation } from "react-i18next";
import TextToSpeech from "../commons/textToSpeech";

const ConditionsText = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col justify-center items-start w-full gap-2">
      <TextToSpeech
        textToSpeak={
          t("terms") +
          t("paragraph1") +
          t("title1") +
          t("paragraph2") +
          t("title2") +
          t("paragraph3") +
          t("title3") +
          t("paragraph4") +
          t("title4") +
          t("paragraph5") +
          t("title5") +
          t("paragraph6") +
          t("title6") +
          t("paragraph7") +
          t("title7") +
          t("paragraph8")
        }
      />
      <article>
        <p className="md:text-body-thin text-base-thin pb-10 text-gray">
          {t("paragraph1")}
        </p>
        <h2 className="md:text-heading3-bold text-body-bold text-white mb-5">
          {t("title1")}
        </h2>
        <p className="md:text-body-thin text-base-thin pb-10 text-gray">
          {t("paragraph2")}
        </p>
        <h2 className="md:text-heading3-bold text-body-bold text-white mb-5">
          {t("title2")}
        </h2>
        <p className="md:text-body-thin text-base-thin pb-10 text-gray">
          {t("paragraph3")}
        </p>
        <h2 className="md:text-heading3-bold text-body-bold text-white mb-5">
          {t("title3")}
        </h2>
        <p className="md:text-body-thin text-base-thin pb-10 text-gray">
          {t("paragraph4")}
        </p>
        <h2 className="md:text-heading3-bold text-body-bold text-white mb-5">
          {t("title4")}
        </h2>
        <p className="md:text-body-thin text-base-thin pb-10 text-gray">
          {t("paragraph5")}
        </p>
        <h2 className="md:text-heading3-bold text-body-bold text-white mb-5">
          {t("title5")}
        </h2>
        <p className="md:text-body-thin text-base-thin pb-10 text-gray">
          {t("paragraph6")}
        </p>
        <h2 className="md:text-heading3-bold text-body-bold text-white mb-5">
          {t("title6")}
        </h2>
        <p className="md:text-body-thin text-base-thin pb-10 text-gray">
          {t("paragraph7")}
        </p>
        <h2 className="md:text-heading3-bold text-body-bold text-white mb-5">
          {t("title7")}
        </h2>
        <p className="md:text-body-thin text-base-thin text-gray">
          {t("paragraph8")}
        </p>
      </article>
    </section>
  );
};

export default ConditionsText;

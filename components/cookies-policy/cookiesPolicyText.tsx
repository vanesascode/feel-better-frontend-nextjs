"use client";

import { useTranslation } from "react-i18next";
import TextToSpeech from "../commons/textToSpeech";

const CookiesPolicyText = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col justify-center items-start w-full gap-2">
      <TextToSpeech
        textToSpeak={
          t("cookies-information") +
          t("cookies-feelbetter") +
          t("essential-cookies") +
          t("essential-cookies-explanation") +
          t("analysis-cookies") +
          t("analysis-cookies-explanation")
        }
      />
      <article>
        <p className="md:text-body-thin text-base-thin pb-10 text-gray">
          {t("cookies-information")}
        </p>
        <h2 className="md:text-heading3-bold text-body-bold text-white mb-5">
          {t("cookies-feelbetter")}
        </h2>
        <h3 className="md:text-body-bold text-base-bold text-white mb-5">
          {t("essential-cookies")}
        </h3>
        <p className="md:text-body-thin text-base-thin pb-10 text-gray">
          {t("essential-cookies-explanation")}
        </p>
        <h3 className="md:text-body-bold text-base-bold text-white mb-5">
          {t("analysis-cookies")}
        </h3>
        <p className="md:text-body-thin text-base-thin pb-10 text-gray">
          {t("analysis-cookies-explanation")}
        </p>
        <h2 className="md:text-heading3-bold text-body-bold text-white mb-5">
          {t("your-rights")}
        </h2>
        <p className="md:text-body-thin text-base-thin text-gray">
          {t("your-rights-explanation")}
        </p>
      </article>
    </section>
  );
};

export default CookiesPolicyText;

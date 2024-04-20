"use client";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import AdviceToMeditatePopupExplanation from "./adviceToMeditatePopupExplanation";

const AdviceToMeditateLink = () => {
  const { t } = useTranslation();
  const [showAdviceToMeditatePopup, setShowAdviceToMeditatePopup] =
    useState<boolean>(false);

  return (
    <>
      <div className="flex justify-center items-center sm:mb-0 mb-3 text-base-thin md:text-body-thin ">
        <h2>
          {t("advice")}{" "}
          <span
            onClick={() => setShowAdviceToMeditatePopup(true)}
            className="text-cta-green text-base-bold md:text-body-bold cursor-pointer"
          >
            {t("here")}
          </span>
        </h2>
      </div>
      <AdviceToMeditatePopupExplanation
        showAdviceToMeditatePopup={showAdviceToMeditatePopup}
        setShowAdviceToMeditatePopup={setShowAdviceToMeditatePopup}
      />
    </>
  );
};

export default AdviceToMeditateLink;

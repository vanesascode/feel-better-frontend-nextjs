"use client";

import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import PopupsBackground from "../commons/popupsBackground";
import CtaButton from "../commons/ctaButton";

interface AdviceToMeditatePopupExplanationProps {
  showAdviceToMeditatePopup: boolean;
  setShowAdviceToMeditatePopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdviceToMeditatePopupExplanation = ({
  showAdviceToMeditatePopup,
  setShowAdviceToMeditatePopup,
}: AdviceToMeditatePopupExplanationProps) => {
  const { t } = useTranslation();

  return (
    <>
      <AnimatePresence>
        {showAdviceToMeditatePopup && (
          <>
            <PopupsBackground
              onClick={() => setShowAdviceToMeditatePopup(false)}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              exit={{ opacity: 0 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[18.125rem] md:w-[45rem] sm2:w-[33.75rem] sm:w-[25rem] xs:w-[22.5rem] bg-dark p-10 rounded-lg max-h-[90vh] overflow-y-auto"
            >
              <div className="flex flex-col text-white xs:gap-10 gap-6 items-center">
                <h2 className="md:text-heading1-bold text-heading3-bold text-center">
                  {t("advice-to-meditate")}
                </h2>

                <ul className="flex flex-col justify-start items-start gap-5 list-disc">
                  <p className="md:text-heading3-bold text-body-bold">
                    {t("preparation")}
                  </p>

                  <li className="md:text-body-thin text-base-thin text-white text-start ml-5">
                    {t("preparation-point-one")}{" "}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {t("preparation-point-one-explanation")}
                    </span>
                  </li>

                  <li className="md:text-body-thin text-base-thin text-white text-start ml-5">
                    {t("preparation-point-two")}{" "}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {t("preparation-point-two-explanation")}
                    </span>
                  </li>

                  <li className="md:text-body-thin text-base-thin text-white text-start ml-5">
                    {t("preparation-point-three")}{" "}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {t("preparation-point-three-explanation")}
                    </span>
                  </li>

                  <p className="md:text-heading3-bold text-body-bold">
                    {t("attitude")}
                  </p>

                  <li className="md:text-body-thin text-base-thin text-white text-start ml-5">
                    {t("attitude-point-one")}{" "}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {t("attitude-point-one-explanation")}
                    </span>
                  </li>

                  <li className="md:text-body-thin text-base-thin text-white text-start ml-5">
                    {t("attitude-point-two")}{" "}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {t("attitude-point-two-explanation")}
                    </span>
                  </li>

                  <li className="md:text-body-thin text-base-thin text-white text-start ml-5">
                    {t("attitude-point-three")}{" "}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {t("attitude-point-three-explanation")}
                    </span>
                  </li>

                  <p className="md:text-heading3-bold text-body-bold">
                    {t("remember")}
                  </p>

                  <li className="md:text-body-thin text-base-thin text-white text-start ml-5">
                    {t("remember-point-one")}{" "}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {t("remember-point-one-explanation")}
                    </span>
                  </li>

                  <li className="md:text-body-thin text-base-thin text-white text-start ml-5">
                    {t("remember-point-two")}{" "}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {t("remember-point-two-explanation")}
                    </span>
                  </li>
                </ul>
                <CtaButton
                  onClick={() => setShowAdviceToMeditatePopup(false)}
                  type="button"
                  darkerShadow
                  green
                >
                  {t("ok")}
                </CtaButton>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdviceToMeditatePopupExplanation;

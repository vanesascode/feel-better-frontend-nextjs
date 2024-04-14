import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import CtaButton from "../commons/ctaButton";
import PopupsBackground from "../commons/popupsBackground";

interface FeelingTheSamePopupExplanationProps {
  saveThoughts: () => void;
  showFeelingTheSamePopupExplanation: boolean;
  setShowFeelingTheSamePopupExplanation: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  savingThoughtsError: boolean;
}

const FeelingTheSamePopupExplanation = ({
  saveThoughts,
  showFeelingTheSamePopupExplanation,
  setShowFeelingTheSamePopupExplanation,
  savingThoughtsError,
}: FeelingTheSamePopupExplanationProps) => {
  const { t } = useTranslation();

  const handleOkAnswerFromUser = () => {
    setShowFeelingTheSamePopupExplanation(false);
    saveThoughts();
  };

  return (
    <>
      <AnimatePresence>
        {showFeelingTheSamePopupExplanation && (
          <>
            <PopupsBackground />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              exit={{ opacity: 0 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[290px] md:w-[720px] sm2:w-[540px] sm:w-[400px] xs:w-[360px] bg-dark p-10 rounded-lg max-h-[90vh] overflow-y-auto"
            >
              <div className="flex flex-col items-center text-white gap-10 ">
                <h2 className="md:text-heading1-bold text-heading2-bold text-center">
                  {t("dont-worry")}
                </h2>
                <div className="flex flex-col justify-start gap-5">
                  <p className="md:text-body-thin text-base-thin text-gray">
                    {t("first-paragraph")}{" "}
                    <span className="md:text-body-bold text-white text-base-bold">
                      {t("normal")}
                    </span>
                  </p>
                  <p className="md:text-body-thin text-base-thin text-gray">
                    {t("second-paragraph")}
                  </p>
                  <p className="md:text-body-thin text-base-thin text-gray">
                    {t("third-paragraph")}
                  </p>
                  <p className="md:text-body-thin text-base-thin text-gray">
                    {t("fourth-paragraph")}{" "}
                    <span className="md:text-body-bold text-white text-base-bold">
                      {t("patience")}
                    </span>
                  </p>
                </div>
                {savingThoughtsError && (
                  <p className="text-red-500 text-base-regular text-center mt-5">
                    {t("server-error")}
                  </p>
                )}
                <CtaButton
                  onClick={handleOkAnswerFromUser}
                  type="button"
                  darkerShadow
                  green
                >
                  {t("finish")}
                </CtaButton>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FeelingTheSamePopupExplanation;

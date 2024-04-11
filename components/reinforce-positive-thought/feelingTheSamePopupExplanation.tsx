import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import CtaButton from "../commons/ctaButton";

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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              exit={{ opacity: 0 }}
              className="fixed top-0 left-0 right-0 w-full h-full bg-[#ffffff] bg-opacity-30 z-10"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              exit={{ opacity: 0 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[250px] md:w-[420px] xs:w-[300px] bg-dark p-10  rounded-lg"
            >
              <div className="flex flex-col items-center">
                <h2 className="text-heading3-bold text-center text-white">
                  {t("your-details-correctly-saved")}
                </h2>
                <p className="text-body-thin text-center text-white my-5">
                  {t("login-again")}
                </p>
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
                  {t("finalizar")}
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

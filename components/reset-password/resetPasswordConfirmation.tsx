import { motion, AnimatePresence } from "framer-motion";
import CtaButton from "../commons/ctaButton";
import { useTranslation } from "react-i18next";
import PopupsBackground from "../commons/popupsBackground";

interface ResetPasswordConfirmationProps {
  showPasswordResetConfirmation: boolean;
  handleOkAnswerFromUser: () => void;
}

const ResetPasswordConfirmation = ({
  showPasswordResetConfirmation,
  handleOkAnswerFromUser,
}: ResetPasswordConfirmationProps) => {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {showPasswordResetConfirmation && (
        <>
          <PopupsBackground />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            exit={{ opacity: 0 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[15.625rem] md:w-[26.25rem] xs:w-[18.75rem] bg-dark p-10 rounded-lg"
          >
            <div className="flex flex-col items-center">
              <h2 className="text-heading3-bold text-center text-white">
                {t("your-details-correctly-saved")}
              </h2>
              <p className="text-body-thin text-center text-white my-5">
                {t("login-again")}
              </p>
              <CtaButton
                onClick={handleOkAnswerFromUser}
                type="button"
                darkerShadow
                green
              >
                Ok
              </CtaButton>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResetPasswordConfirmation;

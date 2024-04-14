import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import CtaButton from "../commons/ctaButton";
import PopupsBackground from "../commons/popupsBackground";

interface EditedAccountDetailsConfirmationProps {
  handleLogout: () => void;
  showConfirmationAccountDetailsSavedCorrectly: boolean;
  setShowConfirmationAccountDetailsSavedCorrectly: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

const EditedAccountDetailsConfirmation = ({
  handleLogout,
  showConfirmationAccountDetailsSavedCorrectly,
  setShowConfirmationAccountDetailsSavedCorrectly,
}: EditedAccountDetailsConfirmationProps) => {
  const { t } = useTranslation();

  const handleOkAnswerFromUser = () => {
    setShowConfirmationAccountDetailsSavedCorrectly(false);
    handleLogout();
  };

  return (
    <>
      <AnimatePresence>
        {showConfirmationAccountDetailsSavedCorrectly && (
          <>
            <PopupsBackground />
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
                <CtaButton
                  onClick={handleOkAnswerFromUser}
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

export default EditedAccountDetailsConfirmation;

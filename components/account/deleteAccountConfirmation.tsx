import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import CtaButton from "../commons/ctaButton";

interface DeleteAccountConfirmationProps {
  handleLogoutAndDeleteAccount: () => void;
  showDeleteAccountConfirmation: boolean;
  setShowDeleteAccountConfirmation: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

const DeleteAccountConfirmation = ({
  handleLogoutAndDeleteAccount,
  showDeleteAccountConfirmation,
  setShowDeleteAccountConfirmation,
}: DeleteAccountConfirmationProps) => {
  const { t } = useTranslation();

  return (
    <>
      <AnimatePresence>
        {showDeleteAccountConfirmation && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              exit={{ opacity: 0 }}
              className="fixed top-0 left-0 right-0 w-full h-full bg-[#ffffff] bg-opacity-30 z-10"
              onClick={() => setShowDeleteAccountConfirmation(false)}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              exit={{ opacity: 0 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[250px] md:w-[420px] xs:w-[300px] bg-dark p-10 sm:p-14  rounded-lg"
            >
              <div className="flex flex-col items-center">
                <h2 className="text-heading1-bold text-center text-red-500 mb-3">
                  {t("careful")}
                </h2>
                <p className="text-body-regular text-center text-white mb-5">
                  {t("are-you-sure")}
                </p>
                <div className="mb-5">
                  <CtaButton
                    onClick={handleLogoutAndDeleteAccount}
                    type="button"
                    darkerShadow
                    white
                  >
                    {t("yes")}
                  </CtaButton>
                </div>
                <CtaButton
                  onClick={() => setShowDeleteAccountConfirmation(false)}
                  type="button"
                  darkerShadow
                  green
                >
                  {t("no")}
                </CtaButton>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default DeleteAccountConfirmation;

import { motion, AnimatePresence } from "framer-motion";
import CtaButton from "../commons/ctaButton";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

interface Props {
  showRecoveryEmailSentConfirmation: boolean;
}

const EmailSentForRecoveryConfirmation = ({
  showRecoveryEmailSentConfirmation,
}: Props) => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {showRecoveryEmailSentConfirmation && (
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
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[250px] md:w-[420px] xs:w-[300px] bg-dark p-10 sm:p-14 rounded-lg"
          >
            <div className="flex flex-col items-center">
              <h2 className="text-heading3-bold text-center text-white">
                {t("correctly-sent")}
              </h2>
              <p className="text-body-thin text-center text-white my-5">
                {t("spam-folder")}
              </p>
              <CtaButton
                onClick={() => router.push("/")}
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
  );
};

export default EmailSentForRecoveryConfirmation;

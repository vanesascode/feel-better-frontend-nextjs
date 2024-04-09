import CtaButton from "../commons/ctaButton";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

interface PopupAskingToLoginProps {
  showPopupAskingToLogin: boolean;
  setShowPopupAskingToLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupAskingToLogin = ({
  showPopupAskingToLogin,
  setShowPopupAskingToLogin,
}: PopupAskingToLoginProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <AnimatePresence>
      {showPopupAskingToLogin && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 right-0 w-full h-full bg-[#ffffff] bg-opacity-30 z-10"
            onClick={() => setShowPopupAskingToLogin(false)}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            exit={{ opacity: 0 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[250px] md:w-[620px] xs:w-[300px] bg-dark p-10 text-white rounded-lg"
          >
            <div className="flex flex-col items-center">
              <h2 className="md:text-heading3-bold text-body-bold text-center mb-5">
                {t("ask-login")}
              </h2>
              <div className="flex flex-col md:flex-row gap-5">
                <CtaButton
                  onClick={() => setShowPopupAskingToLogin(false)}
                  type="button"
                  darkerShadow
                  white
                >
                  {t("ignore")}
                </CtaButton>
                <CtaButton
                  onClick={() => router.push("/login")}
                  type="button"
                  darkerShadow
                  green
                >
                  {t("access")}
                </CtaButton>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PopupAskingToLogin;

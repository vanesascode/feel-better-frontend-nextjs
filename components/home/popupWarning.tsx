import CtaButton from "../commons/ctaButton";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import PopupsBackground from "../commons/popupsBackground";
import { useShowPopupAfterDelay } from "@/hooks/useShowPopupAfterDelay";

const PopupWarning = () => {
  const { t } = useTranslation();
  const { showPopupAfterDelay, setShowPopupAfterDelay } =
    useShowPopupAfterDelay();

  return (
    <AnimatePresence>
      {showPopupAfterDelay && (
        <>
          <PopupsBackground onClick={() => setShowPopupAfterDelay(false)} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            exit={{ opacity: 0 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[15.625rem] md:w-[38.75rem] xs:w-[18.75rem] bg-dark p-10 text-white rounded-lg"
          >
            <div className="flex flex-col items-center">
              <h2 className="md:text-heading3-regular text-body-regular text-center mb-5">
                {t("serverWarning")}
              </h2>
              <div className="flex flex-col md:flex-row gap-5">
                <CtaButton
                  onClick={() => setShowPopupAfterDelay(false)}
                  type="button"
                  darkerShadow
                  white
                >
                  {t("ok")}
                </CtaButton>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PopupWarning;

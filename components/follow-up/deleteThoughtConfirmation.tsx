import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import CtaButton from "../commons/ctaButton";

interface DeleteThoughtConfirmationProps {
  setModalToDeleteThought: React.Dispatch<React.SetStateAction<boolean>>;
  modalToDeleteThought: boolean;
  handleDeleteThought: () => void;
}

const DeleteThoughtConfirmation = ({
  setModalToDeleteThought,
  modalToDeleteThought,
  handleDeleteThought,
}: DeleteThoughtConfirmationProps) => {
  const { t } = useTranslation();

  return (
    <>
      <AnimatePresence>
        {modalToDeleteThought && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              exit={{ opacity: 0 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[15.62rem] md:w-[38.75rem] xs:w-[18.75rem] bg-dark p-10 rounded-lg"
            >
              <div className="flex flex-col items-center">
                <h2 className="text-heading1-bold text-center text-red-500">
                  {t("careful")}
                </h2>
                <p className="text-body-regular text-center text-white mb-6">
                  {t("are-you-sure")}
                </p>
                <div className="flex flex-col md:flex-row gap-5">
                  <CtaButton
                    onClick={handleDeleteThought}
                    type="button"
                    darkerShadow
                    white
                  >
                    {t("yes")}
                  </CtaButton>
                  <CtaButton
                    onClick={() => setModalToDeleteThought(false)}
                    type="button"
                    darkerShadow
                    green
                  >
                    {t("no")}
                  </CtaButton>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default DeleteThoughtConfirmation;

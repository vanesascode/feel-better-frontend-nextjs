import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import CtaButton from "../commons/ctaButton";
import { useTranslation } from "react-i18next";
import FeelingSelectorToEditThought from "./feelingSelectorToEditThought";

interface EditThoughtPopupProps {
  handleEditThought: () => void;
  setModalToEditThought: React.Dispatch<React.SetStateAction<boolean>>;
  modalToEditThought: boolean;
  positiveThoughtToBeEdited: string;
  negativeThoughtToBeEdited: string;
  feelingToBeEdited: string;
  setPositiveThoughtToBeEdited: React.Dispatch<React.SetStateAction<string>>;
  setNegativeThoughtToBeEdited: React.Dispatch<React.SetStateAction<string>>;
  setFeelingToBeEdited: React.Dispatch<React.SetStateAction<string>>;
}

const EditThoughtPopup = ({
  setModalToEditThought,
  modalToEditThought,
  handleEditThought,
  positiveThoughtToBeEdited,
  negativeThoughtToBeEdited,
  feelingToBeEdited,
  setPositiveThoughtToBeEdited,
  setNegativeThoughtToBeEdited,
  setFeelingToBeEdited,
}: EditThoughtPopupProps) => {
  const { t } = useTranslation();

  return (
    <>
      <AnimatePresence>
        {modalToEditThought && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              exit={{ opacity: 0 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[90%] xxxl:w-[50%] bg-dark md:p-10 px-3 py-5 rounded-lg max-h-[90vh] overflow-y-auto"
            >
              <div className="flex flex-col items-center text-white">
                <h2 className="sm:text-heading3-bold text-body-bold text-center">
                  {t("edit-your-thought")}
                </h2>
                <form
                  onSubmit={handleEditThought}
                  className="w-full xl:max-w-[60rem]"
                >
                  <div className="flex flex-col gap-1 my-5">
                    <div className="flex md:flex-row flex-col gap-1 items-center mb-5">
                      <label className="md:text-body-bold text-base-bold md:w-[7rem] md:mb-0 mb-2 max-md:text-center md:mr-5 text-gray ">
                        {t("negative-thought")}{" "}
                      </label>
                      <textarea
                        rows={3}
                        className="white-green-input lg:w-5/6 w-full"
                        defaultValue={negativeThoughtToBeEdited}
                        onChange={(e) =>
                          setNegativeThoughtToBeEdited(e.target.value)
                        }
                      />
                    </div>
                    <div className="flex md:flex-row flex-col gap-1 items-center mb-5">
                      <label className="md:text-body-bold text-base-bold md:w-[7rem] md:mb-0 mb-2 max-md:text-center md:mr-5 text-gray">
                        {t("positive-thought")}{" "}
                      </label>
                      <textarea
                        rows={3}
                        className="white-green-input lg:w-5/6 w-full"
                        defaultValue={positiveThoughtToBeEdited}
                        onChange={(e) =>
                          setPositiveThoughtToBeEdited(e.target.value)
                        }
                      />
                    </div>
                    <FeelingSelectorToEditThought
                      feelingToBeEdited={feelingToBeEdited}
                      setFeelingToBeEdited={setFeelingToBeEdited}
                    />
                  </div>

                  <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
                    <CtaButton
                      onClick={() => setModalToEditThought(false)}
                      type="button"
                      darkerShadow
                      white
                    >
                      {t("cancel")}
                    </CtaButton>
                    <CtaButton type="submit" darkerShadow green>
                      {t("save")}
                    </CtaButton>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default EditThoughtPopup;

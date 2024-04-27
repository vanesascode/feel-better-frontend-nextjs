import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import BibliographyText from "./bibliographyText";
import { AnimatePresence, motion } from "framer-motion";

const BibliographyBox = () => {
  const [openBibliography, setOpenBibliography] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <div>
      <div
        className="text-white flex justify-center items-center m-10 text-body-thin md:text-heading3-thin gap-5 cursor-pointer"
        onClick={() => setOpenBibliography(!openBibliography)}
      >
        <p>{t("bibliography")}</p>
        <ChevronDownIcon
          className={`md:h-6 md:w-6 sm:h-5 sm:w-5 h-4 w-4 mb-[-0.1875rem] hover:scale-125 ${
            openBibliography && "rotate-180 transition-all duration-500"
          }`}
        />
      </div>
      <AnimatePresence>
        {openBibliography && (
          <motion.div
            initial={{ height: 0, opacity: 0, overflow: "hidden" }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            exit={{ height: 0, opacity: 0, overflow: "hidden" }}
          >
            <BibliographyText />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BibliographyBox;

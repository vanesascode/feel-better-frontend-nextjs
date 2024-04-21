"use client";

import { useTranslation } from "react-i18next";
import ContentTitleBar from "../commons/contentTitleBar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import GuidedMeditationContent from "./guidedMeditationContent";
import PracticeCta from "./practiceCta";

const GuidedMeditationDropdown = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <ContentTitleBar
        green2
        rotateIcon={isOpen ? true : false}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className="flex gap-5 items-center">
          <div className="max-sm:w-[1.3rem] max-md:w-[1.5rem]">
            <Image
              src={"/home/loto-icon.svg"}
              alt="meditation-icon"
              width={28}
              height={28}
            />{" "}
          </div>
          {t("guided-meditation")}
        </div>
      </ContentTitleBar>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, overflow: "hidden" }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            exit={{ height: 0, opacity: 0, overflow: "hidden" }}
          >
            <PracticeCta url="/meditation" thin>
              {t("top-guided-meditation-cta-explanation")}
            </PracticeCta>
            <GuidedMeditationContent />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GuidedMeditationDropdown;

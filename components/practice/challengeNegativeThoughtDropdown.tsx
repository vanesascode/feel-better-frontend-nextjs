"use client";

import { useTranslation } from "react-i18next";
import ContentTitleBar from "../commons/contentTitleBar";
import ChallengeNegativeThoughtContent from "./challengeNegativeThoughtContent";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PracticeCta from "./practiceCta";

const ChallengeNegativeThoughtDropdown = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <ContentTitleBar
        green1
        rotateIcon={isOpen ? true : false}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className="flex gap-5 items-center">
          <div className="max-sm:w-[1.2rem] max-md:w-[1.5rem]">
            <Image
              src={"/home/head-icon.svg"}
              alt="negative-thoughts-icon"
              width={27}
              height={27}
            />
          </div>{" "}
          {t("challenge-negative-thought")}
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
            <PracticeCta url="/choose-negative-thought">
              {t("top-challenge-thought-cta-explanation-1")}
              <br /> <br />
              {t("top-challenge-thought-cta-explanation-2")}
            </PracticeCta>

            <ChallengeNegativeThoughtContent />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChallengeNegativeThoughtDropdown;

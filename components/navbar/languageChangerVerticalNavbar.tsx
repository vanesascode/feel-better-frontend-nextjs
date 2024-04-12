"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useLanguageChanger } from "@/hooks/useLanguageChanger";

const LanguageChangerVerticalNavbar = () => {
  const [showLanguageOptionMenu, setShowLanguageOptionMenu] =
    useState<boolean>(false);
  const { setLanguageValue, currentLocale } = useLanguageChanger();

  return (
    <>
      <div className="block lg:hidden">
        <div
          className="flex items-center bg-dark hover:text-light-green outline-none active:outline-none uppercase justify-between pb-[32px] cursor-pointer"
          onClick={() => setShowLanguageOptionMenu(!showLanguageOptionMenu)}
        >
          <div>{currentLocale}</div>
          <ChevronDownIcon
            className={`h-5 w-5 mb-[-3px] ${
              showLanguageOptionMenu && "rotate-180 transition-all duration-500"
            }`}
          />
        </div>
        {showLanguageOptionMenu && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white px-10 py-4 rounded-lg text-black flex"
            >
              <button
                onClick={() => setLanguageValue("es")}
                className={`${
                  currentLocale === "es" ? "hidden" : ""
                } hover:text-cta-green-hover w-[50%] flex justify-center items-center`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguageValue("en")}
                className={`${
                  currentLocale === "en" ? "hidden" : ""
                } hover:text-cta-green-hover w-[50%] flex justify-center items-center`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguageValue("fr")}
                className={`${
                  currentLocale === "fr" ? "hidden" : ""
                } hover:text-cta-green-hover w-[50%] flex justify-center items-center`}
              >
                FR
              </button>
            </motion.div>
          </>
        )}
      </div>
    </>
  );
};

export default LanguageChangerVerticalNavbar;

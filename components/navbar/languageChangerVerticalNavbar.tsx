"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const LanguageChangerVerticalNavbar = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [languageValue, setLanguageValue] = useState<string>(currentLocale);
  const [showLanguageOptionMenu, setShowLanguageOptionMenu] =
    useState<boolean>(false);

  useEffect(() => {
    const changeLanguageValue = () => {
      const newLocale = languageValue;
      const days = 1;
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = date.toUTCString();
      document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;
      if (currentLocale === i18nConfig.defaultLocale) {
        router.push("/" + newLocale + currentPathname);
      } else {
        router.push(
          currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
        );
      }
      router.refresh();
    };
    changeLanguageValue();
  }, [languageValue]);

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
              className="bg-white px-20 py-4 rounded-lg flex text-black justify-between gap-2"
            >
              <button
                onClick={() => setLanguageValue("es")}
                className={`${
                  currentLocale === "es" ? "hidden" : ""
                } hover:text-cta-green-hover`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguageValue("en")}
                className={`${
                  currentLocale === "en" ? "hidden" : ""
                } hover:text-cta-green-hover`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguageValue("fr")}
                className={`${
                  currentLocale === "fr" ? "hidden" : ""
                } hover:text-cta-green-hover`}
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

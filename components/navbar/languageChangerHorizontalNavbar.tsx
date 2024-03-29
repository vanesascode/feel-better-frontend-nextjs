"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const LanguageChangerHorizontalNavbar = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [languageValue, setLanguageValue] = useState(currentLocale);

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
  }, [languageValue, currentLocale]);

  return (
    <>
      <div className="relative py-3 hidden lg:block">
        <div className="flex items-center gap-2 bg-dark font-source border-[1px] border-gray p-5 py-2 rounded-full hover:bg-black outline-none active:outline-none w-300px uppercase transition duration-500 ease-in-out cursor-pointer">
          <div>{currentLocale}</div>
          <ChevronDownIcon className="h-5 w-5 mb-[-3px]" />
        </div>
        <div className="navbar-language-submenu">
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
        </div>
      </div>
    </>
  );
};

export default LanguageChangerHorizontalNavbar;

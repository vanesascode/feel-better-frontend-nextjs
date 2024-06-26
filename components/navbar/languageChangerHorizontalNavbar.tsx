"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useLanguageChanger } from "@/hooks/useLanguageChanger";

const LanguageChangerHorizontalNavbar = () => {
  const { setLanguageValue, currentLocale } = useLanguageChanger();

  return (
    <>
      <div className="relative py-3 hidden lg:block">
        <div className="flex items-center gap-2 bg-dark border-[1px] border-gray p-5 py-2 rounded-full hover:bg-black outline-none active:outline-none uppercase transition duration-500 ease-in-out cursor-pointer">
          <div>{currentLocale}</div>
          <ChevronDownIcon className="h-5 w-5 mb-[-0.1875rem]" />
        </div>
        <div className="navbar-language-submenu">
          <button
            onClick={() => setLanguageValue("es")}
            className={`${
              currentLocale === "es" ? "hidden" : ""
            } hover:text-cta-green-hover`}
            id="link-to-es"
            aria-label="Button to change to Spanish"
          >
            ES
          </button>
          <button
            onClick={() => setLanguageValue("en")}
            className={`${
              currentLocale === "en" ? "hidden" : ""
            } hover:text-cta-green-hover`}
            id="link-to-en"
            aria-label="Button to change to English"
          >
            EN
          </button>
          <button
            onClick={() => setLanguageValue("fr")}
            className={`${
              currentLocale === "fr" ? "hidden" : ""
            } hover:text-cta-green-hover`}
            id="link-to-fr"
            aria-label="Button to change to French"
          >
            FR
          </button>
        </div>
      </div>
    </>
  );
};

export default LanguageChangerHorizontalNavbar;

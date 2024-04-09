"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import LanguageChangerVerticalNavbar from "./languageChangerVerticalNavbar";
import { useTranslation } from "react-i18next";

interface NavbarLinksProps {
  showOptionsNavbar: boolean;
  name: string | null;
  setShowOptionsPracticeMenu: React.Dispatch<React.SetStateAction<boolean>>;
  handleLogout: () => void;
  showOptionsPracticeMenu: boolean;
  setShowOptionsNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

const LinksVerticalNavbar = ({
  showOptionsNavbar,
  name,
  setShowOptionsPracticeMenu,
  handleLogout,
  showOptionsPracticeMenu,
  setShowOptionsNavbar,
}: NavbarLinksProps) => {
  const { t } = useTranslation();

  return (
    <>
      <AnimatePresence>
        {showOptionsNavbar && (
          <>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 z-10 bg-dark h-screen sm2:w-[400px] max-sm2:right-0 text-body-regular lg:hidden block"
            >
              <div className="pt-24 pl-14 pr-10 flex flex-col gap-8">
                <button
                  className="flex items-center hover:text-light-green justify-between"
                  onClick={() =>
                    setShowOptionsPracticeMenu(!showOptionsPracticeMenu)
                  }
                >
                  <Link href="/practicar" className="hover:text-light-green">
                    {t("navbar:practice")}
                  </Link>
                  <ChevronDownIcon
                    className={`h-5 w-5 mb-[-3px] ${
                      showOptionsPracticeMenu &&
                      "rotate-180 transition-all duration-500"
                    }`}
                  />
                </button>
                {showOptionsPracticeMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white px-5 py-4 rounded-lg flex xs:flex-row flex-col text-black gap-10"
                  >
                    <Link
                      href="/choose-negative-thought"
                      className="hover:text-dark-green-1"
                      onClick={() => setShowOptionsNavbar(false)}
                    >
                      {t("navbar:challenge-a-negative-thought")}
                    </Link>
                    <Link
                      href="/meditaciones"
                      className="hover:text-dark-green-1"
                      onClick={() => setShowOptionsNavbar(false)}
                    >
                      {t("navbar:do-a-guided-meditation")}
                    </Link>
                  </motion.div>
                )}
                <Link
                  href="/aprender"
                  className="hover:text-light-green"
                  onClick={() => setShowOptionsNavbar(false)}
                >
                  {t("navbar:learn")}
                </Link>
                {name && (
                  <Link
                    href="/seguimiento"
                    className="hover:text-light-green"
                    onClick={() => setShowOptionsNavbar(false)}
                  >
                    {t("navbar:follow-up")}
                  </Link>
                )}
                <Link
                  href={name ? "/account" : "/login"}
                  className="hover:text-light-green"
                  onClick={() => setShowOptionsNavbar(false)}
                >
                  {name ? t("navbar:account") : t("navbar:login")}
                </Link>
                {name && (
                  <Link
                    href="/login"
                    onClick={handleLogout}
                    className="hover:text-light-green"
                  >
                    {t("navbar:logout")}
                  </Link>
                )}
                <LanguageChangerVerticalNavbar />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default LinksVerticalNavbar;

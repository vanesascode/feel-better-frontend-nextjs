"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bars3BottomRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import LinksVerticalNavbar from "./linksVerticalNavbar";
import { useTranslation } from "react-i18next";
import LanguageChangerHorizontalNavbar from "./languageChangerHorizontalNavbar";

interface NavbarLinksProps {
  showOptionsNavbar: boolean;
  setShowOptionsNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  navbarHidden: boolean;
  darkBackground: boolean;
  name: string | null;
  setShowOptionsPracticeMenu: React.Dispatch<React.SetStateAction<boolean>>;
  handleLogout: () => void;
  showOptionsPracticeMenu: boolean;
  handleShowOptionsNavbar: () => void;
}

function LinksHorizontalNavbar({
  showOptionsNavbar,
  setShowOptionsNavbar,
  navbarHidden,
  darkBackground,
  name,
  setShowOptionsPracticeMenu,
  handleLogout,
  showOptionsPracticeMenu,
  handleShowOptionsNavbar,
}: NavbarLinksProps) {
  const { t } = useTranslation();

  return (
    <>
      <AnimatePresence>
        {showOptionsNavbar && darkBackground && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 right-0 w-full h-full bg-[#000000] bg-opacity-50 "
            onClick={() => setShowOptionsNavbar(false)}
          ></motion.div>
        )}
      </AnimatePresence>
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={navbarHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="flex fixed top-0 w-full bg-dark drop-shadow-lg shadow-lg shadow-black/500 text-white p-horizontal justify-center"
      >
        <div className="flex justify-between w-full max-w-[1440px] p-horizontal font-source items-center">
          <div className="flex gap-14 items-center text-body-regular">
            <button
              onClick={() => setShowOptionsNavbar(false)}
              className="text-heading2-bold z-20 py-5"
            >
              <Link href="/">FeelBetter</Link>
            </button>

            <div className="relative py-7 hidden lg:block">
              <div className="flex items-center hover:text-light-green gap-3 ">
                <Link href="/practicar">{t("navbar:practice")}</Link>
                <ChevronDownIcon className="h-5 w-5 mb-[-3px]" />
              </div>
              <div className="navbar-practice-submenu">
                <Link
                  href="/elegir-pensamiento"
                  className="hover:text-cta-green-hover"
                >
                  {t("navbar:challenge-a-negative-thought")}
                </Link>
                <Link
                  href="/meditaciones"
                  className="hover:text-cta-green-hover"
                >
                  {t("navbar:do-a-guided-meditation")}
                </Link>
              </div>
            </div>
            <Link
              href="/aprender"
              className="hidden lg:block hover:text-light-green"
            >
              {t("navbar:learn")}
            </Link>
            {name && (
              <Link
                href="/seguimiento"
                className="hidden lg:block hover:text-light-green"
              >
                {t("navbar:follow-up")}
              </Link>
            )}
          </div>
          <div className="flex font-source text-body-regular items-center">
            <Link href={name ? "/cuenta" : "/login"}>
              <button className="border-[1px] border-gray px-5 py-2 rounded-full hidden lg:block hover:bg-black">
                {name ? t("navbar:account") : t("navbar:login")}
              </button>
            </Link>
            <div className="ml-5">
              <LanguageChangerHorizontalNavbar />
            </div>
            <button onClick={handleShowOptionsNavbar} className="z-20">
              <Bars3BottomRightIcon className="h-8 w-8 text-white lg:hidden block" />
            </button>
            <LinksVerticalNavbar
              name={name}
              handleLogout={handleLogout}
              showOptionsNavbar={showOptionsNavbar}
              setShowOptionsNavbar={setShowOptionsNavbar}
              setShowOptionsPracticeMenu={setShowOptionsPracticeMenu}
              showOptionsPracticeMenu={showOptionsPracticeMenu}
            />
          </div>
        </div>
      </motion.nav>
    </>
  );
}

export default LinksHorizontalNavbar;

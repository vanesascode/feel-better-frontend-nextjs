"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bars3BottomRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import LinksVerticalNavbar from "./linksVerticalNavbar";
import { useTranslation } from "react-i18next";
import LanguageChangerHorizontalNavbar from "./languageChangerHorizontalNavbar";
import DarkBackgroundWhenVerticalNavbarOpen from "./darkBackgroundWhenVerticalNavbarOpen";

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

const LinksHorizontalNavbar = ({
  showOptionsNavbar,
  setShowOptionsNavbar,
  navbarHidden,
  darkBackground,
  name,
  setShowOptionsPracticeMenu,
  handleLogout,
  showOptionsPracticeMenu,
  handleShowOptionsNavbar,
}: NavbarLinksProps) => {
  const { t } = useTranslation();

  return (
    <>
      <DarkBackgroundWhenVerticalNavbarOpen
        showOptionsNavbar={showOptionsNavbar}
        setShowOptionsNavbar={setShowOptionsNavbar}
        darkBackground={darkBackground}
      />
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={navbarHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="flex fixed top-0 w-full bg-dark drop-shadow-lg shadow-lg shadow-black/500 text-white p-horizontal justify-center z-10"
      >
        <div className="flex justify-between w-full max-w-[90rem] items-center">
          <div className="flex gap-14 items-center text-body-regular">
            <button
              id="link-to-go-home"
              aria-label="Button to go home"
              onClick={() => setShowOptionsNavbar(false)}
              className="sm:text-heading2-bold text-heading3-bold z-20 py-5"
            >
              <Link href="/">FeelBetter</Link>
            </button>

            <div className="relative py-7 hidden lg:block">
              <div className="flex items-center hover:text-light-green gap-3 transition duration-300 ease-in-out cursor-pointer">
                <Link
                  href="/practice"
                  id="link-to-practice"
                  aria-label="Button to practice"
                >
                  {t("navbar:practice")}
                </Link>
                <ChevronDownIcon className="h-5 w-5" />
              </div>
              <div className="navbar-practice-submenu">
                <Link
                  id="link-to-practice-thoughts"
                  aria-label="Button to practice thoughts"
                  href="/choose-negative-thought"
                  className="hover:text-cta-green-hover transition duration-300 ease-in-out cursor-pointer"
                >
                  {t("navbar:challenge-a-negative-thought")}
                </Link>
                <Link
                  id="link-to-practice-meditation"
                  aria-label="Button to practice meditation"
                  href="/meditation"
                  className="hover:text-cta-green-hover transition duration-300 ease-in-out cursor-pointer"
                >
                  {t("navbar:do-a-guided-meditation")}
                </Link>
              </div>
            </div>
            <Link
              href="/learn"
              className="hidden lg:block hover:text-light-green transition duration-300 ease-in-out cursor-pointer"
              id="link-to-learn"
              aria-label="Button to learn about chronic pain"
            >
              {t("navbar:learn")}
            </Link>
            {name && (
              <Link
                id="link-to-go-to-follow-up"
                aria-label="Button to see your follow up"
                href="/follow-up"
                className="hidden lg:block hover:text-light-green transition duration-300 ease-in-out cursor-pointer"
              >
                {t("navbar:follow-up")}
              </Link>
            )}
          </div>
          <div className="flex text-body-regular items-center">
            <Link
              href={name ? "/account" : "/login"}
              id="link-to-login"
              aria-label="link to login or go to your account"
            >
              <button className="border-[1px] border-gray px-5 py-2 rounded-full hidden lg:block hover:bg-black transition duration-500 ease-in-out">
                {name ? t("navbar:account") : t("navbar:login")}
              </button>
            </Link>
            <div className="ml-5">
              <LanguageChangerHorizontalNavbar />
            </div>
            <button
              onClick={handleShowOptionsNavbar}
              className="z-20"
              id="button-to-open-vertical-navbar"
              aria-label="Button to open navbar"
            >
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
};

export default LinksHorizontalNavbar;

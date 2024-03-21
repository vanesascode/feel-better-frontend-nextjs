"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bars3BottomRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import NavbarVerticalLinks from "./navbarVerticalLinks";

interface NavbarLinksProps {
  showOptionsNavbar: boolean;
  setShowOptionsNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  navbarHidden: boolean;
  darkBackground: boolean;
  name: string | null;
  toggleOptionsPracticeMenu: () => void;
  chevronIconRotation: boolean;
  handleLogout: () => void;
  showOptionsPracticeMenu: boolean;
}

function NavbarLinks({
  showOptionsNavbar,
  setShowOptionsNavbar,
  navbarHidden,
  darkBackground,
  name,
  toggleOptionsPracticeMenu,
  chevronIconRotation,
  handleLogout,
  showOptionsPracticeMenu,
}: NavbarLinksProps) {
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
                <Link href="/practicar">Practicar</Link>
                <ChevronDownIcon className="h-5 w-5 mb-[-3px]" />
              </div>
              <div className="absolute-menu">
                <Link
                  href="/elegir-pensamiento"
                  className="hover:text-dark-green-1"
                >
                  Retar un pensamiento negativo
                </Link>
                <Link href="/meditaciones" className="hover:text-dark-green-1">
                  Hacer una meditación guiada
                </Link>
              </div>
            </div>

            <Link
              href="/aprender"
              className="hidden lg:block hover:text-light-green"
            >
              Aprender
            </Link>

            {name && (
              <Link
                href="/seguimiento"
                className="hidden lg:block hover:text-light-green"
              >
                Seguimiento
              </Link>
            )}
          </div>

          <div className="flex font-source text-body-regular">
            <Link href={name ? "/cuenta" : "/login"}>
              <button className="border-[1px] border-gray px-5 py-2 rounded-full hidden lg:block hover:bg-black">
                {name ? "Tu cuenta" : "Acceder"}
              </button>
            </Link>

            <button
              onClick={() => setShowOptionsNavbar(!showOptionsNavbar)}
              className="z-20"
            >
              <Bars3BottomRightIcon className="h-8 w-8 text-white lg:hidden block " />
            </button>

            <NavbarVerticalLinks
              name={name}
              handleLogout={handleLogout}
              showOptionsNavbar={showOptionsNavbar}
              toggleOptionsPracticeMenu={toggleOptionsPracticeMenu}
              chevronIconRotation={chevronIconRotation}
              showOptionsPracticeMenu={showOptionsPracticeMenu}
            />
          </div>
        </div>
      </motion.nav>
    </>
  );
}

export default NavbarLinks;

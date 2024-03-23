"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface NavbarLinksProps {
  showOptionsNavbar: boolean;
  name: string | null;
  toggleOptionsPracticeMenu: () => void;
  chevronIconRotation: boolean;
  handleLogout: () => void;
  showOptionsPracticeMenu: boolean;
  setShowOptionsNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavbarVerticalLinks({
  showOptionsNavbar,
  name,
  toggleOptionsPracticeMenu,
  chevronIconRotation,
  handleLogout,
  showOptionsPracticeMenu,
  setShowOptionsNavbar,
}: NavbarLinksProps) {
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
                  className="flex items-center hover:text-light-green gap-3 justify-between"
                  onClick={() => toggleOptionsPracticeMenu()}
                >
                  <Link href="/practicar" className="hover:text-light-green">
                    Practicar
                  </Link>
                  <ChevronDownIcon
                    className={`h-5 w-5 mb-[-3px] ${
                      chevronIconRotation &&
                      "rotate-180 transition-all duration-500"
                    }`}
                  />
                </button>

                {showOptionsPracticeMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white px-5 py-4 rounded-lg flex flex-col text-black gap-4"
                  >
                    <div onClick={() => setShowOptionsNavbar(false)}>
                      <Link
                        href="/elegir-pensamiento"
                        className="hover:text-dark-green-1"
                      >
                        Retar un pensamiento negativo
                      </Link>
                    </div>
                    <div onClick={() => setShowOptionsNavbar(false)}>
                      <Link
                        href="/meditaciones"
                        className="hover:text-dark-green-1"
                      >
                        Hacer una meditación guiada
                      </Link>
                    </div>
                  </motion.div>
                )}
                <div onClick={() => setShowOptionsNavbar(false)}>
                  <Link href="/aprender" className="hover:text-light-green">
                    Aprender
                  </Link>
                </div>

                {name && (
                  <Link href="/seguimiento" className="hover:text-light-green">
                    Seguimiento
                  </Link>
                )}
                <div onClick={() => setShowOptionsNavbar(false)}>
                  <Link
                    href={name ? "/cuenta" : "/login"}
                    className="hover:text-light-green"
                  >
                    {name ? "Tu cuenta" : "Acceder"}
                  </Link>
                </div>
                {name && (
                  <Link
                    href="/login"
                    onClick={handleLogout}
                    className="hover:text-light-green"
                  >
                    Cerrar sesión
                  </Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavbarVerticalLinks;

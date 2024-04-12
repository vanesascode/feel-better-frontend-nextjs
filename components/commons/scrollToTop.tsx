"use client";

import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { useShowScrollToTopArrow } from "@/hooks/useShowScrollToTopArrow";

const ScrollToTop = () => {
  const { showScrollToTopArrow } = useShowScrollToTopArrow();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <AnimatePresence>
        {showScrollToTopArrow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            exit={{ opacity: 0 }}
            className="fixed xxxxl:right-[10%] xxxxxl:right-[15%] md:bottom-10 md:right-10 bottom-5 right-5 "
          >
            <button
              className="text-white xs:p-3 p-2 rounded-full bg-dark scroll-to-top-shadow"
              onClick={scrollToTop}
            >
              <ArrowUpIcon className="xs:w-8 xs:h-8 w-6 h-6 text-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollToTop;

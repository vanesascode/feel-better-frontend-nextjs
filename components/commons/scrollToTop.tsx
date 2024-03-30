"use client";

import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [showScrollToTopArrow, setShowScrollToTopArrow] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowScrollToTopArrow = () => {
      const currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition > 900) {
        setShowScrollToTopArrow(true);
      } else {
        setShowScrollToTopArrow(false);
      }
    };
    window.addEventListener("scroll", handleShowScrollToTopArrow);
    return () => {
      window.removeEventListener("scroll", handleShowScrollToTopArrow);
    };
  });

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
              className="text-white p-3 rounded-full bg-dark scroll-to-top-shadow"
              onClick={scrollToTop}
            >
              <ArrowUpIcon className="w-8 h-8 text-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollToTop;

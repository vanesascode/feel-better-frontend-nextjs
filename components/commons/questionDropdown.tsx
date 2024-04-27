"use client";

import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuestionTitleBar from "./questionTitleBar";
import Image from "next/image";

interface QuestionDropdownProps {
  children: ReactNode;
  className?: string;
  copy?: string;
  image?: string;
}

const QuestionDropdown = ({
  children,
  className,
  copy,
  image,
}: QuestionDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <QuestionTitleBar
        className={className}
        rotateIcon={isOpen ? true : false}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className="flex gap-5 items-center">
          {image && (
            <div className="max-sm:w-[1.2rem] max-md:w-[1.5rem]">
              <Image
                src={image}
                alt="negative-thoughts-icon"
                width={27}
                height={27}
              />
            </div>
          )}
          {copy}
        </div>
      </QuestionTitleBar>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, overflow: "hidden" }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            exit={{ height: 0, opacity: 0, overflow: "hidden" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default QuestionDropdown;

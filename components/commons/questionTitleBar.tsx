import { ReactNode } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface QuestionTitleBarProps {
  children: ReactNode;
  rotateIcon?: boolean;
  onClick: () => void;
  className?: string;
}

const QuestionTitleBar = ({
  children,
  className,
  rotateIcon,
  onClick,
}: QuestionTitleBarProps) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
      <ChevronDownIcon
        className={`md:h-6 md:w-6 sm:h-5 sm:w-5 h-4 w-4 mb-[-0.1875rem] hover:scale-125 ${
          rotateIcon && "rotate-180 transition-all duration-500"
        }`}
      />
    </div>
  );
};

export default QuestionTitleBar;

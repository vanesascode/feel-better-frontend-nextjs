import { ReactNode } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface ContentTitleBarProps {
  children: ReactNode;
  green1?: boolean;
  green2?: boolean;
  green3?: boolean;
  rotateIcon?: boolean;
  onClick: () => void;
}

const ContentTitleBar = ({
  children,
  green1,
  green2,
  green3,
  rotateIcon,
  onClick,
}: ContentTitleBarProps) => {
  return (
    <div
      className={`text-white md:text-heading3-thin sm:text-body-thin text-base-thin flex justify-between items-center p-horizontal xxxl:px-28 xxxxl:px-36 xxxxxl:px-48 py-5 w-full ${
        green1
          ? "bg-dark-green-2"
          : green2
          ? "bg-dark-green-1"
          : green3 && "bg-cta-green"
      }
        }`}
      onClick={onClick}
    >
      {children}
      <ChevronDownIcon
        className={`md:h-6 md:w-6 sm:h-5 sm:w-5 h-4 w-4 mb-[-0.1875rem] hover:scale-125 ${
          rotateIcon && "rotate-180 transition-all duration-500"
        }`}
      />
    </div>
  );
};

export default ContentTitleBar;

import { ReactNode } from "react";

interface CtaButtonProps {
  children: ReactNode;
  disabled?: boolean;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  darkerShadow?: boolean;
  white?: boolean;
  red?: boolean;
  green?: boolean;
}

const CtaButton = ({
  children,
  disabled,
  type,
  onClick,
  darkerShadow,
  white,
  green,
  red,
}: CtaButtonProps) => {
  return (
    <button
      className={`py-2 rounded-full ${
        green && "bg-cta-green hover:bg-cta-green-hover text-white"
      }  ${white && "hover:bg-gray text-dark bg-white"} ${
        red && "bg-red-500 hover:bg-red-700 text-white"
      }  md:text-heading3-bold xs:text-body-bold text-base-bold md:w-[15.62rem] w-[11.87rem] shadow-md ${
        darkerShadow ? "shadow-black" : "shadow-shadow-green"
      }  transition duration-500 ease-in-out`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CtaButton;

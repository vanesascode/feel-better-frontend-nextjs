import { ReactNode } from "react";

interface CtaButtonProps {
  children: ReactNode;
  disabled?: boolean;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  darkerShadow?: boolean;
}

const CtaButton = ({
  children,
  disabled,
  type,
  onClick,
  darkerShadow,
}: CtaButtonProps) => {
  return (
    <button
      className={`py-2 rounded-full bg-cta-green md:text-heading3-bold text-body-bold md:w-[250px] w-[180px] hover:bg-cta-green-hover text-white shadow-md ${
        darkerShadow ? "shadow-black" : "shadow-shadow-green"
      }  transition duration-500 ease-in-out  `}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CtaButton;

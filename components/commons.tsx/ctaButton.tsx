import { ReactNode } from "react";

type CtaButtonProps = {
  children: ReactNode;
  disabled: boolean;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};

function CtaButton({ children, disabled, type, onClick }: CtaButtonProps) {
  return (
    <button
      className="py-2 rounded-full bg-cta-green text-heading3-bold w-[250px] hover:bg-cta-green-hover"
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default CtaButton;

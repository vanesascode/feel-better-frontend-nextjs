import { ReactNode } from "react";

interface SelectorButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const SelectorButton = ({ children, onClick }: SelectorButtonProps) => {
  return (
    <button onClick={onClick} className="login-register-input">
      {children}
    </button>
  );
};

export default SelectorButton;

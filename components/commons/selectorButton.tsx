import { ReactNode } from "react";

interface SelectorButtonProps {
  children: ReactNode;
  onClick: () => void;
  key?: number;
}

const SelectorButton = ({ children, onClick, key }: SelectorButtonProps) => {
  return (
    <button onClick={onClick} className="white-green-input" key={key}>
      {children}
    </button>
  );
};

export default SelectorButton;

import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="md:h-72 h-56 bg-dark flex justify-center items-center">
      <div className="pt-20 text-white">{children}</div>
    </div>
  );
};

export default Header;

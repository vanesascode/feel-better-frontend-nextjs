import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="md:h-72 h-56 bg-dark flex flex-col justify-center items-center pt-20 text-white">
      {children}
    </div>
  );
};

export default Header;

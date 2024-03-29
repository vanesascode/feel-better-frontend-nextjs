import { ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <div className=" h-60 bg-dark flex justify-center items-center">
      <div className="pt-20 font-source text-white">{children}</div>
    </div>
  );
};

export default Header;

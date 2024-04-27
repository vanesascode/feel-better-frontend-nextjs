import Link from "next/link";
import { ReactNode } from "react";

interface FooterLinkProps {
  children: ReactNode;
  href: string;
}

const FooterLink = ({ children, href }: FooterLinkProps) => {
  return (
    <Link
      href={href}
      className="flex lg:justify-end justify-center items-center "
    >
      <div className="cursor-pointer sm1:py-4 py-3 lg:w-[6.5rem] max-lg:flex justify-center items-center max-lg:text-center">
        <div>{children}</div>
      </div>
    </Link>
  );
};

export default FooterLink;

import { ReactNode } from "react";
import ScrollToTop from "./scrollToTop";

interface ContentFrameProps {
  children: ReactNode;
}

const ContentFrame = ({ children }: ContentFrameProps) => {
  return (
    <div className="bg-gray-gradient flex justify-center items-center px-10 pt-10 pb-20 relative">
      <ScrollToTop />
      <div className="bg-dark flex justify-center flex-col items-center p-10 w-full rounded-xl max-w-[1400px]">
        {children}
      </div>
    </div>
  );
};

export default ContentFrame;

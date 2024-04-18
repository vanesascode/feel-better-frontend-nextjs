import { ReactNode } from "react";
import ScrollToTop from "./scrollToTop";

interface ContentFrameProps {
  children: ReactNode;
}

const ContentFrame = ({ children }: ContentFrameProps) => {
  return (
    <div className="bg-gray-gradient flex justify-center items-center px-5 pt-5 sm1:px-10 sm1:pt-10 pb-20 relative">
      <ScrollToTop />
      <div className="bg-dark flex justify-center flex-col items-center p-5 sm1:p-10 w-full rounded-xl max-w-[87.5rem]">
        {children}
      </div>
    </div>
  );
};

export default ContentFrame;

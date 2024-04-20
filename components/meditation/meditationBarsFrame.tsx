import { ReactNode } from "react";

interface MeditationBarsFrameProps {
  children: ReactNode;
  title: string;
}
const MeditationBarsFrame = ({ children, title }: MeditationBarsFrameProps) => {
  return (
    <>
      <div className="bg-dark flex justify-center flex-col items-center md:pb-16 pb-14 md:pt-8 xs:pt-5 pt-3 px-30 w-full rounded-xl max-w-[87.5rem]">
        <h2 className="text-white md:text-heading3-bold xs:text-body-bold text-base-bold md:mb-5 mb-3">
          {title}
        </h2>
        {children}
      </div>
    </>
  );
};

export default MeditationBarsFrame;

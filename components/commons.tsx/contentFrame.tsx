import { ReactNode } from "react";

type ContentFrameProps = {
  children: ReactNode;
};

function ContentFrame({ children }: ContentFrameProps) {
  return (
    <div className="bg-gray-gradient flex justify-center items-center px-10 pt-10 pb-20">
      <div className="bg-dark flex justify-center items-center p-10 w-full rounded-lg max-w-[1400px]">
        {children}
      </div>
    </div>
  );
}

export default ContentFrame;

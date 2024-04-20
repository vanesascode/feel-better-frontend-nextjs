"use client";

import ScrollToTop from "../commons/scrollToTop";
import MeditationBars from "./meditationBars";

const GuidedMeditations = () => {
  return (
    <>
      <ScrollToTop />
      <div className="bg-gray-gradient flex flex-col justify-center items-center px-5 pt-5 sm1:px-10 sm1:pt-10 pb-20 relative gap-10">
        <MeditationBars />
      </div>
    </>
  );
};

export default GuidedMeditations;

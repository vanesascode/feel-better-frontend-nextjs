"use client";

import { useTranslation } from "react-i18next";
import LearnCover from "./learnCover";
import LearnIntro from "./learnIntro";
import QuestionDropdown from "../commons/questionDropdown";
import QuestionOneContent from "./questionOneContent";
import QuestionTwoContent from "./questionTwoContent";
import QuestionThreeContent from "./questionThreeContent";
import QuestionFourContent from "./questionFourContent";
import QuestionFiveContent from "./questionFiveContent";
import QuestionSixContent from "./questionSixContent";
import BibliographyBox from "./bibliographyBox";

const LearnContent = () => {
  const { t } = useTranslation();
  return (
    <>
      <LearnCover />
      <LearnIntro />
      <QuestionDropdown
        className="bg-dark-green-2 contentTitleBar"
        copy={t("question-1")}
      >
        <QuestionOneContent />
      </QuestionDropdown>
      <QuestionDropdown
        className="bg-dark-green-1 contentTitleBar"
        copy={t("question-2")}
      >
        <QuestionTwoContent />
      </QuestionDropdown>
      <QuestionDropdown
        className="bg-cta-green contentTitleBar"
        copy={t("question-3")}
      >
        <QuestionThreeContent />
      </QuestionDropdown>
      <QuestionDropdown
        className="bg-dark-green-2 contentTitleBar"
        copy={t("question-4")}
      >
        <QuestionFourContent />
      </QuestionDropdown>
      <QuestionDropdown
        className="bg-dark-green-1 contentTitleBar"
        copy={t("question-5")}
      >
        <QuestionFiveContent />
      </QuestionDropdown>
      <QuestionDropdown
        className="bg-cta-green contentTitleBar"
        copy={t("question-6")}
      >
        <QuestionSixContent />
      </QuestionDropdown>
      <BibliographyBox />
    </>
  );
};

export default LearnContent;

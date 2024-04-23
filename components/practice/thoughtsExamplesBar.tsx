import { thoughtsExamplesEnglish } from "@/constants/thoughtsExamplesEnglish";
import { thoughtsExamplesFrench } from "@/constants/thoughtsExamplesFrench";
import { thoughtsExamplesSpanish } from "@/constants/thoughtsExamplesSpanish";
import { useSetSelectedIndexInList } from "@/hooks/useSetSelectedIndexInList";
import { useTranslation } from "react-i18next";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface Thought {
  negativeThought: string;
  positiveThought: string;
}

const ThoughtsExamplesBar = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const thoughtsExamples =
    currentLocale === "es"
      ? thoughtsExamplesSpanish
      : currentLocale === "en"
      ? thoughtsExamplesEnglish
      : thoughtsExamplesFrench;

  const { currentIndex, handleNext, handlePrevious } =
    useSetSelectedIndexInList(thoughtsExamples);

  return (
    <div className="flex md:p-5 p-4 bg-dark-green-2 rounded-xl items-center justify-between">
      <div>
        <ChevronLeftIcon
          className="
       md:h-8 md:w-8 h-5 w-5 cursor-pointer"
          onClick={handlePrevious}
        />
      </div>

      {thoughtsExamples.map((thought: Thought, index: number) => (
        <div
          key={index}
          className={`${index === currentIndex ? "block" : "hidden"} px-5`}
        >
          <div className="md:text-body-bold text-base-bold text-white mb-5">
            {t("negative-thought")}:{" "}
            <span className="md:text-body-thin text-base-thin text-gray">
              {thought.negativeThought}
            </span>
          </div>
          <div className="md:text-body-bold text-base-bold text-cta-green">
            {t("positive-thought")}:{" "}
            <span className="md:text-body-thin text-base-thin text-gray">
              {thought.positiveThought}{" "}
            </span>
          </div>
        </div>
      ))}
      <div>
        <ChevronRightIcon
          className="
       md:h-8 md:w-8 h-5 w-5 cursor-pointer "
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default ThoughtsExamplesBar;

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";
import { useState } from "react";

interface FeelingSelectorToEditThoughtProps {
  setFeelingToBeEdited: React.Dispatch<React.SetStateAction<string>>;
  feelingToBeEdited: string;
}

const FeelingSelectorToEditThought = ({
  setFeelingToBeEdited,
  feelingToBeEdited,
}: FeelingSelectorToEditThoughtProps) => {
  const [showFeelingOptions, setShowFeelingOptions] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      {" "}
      <div className="flex md:flex-row flex-col gap-1 items-center mb-5">
        <label className="md:text-body-bold text-base-bold md:w-1/6 md:mb-0 mb-2 max-md:text-center">
          {t("feeling")}{" "}
        </label>

        <button
          onClick={(e) => {
            e.preventDefault();
            setShowFeelingOptions(!showFeelingOptions);
          }}
          className="white-green-input flex justify-center items-center gap-2"
        >
          {feelingToBeEdited} <ChevronDownIcon className="h-5 w-5 " />
        </button>
        {showFeelingOptions && (
          <>
            <button
              onClick={(e) => {
                e.preventDefault();
                setFeelingToBeEdited("😀");
                setShowFeelingOptions(false);
              }}
              className={`${
                feelingToBeEdited === "😀" ? "hidden" : ""
              } hover:text-cta-green-hover white-green-input`}
            >
              😀
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setFeelingToBeEdited("🙂");
                setShowFeelingOptions(false);
              }}
              className={`${
                feelingToBeEdited === "🙂" ? "hidden" : ""
              } hover:text-cta-green-hover white-green-input`}
            >
              🙂
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setFeelingToBeEdited("😐");
                setShowFeelingOptions(false);
              }}
              className={`${
                feelingToBeEdited === "😐" ? "hidden" : ""
              } hover:text-cta-green-hover white-green-input`}
            >
              😐
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setFeelingToBeEdited("🙁");
                setShowFeelingOptions(false);
              }}
              className={`${
                feelingToBeEdited === "🙁" ? "hidden" : ""
              } hover:text-cta-green-hover white-green-input`}
            >
              🙁
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default FeelingSelectorToEditThought;

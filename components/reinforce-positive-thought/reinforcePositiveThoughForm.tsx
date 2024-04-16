import SelectorButton from "../commons/selectorButton";
import CtaButton from "../commons/ctaButton";
import ThoughtChosen from "../commons/thoughtChosen";
import FeelingBetterPopupExplanation from "./feelingBetterPopupExplanation";
import FeelingTheSamePopupExplanation from "./feelingTheSamePopupExplanation";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@/redux/hooks";
import { selectThought } from "@/redux/features/thoughtSlice";

interface ReinforcePositiveThoughtFormProps {
  handleGoToNextStep: () => void;
  chooseFeelingFirstMessage: boolean;
  setFeelingSelected: React.Dispatch<React.SetStateAction<string>>;
  feelingSelected: string;
  setShowFeelingBetterPopupExplanation: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  showFeelingBetterPopupExplanation: boolean;
  setShowFeelingTheSamePopupExplanation: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  showFeelingTheSamePopupExplanation: boolean;
  saveThoughts: () => void;
  savingThoughtsError: boolean;
}

const ReinforcePositiveThoughtForm = ({
  handleGoToNextStep,
  chooseFeelingFirstMessage,
  setFeelingSelected,
  feelingSelected,
  setShowFeelingBetterPopupExplanation,
  showFeelingBetterPopupExplanation,
  setShowFeelingTheSamePopupExplanation,
  showFeelingTheSamePopupExplanation,
  saveThoughts,
  savingThoughtsError,
}: ReinforcePositiveThoughtFormProps) => {
  const { t } = useTranslation();
  const { positiveThought } = useAppSelector(selectThought);

  return (
    <section className="flex flex-col justify-center items-center w-full gap-2">
      <h2
        className={`md:text-heading3-bold text-body-bold text-center text-white ${
          feelingSelected ? "mb-3" : "mb-[-12px]"
        }`}
      >
        {t("how-you-feel")}
      </h2>
      <p className="mb-3 text-cover2-semibold">{feelingSelected}</p>
      <ThoughtChosen thought={positiveThought} />
      <div className="grid sm2:grid-cols-4 grid-cols-2 gap-5 mt-5 text-white">
        <SelectorButton onClick={() => setFeelingSelected("😃")}>
          <p>😃</p>
          <p className="md:text-body-thin text-base-thin">{t("much-better")}</p>
        </SelectorButton>
        <SelectorButton onClick={() => setFeelingSelected("🙂")}>
          <p>🙂</p>
          <p className="md:text-body-thin text-base-thin">{t("better")}</p>
        </SelectorButton>
        <SelectorButton onClick={() => setFeelingSelected("😐")}>
          <p>😐</p>
          <p className="md:text-body-thin text-base-thin">{t("dont-know")}</p>
        </SelectorButton>
        <SelectorButton onClick={() => setFeelingSelected("🙁")}>
          <p>🙁</p>
          <p className="md:text-body-thin text-base-thin">{t("same")}</p>
        </SelectorButton>
      </div>
      {chooseFeelingFirstMessage && (
        <p className="text-red-500 text-base-regular text-center mt-5">
          {t("choose-first")}
        </p>
      )}
      <div className="mt-10">
        <CtaButton
          darkerShadow
          type="button"
          onClick={handleGoToNextStep}
          green
        >
          {t("continue")}
        </CtaButton>
      </div>
      <FeelingBetterPopupExplanation
        showFeelingBetterPopupExplanation={showFeelingBetterPopupExplanation}
        setShowFeelingBetterPopupExplanation={
          setShowFeelingBetterPopupExplanation
        }
        saveThoughts={saveThoughts}
        savingThoughtsError={savingThoughtsError}
      />
      <FeelingTheSamePopupExplanation
        showFeelingTheSamePopupExplanation={showFeelingTheSamePopupExplanation}
        setShowFeelingTheSamePopupExplanation={
          setShowFeelingTheSamePopupExplanation
        }
        saveThoughts={saveThoughts}
        savingThoughtsError={savingThoughtsError}
      />
    </section>
  );
};

export default ReinforcePositiveThoughtForm;

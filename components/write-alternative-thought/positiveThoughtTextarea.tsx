import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useEffect } from "react";
import { MicrophoneIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

interface PositiveThoughtTextareaProps {
  selectedPositiveThought: string;
  setSelectedPositiveThought: React.Dispatch<React.SetStateAction<string>>;
}

const PositiveThoughtTextarea = ({
  selectedPositiveThought,
  setSelectedPositiveThought,
}: PositiveThoughtTextareaProps) => {
  const { t } = useTranslation();
  const { transcript, listening } = useSpeechRecognition();

  useEffect(() => {
    setSelectedPositiveThought(transcript);
  }, [transcript]);

  return (
    <div className="flex gap-2 px-5 py-3 rounded-lg bg-dark border-[1px] md:text-body-thin text-base-thin border-light-green focus:outline-none active:outline-none ">
      <textarea
        rows={5}
        value={selectedPositiveThought}
        onChange={(e) => {
          const positiveThought = e.target.value;
          if (positiveThought !== " ") {
            setSelectedPositiveThought(positiveThought);
          }
        }}
        className="bg-dark w-full focus:outline-none active:outline-none"
        placeholder={t("write-alternative-though")}
      />
      <MicrophoneIcon
        className={`self-end md:h-8 md:w-8 h-6 w-6 mr-[0.625rem] ${
          listening ? "text-cta-green" : "text-white "
        }`}
        onClick={() => SpeechRecognition.startListening()}
      />
    </div>
  );
};

export default PositiveThoughtTextarea;

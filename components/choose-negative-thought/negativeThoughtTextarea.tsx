import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useEffect } from "react";
import { MicrophoneIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

interface NegativeThoughtTextareaProps {
  selectedNegativeThought: string;
  setSelectedNegativeThought: React.Dispatch<React.SetStateAction<string>>;
}

const NegativeThoughtTextarea = ({
  selectedNegativeThought,
  setSelectedNegativeThought,
}: NegativeThoughtTextareaProps) => {
  const { t } = useTranslation();
  const { transcript, listening } = useSpeechRecognition();

  useEffect(() => {
    setSelectedNegativeThought(transcript);
  }, [transcript]);

  return (
    <div className="flex gap-2 textarea-input">
      <textarea
        rows={3}
        value={selectedNegativeThought}
        onChange={(e) => {
          const negativeThought = e.target.value;
          if (negativeThought !== " ") {
            setSelectedNegativeThought(negativeThought);
          }
        }}
        className="bg-dark w-full focus:outline-none active:outline-none"
        placeholder={t("write-here")}
      />
      <MicrophoneIcon
        className={`self-end md:h-8 md:w-8 h-6 w-6 mr-[-10px] ${
          listening ? "text-cta-green" : "text-white "
        }`}
        onClick={() => SpeechRecognition.startListening()}
      />
    </div>
  );
};

export default NegativeThoughtTextarea;

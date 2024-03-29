import React, { useState } from "react";
import { SpeakerWaveIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

const TextToSpeech = ({ textToSpeak }: { textToSpeak: string }) => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const [isSpeaking, setIsSpeaking] = useState(false);

  const startSpeech = () => {
    setIsSpeaking(true);
    const speech = new SpeechSynthesisUtterance(textToSpeak);
    speech.lang =
      currentLocale === "es"
        ? "es-ES"
        : currentLocale === "fr"
        ? "fr-FR"
        : "en-EN";
    window.speechSynthesis.speak(speech);
  };

  const stopSpeech = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const handleSpeech = () => {
    if (isSpeaking) {
      stopSpeech();
    } else {
      startSpeech();
    }
  };

  return (
    <SpeakerWaveIcon
      className="h-10 w-10 text-white mt-[-10px] pb-2"
      onClick={handleSpeech}
    >
      altavoz
    </SpeakerWaveIcon>
  );
};

export default TextToSpeech;

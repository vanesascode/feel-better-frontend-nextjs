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
    <div className="flex justify-end">
      <SpeakerWaveIcon
        className="md:h-10 md:w-10 xs:h-8 xs:w-8 h-7 w-7 text-white sm1:mt-[-0.625rem] pb-2 cursor-pointer"
        onClick={handleSpeech}
      />
    </div>
  );
};

export default TextToSpeech;

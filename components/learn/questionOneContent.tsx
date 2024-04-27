import ContentFrame from "../commons/contentFrame";
import TextToSpeech from "../commons/textToSpeech";
import { useTranslation } from "react-i18next";

const QuestionOneContent = () => {
  const { t } = useTranslation();
  return (
    <ContentFrame>
      <div className="text-white">
        <TextToSpeech
          textToSpeak={
            t("question-1") +
            t("question-1-explanation-1") +
            t("question-1-explanation-2")
          }
        />
        <section>
          <article>
            <p className="md:text-body-thin text-base-thin text-gray lg:mb-5 pt-5">
              {t("question-1-explanation-1")}
              <br />
              <br />
              {t("question-1-explanation-2")}
            </p>
          </article>
        </section>
      </div>
    </ContentFrame>
  );
};

export default QuestionOneContent;

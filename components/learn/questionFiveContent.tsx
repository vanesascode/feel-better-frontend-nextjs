import ContentFrame from "../commons/contentFrame";
import TextToSpeech from "../commons/textToSpeech";
import { useTranslation } from "react-i18next";
import ImageComponent from "../commons/imageComponent";

const QuestionFiveContent = () => {
  const { t } = useTranslation();
  return (
    <ContentFrame>
      <div className="text-white">
        <TextToSpeech
          textToSpeak={
            t("question-5") +
            t("question-5-explanation-1") +
            t("question-5-explanation-5") +
            t("question-5-explanation-3") +
            t("question-5-explanation-4") +
            t("question-5-explanation-5") +
            t("question-5-explanation-6")
          }
        />
        <section>
          <article>
            <p className="md:text-body-thin text-base-thin text-gray mb-5 ">
              {t("question-5-explanation-1")}
              <br />
              <br />
              {t("question-5-explanation-2")}
              <br />
              <br />
              {t("question-5-explanation-3")}
            </p>
            <div className="max-sm2:hidden block">
              <ImageComponent
                image="/learn/learn-explanation-4-narrow.jpg"
                alt="learn activity"
              />
            </div>
            <div className="max-sm2:block hidden">
              <ImageComponent
                image="/learn/learn-explanation-4.jpg"
                alt="learn activity"
              />
            </div>
            <p className="md:text-body-thin text-base-thin text-gray lg:mb-5 pt-5">
              {t("question-5-explanation-4")}
              <br />
              <br />
              {t("question-5-explanation-5")}
              <br />
              <br />
              {t("question-5-explanation-6")}
            </p>
          </article>
        </section>
      </div>
    </ContentFrame>
  );
};

export default QuestionFiveContent;

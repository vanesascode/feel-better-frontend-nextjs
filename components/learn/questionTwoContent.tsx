import ContentFrame from "../commons/contentFrame";
import TextToSpeech from "../commons/textToSpeech";
import { useTranslation } from "react-i18next";
import ImageComponent from "../commons/imageComponent";

const QuestionTwoContent = () => {
  const { t } = useTranslation();
  return (
    <ContentFrame>
      <div className="text-white">
        <TextToSpeech
          textToSpeak={
            t("question-2") +
            t("question-2-explanation-1") +
            t("question-2-explanation-2") +
            t("question-2-explanation-3") +
            t("question-2-explanation-4") +
            t("question-2-point-1") +
            t("question-2-point-1-explanation") +
            t("question-2-point-2") +
            t("question-2-point-2-explanation") +
            t("question-2-point-3") +
            t("question-2-point-3-explanation") +
            t("question-2-explanation-5")
          }
        />
        <section>
          <article>
            <p className="md:text-body-thin text-base-thin text-gray mb-5 ">
              {t("question-2-explanation-1")}
              <br />
              <br />
              {t("question-2-explanation-2")}
            </p>
            <div className="max-sm2:hidden block">
              <ImageComponent
                image="/learn/learn-explanation-1-narrow.jpg"
                alt="learn activity"
              />
            </div>
            <div className="max-sm2:block hidden">
              <ImageComponent
                image="/learn/learn-explanation-1.jpg"
                alt="learn activity"
              />
            </div>
            <p className="md:text-body-thin text-base-thin text-gray lg:mb-5 pt-5">
              {t("question-2-explanation-3")}
            </p>
            <br />
            <ul className="md:text-body-bold text-base-bold pb-5 text-white list-disc pl-4 lg:pl-10 flex flex-col gap-5">
              <li>
                {t("question-2-point-1")}
                <span className="md:text-body-thin text-base-thin text-gray">
                  {" "}
                  {t("question-2-point-1-explanation")}
                </span>
              </li>
              <li>
                {t("question-2-point-2")}
                <span className="md:text-body-thin text-base-thin text-gray">
                  {" "}
                  {t("question-2-point-2-explanation")}
                </span>
              </li>
              <li>
                {t("question-2-point-3")}
                <span className="md:text-body-thin text-base-thin text-gray">
                  {" "}
                  {t("question-2-point-3-explanation")}
                </span>
              </li>
            </ul>
            <p className="md:text-body-thin text-base-thin text-gray lg:mb-5">
              {t("question-2-explanation-5")}
            </p>
          </article>
        </section>
      </div>
    </ContentFrame>
  );
};

export default QuestionTwoContent;

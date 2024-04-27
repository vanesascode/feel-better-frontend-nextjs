import ContentFrame from "../commons/contentFrame";
import TextToSpeech from "../commons/textToSpeech";
import { useTranslation } from "react-i18next";
import ImageComponent from "../commons/imageComponent";

const QuestionFourContent = () => {
  const { t } = useTranslation();
  return (
    <ContentFrame>
      <div className="text-white">
        <TextToSpeech
          textToSpeak={
            t("question-4") +
            t("question-4-explanation-1") +
            t("question-4-explanation-2") +
            t("question-4-point-1") +
            t("question-4-point-1-explanation") +
            t("question-4-point-2") +
            t("question-4-point-2-explanation") +
            t("question-4-point-3") +
            t("question-4-point-3-explanation") +
            t("question-4-explanation-3")
          }
        />
        <section>
          <article>
            <p className="md:text-body-thin text-base-thin text-gray mb-5 ">
              {t("question-4-explanation-1")}
              <br />
              <br />
              {t("question-4-explanation-2")}
            </p>
            <div className="xl:flex-row flex-col flex justify-between items-center">
              <div className="xl:w-[35%] md:w-[48%] hidden xl:block xl:ml-16">
                <ImageComponent
                  image="/learn/learn-explanation-3.jpg"
                  alt="learn activity"
                />
              </div>
              <div className="xl:w-[48%] w-full">
                <div className="md:text-body-bold text-base-bold pb-5 text-white list-decimal flex flex-col gap-5">
                  <div className="xl:w-[35%] md:w-[48%] hidden max-sm2:block xl:mr-16">
                    <ImageComponent
                      image="/learn/learn-explanation-3.jpg"
                      alt="learn activity"
                    />
                  </div>
                  <div className="block xl:hidden max-sm2:hidden ">
                    <ImageComponent
                      image="/learn/learn-explanation-3-narrow.jpg"
                      alt="learn activity"
                    />
                  </div>
                  <ul className="md:text-body-bold text-base-bold text-white list-disc pl-4 lg:pl-10 flex flex-col gap-5">
                    <li>
                      {t("question-4-point-1")}
                      <span className="md:text-body-thin text-base-thin text-gray">
                        {" "}
                        {t("question-4-point-1-explanation")}
                      </span>
                    </li>
                    <li>
                      {t("question-4-point-2")}
                      <span className="md:text-body-thin text-base-thin text-gray">
                        {" "}
                        {t("question-4-point-2-explanation")}
                      </span>
                    </li>
                    <li>
                      {t("question-4-point-3")}
                      <span className="md:text-body-thin text-base-thin text-gray">
                        {" "}
                        {t("question-4-point-3-explanation")}
                      </span>
                    </li>
                  </ul>
                  <p className="md:text-body-thin text-base-thin text-gray">
                    {t("question-4-explanation-3")}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </ContentFrame>
  );
};

export default QuestionFourContent;

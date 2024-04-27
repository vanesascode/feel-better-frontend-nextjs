import ContentFrame from "../commons/contentFrame";
import TextToSpeech from "../commons/textToSpeech";
import { useTranslation } from "react-i18next";
import ImageComponent from "../commons/imageComponent";

const QuestionSixContent = () => {
  const { t } = useTranslation();
  return (
    <ContentFrame>
      <div className="text-white">
        <TextToSpeech
          textToSpeak={
            t("question-6") +
            t("question-6-explanation-1") +
            t("question-6-explanation-2") +
            t("question-6-explanation-3") +
            t("question-6-explanation-4") +
            t("question-6-explanation-5")
          }
        />
        <section>
          <article>
            <div className="xl:flex-row flex-col flex justify-between items-center">
              <div className="xl:w-[48%] w-full">
                <div className="md:text-body-bold text-base-bold pb-5 text-white list-decimal flex flex-col gap-5">
                  <p className="md:text-body-thin text-base-thin text-gray">
                    {t("question-6-explanation-1")}
                    <br />
                    <br />
                    {t("question-6-explanation-2")}
                  </p>
                  <div className="xl:w-[35%] md:w-[48%] hidden max-sm2:block xl:mr-16">
                    <ImageComponent
                      image="/learn/learn-explanation-5.jpg"
                      alt="learn activity"
                    />
                  </div>
                  <div className="block xl:hidden max-sm2:hidden ">
                    <ImageComponent
                      image="/learn/learn-explanation-5-narrow.jpg"
                      alt="learn activity"
                    />
                  </div>
                </div>
              </div>
              <div className="xl:w-[35%] md:w-[48%] hidden xl:block xl:mr-16 pb-5">
                <ImageComponent
                  image="/learn/learn-explanation-5.jpg"
                  alt="learn activity"
                />
              </div>
            </div>
          </article>
          <article>
            <p className="md:text-body-thin text-base-thin text-gray mb-5 ">
              {t("question-6-explanation-3")}
              <br />
              <br />
              {t("question-6-explanation-4")}
            </p>
            <div className="max-sm2:hidden block pb-5">
              <ImageComponent
                image="/learn/learn-explanation-6-narrow.jpg"
                alt="learn activity"
              />
            </div>
            <div className="max-sm2:block hidden pb-5">
              <ImageComponent
                image="/learn/learn-explanation-6.jpg"
                alt="learn activity"
              />
            </div>
            <p className="md:text-body-thin text-base-thin text-gray mb-5 ">
              {t("question-6-explanation-5")}
            </p>
          </article>
        </section>
      </div>
    </ContentFrame>
  );
};

export default QuestionSixContent;

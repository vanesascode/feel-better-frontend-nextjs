import ContentFrame from "../commons/contentFrame";
import TextToSpeech from "../commons/textToSpeech";
import { useTranslation } from "react-i18next";
import PracticeCta from "./practiceCta";
import ThoughtsExamplesBar from "./thoughtsExamplesBar";
import ImageComponent from "../commons/imageComponent";

const ChallengeNegativeThoughtContent = () => {
  const { t } = useTranslation();
  return (
    <ContentFrame>
      <div className="text-white">
        <TextToSpeech
          textToSpeak={
            t("steps-for-challenging-thoughts") +
            t("intro-steps") +
            t("step-1") +
            t("step-1-explanation") +
            t("step-2") +
            t("step-2-explanation") +
            t("step-3") +
            t("step-3-explanation") +
            t("step-4") +
            t("step-4-explanation") +
            t("identify-negative-thoughts") +
            t("identify-intro-1") +
            t("identify-intro-2") +
            t("identify-1") +
            t("identify-1-explanation") +
            t("identify-2") +
            t("identify-2-explanation") +
            t("identify-3") +
            t("identify-3-explanation") +
            t("identify-4") +
            t("identify-4-explanation") +
            t("identify-5") +
            t("identify-5-explanation") +
            t("important-regularity") +
            t("regularity-explanation-1") +
            t("regularity-explanation-1") +
            t("regularity-explanation-1") +
            t("regularity-explanation-1") +
            t("regularity-explanation-1") +
            t("regularity-explanation-1") +
            t("knowing-it-try")
          }
        />
        <section>
          <article>
            <h3 className="md:text-heading2-bold sm:text-heading3-bold text-body-bold mb-8 md:mb-16 sm:text-center">
              {t("steps-for-challenging-thoughts")}
            </h3>
            <div className="xl:flex-row flex-col flex justify-between lg:pb-10 items-center ">
              <div className="xl:w-[48%] w-full ">
                <p className="md:text-body-thin text-base-thin text-gray mb-5">
                  {t("intro-steps")}
                </p>
                <ol className="md:text-body-bold text-base-bold pb-5 text-white list-decimal pl-4 lg:pl-10 flex flex-col gap-5">
                  <li>
                    {t("step-1")}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {" "}
                      {t("step-1-explanation")}
                    </span>
                  </li>
                  <li>
                    {t("step-2")}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {" "}
                      {t("step-2-explanation")}
                    </span>
                  </li>
                  <li>
                    {t("step-3")}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {" "}
                      {t("step-3-explanation")}
                    </span>
                  </li>
                  <li>
                    {t("step-4")}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {" "}
                      {t("step-4-explanation")}
                    </span>
                  </li>
                </ol>
              </div>
              <div className="xl:w-[35%] md:w-[48%] hidden xl:block max-sm2:block xl:mr-16">
                <ImageComponent
                  image="/thoughts/challenge-thoughts-explanation-1.jpg"
                  alt="thoughts activity"
                />
              </div>
              <div className="block xl:hidden max-sm2:hidden ">
                <ImageComponent
                  image="/thoughts/challenge-thoughts-explanation-1-narrow.jpg"
                  alt="thoughts activity"
                />
              </div>
            </div>
          </article>
          <article>
            <br id="identify-negative-thoughts" />
            <h3 className="md:text-heading2-bold sm:text-heading3-bold text-body-bold mb-8 md:mb-16  sm:text-center">
              {t("identify-negative-thoughts")}
            </h3>
            <p className="md:text-body-thin text-base-thin text-gray lg:mb-5 ">
              {t("identify-intro-1")}
              <br />
              <br />
              {t("identify-intro-2")}
            </p>
            <div className="xl:flex-row flex-col flex justify-between items-center ">
              <div className="xl:w-[35%] md:w-[48%] hidden xl:block xl:ml-16">
                <ImageComponent
                  image="/thoughts/challenge-thoughts-explanation-2.jpg"
                  alt="thoughts activity"
                />
              </div>
              <div className="xl:w-[48%] w-full max-lg:mt-5">
                <ol className="md:text-body-bold text-base-bold pb-5 text-white list-decimal pl-4 lg:pl-10 flex flex-col gap-5">
                  <li>
                    {t("identify-1")}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {" "}
                      {t("identify-1-explanation")}
                    </span>
                  </li>
                  <li>
                    {t("identify-2")}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {" "}
                      {t("identify-2-explanation")}
                    </span>
                  </li>
                  <li>
                    {t("identify-3")}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {" "}
                      {t("identify-3-explanation")}
                    </span>
                  </li>
                  <li>
                    {t("identify-4")}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {" "}
                      {t("identify-4-explanation")}
                    </span>
                  </li>
                  <li>
                    {t("identify-5")}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {" "}
                      {t("identify-5-explanation")}
                    </span>
                  </li>
                </ol>
              </div>
              <div className="xl:w-[35%] md:w-[48%] hidden max-sm2:block xl:pl-16">
                <ImageComponent
                  image="/thoughts/challenge-thoughts-explanation-2.jpg"
                  alt="thoughts activity"
                />
              </div>
              <div className="block xl:hidden max-sm2:hidden">
                <ImageComponent
                  image="/thoughts/challenge-thoughts-explanation-2-narrow.jpg"
                  alt="thoughts activity"
                />
              </div>
            </div>
          </article>
          <br id="examples-negative-thoughts" />
          <h3 className="md:text-heading2-bold sm:text-heading3-bold text-body-bold mb-5 pl-4 lg:pl-10">
            {t("examples")}
          </h3>
          <ThoughtsExamplesBar />
          <article>
            <h3 className="md:text-heading2-bold sm:text-heading3-bold text-body-bold my-8 md:my-16 sm:text-center">
              {t("important-regularity")}
            </h3>
            <p className="md:text-body-thin text-base-thin text-gray mb-5 ">
              {t("regularity-explanation-1")}
              <br />
              <br />
              {t("regularity-explanation-2")}
              <br />
              <br />
              {t("regularity-explanation-3")}
            </p>
            <div className="max-sm2:hidden block">
              <ImageComponent
                image="/thoughts/challenge-thoughts-explanation-3-narrow.jpg"
                alt="thoughts activity"
              />
            </div>
            <div className="max-sm2:block hidden">
              <ImageComponent
                image="/thoughts/challenge-thoughts-explanation-3.jpg"
                alt="thoughts activity"
              />
            </div>
            <p className="md:text-body-thin text-base-thin text-gray lg:mb-5 pt-5">
              {t("regularity-explanation-4")}
              <br />
              <br />
              {t("regularity-explanation-5")}
              <br />
              <br />
              {t("regularity-explanation-6")}
            </p>
          </article>
          <article>
            <PracticeCta url="/choose-negative-thought" bold>
              {t("knowing-it-try")}
            </PracticeCta>
          </article>
        </section>
      </div>
    </ContentFrame>
  );
};

export default ChallengeNegativeThoughtContent;

import Image from "next/image";
import ContentFrame from "../commons/contentFrame";
import TextToSpeech from "../commons/textToSpeech";
import { useTranslation } from "react-i18next";
import PracticeCta from "./practiceCta";

const GuidedMeditationContent = () => {
  const { t } = useTranslation();
  return (
    <ContentFrame>
      <div className="text-white">
        <TextToSpeech
          textToSpeak={
            t("meditation-benefits") +
            t("meditation-benefits-1") +
            t("meditation-benefits-1-explanation") +
            t("meditation-benefits-2") +
            t("meditation-benefits-2-explanation") +
            t("meditation-benefits-3") +
            t("meditation-benefits-3-explanation") +
            t("meditation-benefits-4") +
            t("meditation-benefits-4-explanation") +
            t("meditation-benefits-5") +
            t("meditation-benefits-5-explanation") +
            t("meditation-benefits-6") +
            t("meditation-benefits-6-explanation") +
            t("meditation-benefits-7") +
            t("meditation-benefits-7-explanation") +
            t("meditation-benefits-8") +
            t("meditation-benefits-8-explanation") +
            t("knowing-it-try")
          }
        />
        <section>
          <h3 className="md:text-heading2-bold sm:text-heading3-bold text-body-bold  mb-8 md:mb-16 sm:text-center">
            {t("meditation-benefits")}
          </h3>
          <article>
            <div className="lg:flex-row flex-col flex justify-between lg:pb-10 items-center ">
              <div className="lg:w-[48%] w-full ">
                <ol className="md:text-body-bold text-base-bold pb-5 text-white list-decimal pl-4 lg:pl-10 flex flex-col gap-5">
                  <li>
                    {t("meditation-benefits-1")}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {" "}
                      {t("meditation-benefits-1-explanation")}
                    </span>
                  </li>
                  <li>
                    {t("meditation-benefits-2")}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {" "}
                      {t("meditation-benefits-2-explanation")}
                    </span>
                  </li>
                  <li>
                    {t("meditation-benefits-3")}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {" "}
                      {t("meditation-benefits-3-explanation")}
                    </span>
                  </li>
                  <li>
                    {t("meditation-benefits-4")}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {" "}
                      {t("meditation-benefits-4-explanation")}
                    </span>
                  </li>
                </ol>
              </div>
              <div className="xl:w-[35%] md:w-[48%] hidden lg:block max-sm2:block xl:mr-16">
                <Image
                  src="/meditation/meditation-explanation-1.jpg"
                  alt="meditation activity"
                  width={2000}
                  height={2000}
                  className="rounded-xl w-full object-cover "
                />
              </div>
              <div className="block lg:hidden max-sm2:hidden ">
                <Image
                  src="/meditation/meditation-explanation-1-narrow.jpg"
                  alt="meditation activity"
                  width={2000}
                  height={2000}
                  className="rounded-xl w-full object-cover "
                />
              </div>
            </div>
          </article>
          <article>
            <div className="lg:flex-row flex-col flex justify-between items-center lg:pb-10">
              <div className="xl:w-[35%] md:w-[48%] hidden lg:block xl:ml-16">
                <Image
                  src="/meditation/meditation-explanation-2.jpg"
                  alt="meditation activity"
                  width={2000}
                  height={2000}
                  className="rounded-xl w-full object-cover "
                />
              </div>
              <div className="lg:w-[48%] w-full max-lg:mt-5">
                <ol
                  className="md:text-body-bold text-base-bold pb-5 text-white list-decimal pl-4 lg:pl-10 flex flex-col gap-5"
                  start={5}
                >
                  <li>
                    {t("meditation-benefits-5")}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {" "}
                      {t("meditation-benefits-5-explanation")}
                    </span>
                  </li>
                  <li>
                    {t("meditation-benefits-6")}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {" "}
                      {t("meditation-benefits-6-explanation")}
                    </span>
                  </li>
                  <li>
                    {t("meditation-benefits-7")}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {" "}
                      {t("meditation-benefits-7-explanation")}
                    </span>
                  </li>
                  <li>
                    {t("meditation-benefits-8")}
                    <span className="md:text-body-thin text-base-thin text-gray">
                      {" "}
                      {t("meditation-benefits-8-explanation")}
                    </span>
                  </li>
                </ol>
              </div>
              <div className="xl:w-[35%] md:w-[48%] hidden max-sm2:block xl:pl-16">
                <Image
                  src="/meditation/meditation-explanation-2.jpg"
                  alt="meditation activity"
                  width={2000}
                  height={2000}
                  className="rounded-xl w-full object-cover "
                />
              </div>
              <div className="block lg:hidden max-sm2:hidden ">
                <Image
                  src="/meditation/meditation-explanation-2-narrow.jpg"
                  alt="meditation activity"
                  width={2000}
                  height={2000}
                  className="rounded-xl w-full object-cover "
                />
              </div>
            </div>
          </article>
          <article>
            <PracticeCta url="/meditation" bold>
              {t("knowing-it-try")}
            </PracticeCta>
          </article>
        </section>
      </div>
    </ContentFrame>
  );
};

export default GuidedMeditationContent;

import Image from "next/image";
import ContentFrame from "../commons/contentFrame";
import TextToSpeech from "../commons/textToSpeech";
import { useTranslation } from "react-i18next";
import PracticeCta from "./practiceCta";
import ThoughtsExamplesBar from "./thoughtsExamplesBar";

const ChallengeNegativeThoughtContent = () => {
  const { t } = useTranslation();
  return (
    <ContentFrame>
      <div className="text-white">
        <TextToSpeech
          textToSpeak={
            t("activity-one") +
            t("activity-one-explanation") +
            t("activity-two") +
            t("activity-two-explanation") +
            t("activity-three") +
            t("activity-three-explanation")
          }
        />
        <section>
          <article>
            <h3 className="md:text-heading2-bold sm:text-heading3-bold text-body-bold  mb-8 md:mb-16 sm:text-center">
              {t("steps-for-challenging-thoughts")}
            </h3>
            <div className="xl:flex-row flex-col flex justify-between lg:pb-10 items-center ">
              <div className="xl:w-[48%] w-full ">
                <p className="md:text-body-thin text-base-thin text-gray mb-5 pl-4 lg:pl-10">
                  El dolor crónico puede generar pensamientos negativos que
                  impactan significativamente en el bienestar emocional y la
                  calidad de vida. Para abordarlos de manera efectiva, te
                  proponemos un enfoque práctico basado en estos pasos:
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
                <Image
                  src="/thoughts/challenge-thoughts-explanation-1.jpg"
                  alt="thoughts activity"
                  width={2000}
                  height={2000}
                  className="rounded-xl w-full object-cover "
                />
              </div>
              <div className="block xl:hidden max-sm2:hidden ">
                <Image
                  src="/thoughts/challenge-thoughts-explanation-1-narrow.jpg"
                  alt="thoughts activity"
                  width={2000}
                  height={2000}
                  className="rounded-xl w-full object-cover "
                />
              </div>
            </div>
          </article>
          <article>
            <h3 className="md:text-heading2-bold sm:text-heading3-bold text-body-bold my-8 md:my-16 sm:text-center">
              {t("¿Cómo identificar pensamientos negativos?")}
            </h3>
            <p className="md:text-body-thin text-base-thin text-gray lg:mb-5 pl-4 lg:pl-10">
              Un pensamiento distorsionado es como una especie de trampa en la
              que tu mente puede caer. Es como si tu cerebro te engañara
              haciéndote creer cosas que no son del todo ciertas. Estos
              pensamientos pueden hacerte sentir mal emocionalmente y también
              influir en cómo percibes el dolor.
              <br />
              <br />
              Algunos tipos comunes de pensamientos distorsionados incluyen:
            </p>

            <div className="xl:flex-row flex-col flex justify-between items-center ">
              <div className="xl:w-[35%] md:w-[48%] hidden xl:block xl:ml-16">
                <Image
                  src="/thoughts/challenge-thoughts-explanation-2.jpg"
                  alt="thoughts activity"
                  width={2000}
                  height={2000}
                  className="rounded-xl w-full object-cover "
                />
              </div>
              <div className="xl:w-[48%] w-full max-lg:mt-5">
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
                  src="/thoughts/challenge-thoughts-explanation-2.jpg"
                  alt="thoughts activity"
                  width={2000}
                  height={2000}
                  className="rounded-xl w-full object-cover "
                />
              </div>
              <div className="block xl:hidden max-sm2:hidden">
                <Image
                  src="/thoughts/challenge-thoughts-explanation-2-narrow.jpg"
                  alt="thoughts activity"
                  width={2000}
                  height={2000}
                  className="rounded-xl w-full object-cover "
                />
              </div>
            </div>
          </article>

          <h3 className="md:text-heading2-bold sm:text-heading3-bold text-body-bold my-5 pl-4 lg:pl-10">
            Ejemplos:
          </h3>

          <ThoughtsExamplesBar />

          <article>
            <h3 className="md:text-heading2-bold sm:text-heading3-bold text-body-bold my-8 md:my-16 sm:text-center">
              ¿Porqué es importante practicar con regularidad?
            </h3>
            <p className="md:text-body-thin text-base-thin text-gray mb-5 ">
              El proceso de reestructuración cognitiva y debilitamiento de las
              conexiones neuronales asociadas al dolor lleva tiempo. Es
              importante tener en cuenta que estas conexiones neuronales se han
              fortalecido a lo largo del tiempo de forma inconsciente, desde la
              primera reacción desagradable al dolor, y con cada reacción hasta
              el día de hoy.
              <br />
              <br />
              No es culpa tuya, sino que esta es la manera en la que funciona el
              cerebro, aunque se puede cambiar.
              <br />
              <br />
              La práctica de nuevas formas de pensamiento y comportamiento puede
              cambiar el cerebro gracias a la neuroplasticidad. Estos cambios
              neuronales son fundamental para el aprendizaje, la memoria, la
              recuperación de funciones después de una lesión cerebral, así como
              para el proceso de reestructuración cognitiva en el manejo de
              condiciones como el dolor crónico.
            </p>
            <div className="max-sm2:hidden block">
              <Image
                src="/thoughts/challenge-thoughts-explanation-3-narrow.jpg"
                alt="thoughts activity"
                width={2000}
                height={2000}
                className="rounded-xl w-full object-cover "
              />
            </div>
            <div className="max-sm2:block hidden">
              <Image
                src="/thoughts/challenge-thoughts-explanation-3.jpg"
                alt="thoughts activity"
                width={2000}
                height={2000}
                className="rounded-xl w-full object-cover "
              />
            </div>
            <p className="md:text-body-thin text-base-thin text-gray lg:mb-5 pt-5">
              Al ser constante en la práctica y tratar de cambiar los
              pensamientos negativos en cuanto surjan, estás trabajando para
              debilitar las conexiones neuronales que envían la sensación de
              dolor al cerebro y crear nuevas conexiones que promuevan la
              confianza y el bienestar.
              <br />
              <br />
              Ten en cuenta que no solo el dolor refuerza las conexiones
              neuronales que queremos debilitar, sino también el miedo, ya que
              se crea un círculo vicioso en el que el miedo al dolor aumenta la
              sensibilidad al mismo, haciendo que lo percibamos con mayor
              intensidad.
              <br />
              <br />
              Por tanto, te animamos a encontrar esos pensamientos que no te
              ayudan y afrontarlos con valentía. Con perseverancia, lograrás
              coger confianza y fortalecer estas nuevas conexiones que te
              permitirán manejar mejor el dolor e incluso disminuir su
              percepción.
            </p>
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

export default ChallengeNegativeThoughtContent;

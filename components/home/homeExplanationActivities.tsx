"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import ContentFrame from "../commons/contentFrame";
import CtaButton from "../commons/ctaButton";
import TextToSpeech from "../commons/textToSpeech";

const HomeExplanationActivities = () => {
  const { t } = useTranslation();

  return (
    <section>
      <ContentFrame>
        <div className="text-white font-source">
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
          <article>
            <div className="md:flex-row flex-col flex justify-between pb-10 items-center">
              <div className="lg:w-[48%] w-full max-sm2:pb-10 ">
                <h4 className="md:text-heading2-bold text-heading3-bold">
                  {t("activity-one")}
                </h4>
                <p className="md:text-body-thin text-base-thin pb-10 pt-5">
                  {" "}
                  {t("activity-one-explanation")}
                </p>
                <Link href="/pensamientos-negativos">
                  <CtaButton type="button" darkerShadow>
                    {t("learn-more")}
                  </CtaButton>
                </Link>
              </div>
              <div className="lg:w-[48%] hidden lg:block max-sm2:block">
                <Image
                  src="/thoughts/thoughts-cover-background.jpg"
                  alt="activities"
                  width={1000}
                  height={1000}
                  className="rounded-xl w-full"
                />
              </div>
            </div>
          </article>
          <article>
            <div className="md:flex-row flex-col flex justify-between pb-10 items-center">
              <div className="lg:w-[48%] hidden lg:block ">
                <Image
                  src="/meditation/meditation-cover-background.jpg"
                  alt="activities"
                  width={1000}
                  height={1000}
                  className="rounded-xl w-full"
                />
              </div>
              <div className="lg:w-[48%] w-full max-sm2:pb-10 ">
                <h4 className="md:text-heading2-bold text-heading3-bold">
                  {t("activity-two")}
                </h4>
                <p className="md:text-body-thin text-base-thin pb-10 pt-5">
                  {" "}
                  {t("activity-two-explanation")}
                </p>
                <Link href="/meditacion">
                  <CtaButton type="button" darkerShadow>
                    {t("learn-more")}
                  </CtaButton>
                </Link>
              </div>
              <div className="lg:w-[48%] hidden  max-sm2:block">
                <Image
                  src="/meditation/meditation-cover-background.jpg"
                  alt="activities"
                  width={1000}
                  height={1000}
                  className="rounded-xl w-full"
                />
              </div>
            </div>
          </article>
          <article>
            <div className="md:flex-row flex-col flex justify-between pb-10 items-center">
              <div className="lg:w-[48%] w-full max-sm2:pb-10 ">
                <h4 className="md:text-heading2-bold text-heading3-bold">
                  {t("activity-three")}
                </h4>
                <p className="md:text-body-thin text-base-thin pb-10 pt-5">
                  {" "}
                  {t("activity-three-explanation")}
                </p>
                <Link href="/aprender">
                  <CtaButton type="button" darkerShadow>
                    {t("learn-more")}
                  </CtaButton>
                </Link>
              </div>
              <div className="lg:w-[48%] hidden lg:block max-sm2:block">
                <Image
                  src="/learn/learn-cover-background.jpg"
                  alt="activities"
                  width={1000}
                  height={1000}
                  className="rounded-xl w-full"
                />
              </div>
            </div>
          </article>
        </div>
      </ContentFrame>
    </section>
  );
};

export default HomeExplanationActivities;

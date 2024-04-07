"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import CtaButton from "../commons/ctaButton";
import TextToSpeech from "../commons/textToSpeech";
import ActivityImage from "./activityImage";

const HomeExplanationActivities = () => {
  const { t } = useTranslation();

  return (
    <section>
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
        <article>
          <div className="md:flex-row flex-col flex justify-between pb-10 items-center">
            <div className="lg:w-[48%] w-full max-sm2:pb-10 ">
              <h4 className="md:text-heading2-bold text-heading3-bold">
                {t("activity-one")}
              </h4>
              <p className="md:text-body-thin text-base-thin pb-10 pt-5 text-gray">
                {" "}
                {t("activity-one-explanation")}
              </p>
              <Link href="/pensamientos-negativos">
                <CtaButton type="button" darkerShadow green>
                  {t("learn-more")}
                </CtaButton>
              </Link>
            </div>
            <div className="lg:w-[48%] hidden lg:block max-sm2:block">
              <ActivityImage
                image="/thoughts/thoughts-cover-background.jpg"
                alt="thoughts activity"
              />
            </div>
          </div>
          <div className="block lg:hidden max-sm2:hidden pb-10">
            <ActivityImage
              image="/home/thoughts-cover-narrow.jpg"
              alt="thoughts activity"
            />
          </div>
        </article>
        <article>
          <div className="md:flex-row flex-col flex justify-between pb-10 items-center">
            <div className="lg:w-[48%] hidden lg:block">
              <ActivityImage
                image="/meditation/meditation-cover-background.jpg"
                alt="meditation activity"
              />
            </div>
            <div className="lg:w-[48%] w-full max-sm2:pb-10 ">
              <h4 className="md:text-heading2-bold text-heading3-bold">
                {t("activity-two")}
              </h4>
              <p className="md:text-body-thin text-base-thin pb-10 pt-5 text-gray">
                {" "}
                {t("activity-two-explanation")}
              </p>
              <Link href="/meditacion">
                <CtaButton type="button" darkerShadow green>
                  {t("learn-more")}
                </CtaButton>
              </Link>
            </div>
            <div className="lg:w-[48%] hidden max-sm2:block">
              <ActivityImage
                image="/meditation/meditation-cover-background.jpg"
                alt="meditation activity"
              />
            </div>
          </div>
          <div className="block lg:hidden max-sm2:hidden pb-10">
            <ActivityImage
              image="/home/meditation-cover-narrow.jpg"
              alt="meditation activity"
            />
          </div>
        </article>
        <article>
          <div className="md:flex-row flex-col flex justify-between pb-10 items-center">
            <div className="lg:w-[48%] w-full max-sm2:pb-10 ">
              <h4 className="md:text-heading2-bold text-heading3-bold">
                {t("activity-three")}
              </h4>
              <p className="md:text-body-thin text-base-thin pb-10 pt-5 text-gray">
                {" "}
                {t("activity-three-explanation")}
              </p>
              <Link href="/aprender">
                <CtaButton type="button" darkerShadow green>
                  {t("learn-more")}
                </CtaButton>
              </Link>
            </div>
            <div className="lg:w-[48%] hidden lg:block max-sm2:block">
              <ActivityImage
                image="/learn/learn-cover-background.jpg"
                alt="learn activity"
              />
            </div>
          </div>
          <div className="block lg:hidden max-sm2:hidden pb-10">
            <ActivityImage
              image="/home/learn-cover-narrow.jpg"
              alt="learn activity"
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default HomeExplanationActivities;

"use client";

import { useTranslation } from "react-i18next";
import ActivityCard from "./activityCard";

const HomeActivities = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-dark p-horizontal flex justify-center">
        <div className="max-w-[90rem]">
          <h3 className="md:text-heading2-bold text-heading3-bold text-white text-center md:pt-20 sm:pt-14 pt-10 md:pb-14 sm:pb-10 pb-8 p-horizontal">
            {t("activities-title")}
          </h3>
          <div className="flex sm2:flex-row flex-col justify-around sm2:items-start items-center md:pb-20 sm:pb-14 pb-10 gap-3">
            <ActivityCard
              link="/elegir-pensamiento"
              image="/home/head-icon.svg"
              alt="head icon"
              greenDark
            >
              {t("activity-one")}
            </ActivityCard>
            <ActivityCard
              link="/meditaciones"
              image="/home/loto-icon.svg"
              alt="meditation icon"
              greenMedium
            >
              {t("activity-two")}
            </ActivityCard>
            <ActivityCard
              link="/aprender"
              image="/home/learn-icon.svg"
              alt="learn icon"
              greenLight
            >
              {t("activity-two")}
            </ActivityCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeActivities;

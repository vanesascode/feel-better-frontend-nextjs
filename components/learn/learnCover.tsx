"use client";

import { useTranslation } from "react-i18next";

const LearnCover = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-dark sm:h-20 h-14"></div>
      <article
        className="bg-dark bg-cover bg-center xxl:h-[53.12rem] lg:h-[43.75rem] md:h-[37.5rem] sm:h-[31.25rem] xs:h-[29.37rem] h-[28.12rem] relative"
        style={{
          backgroundImage: "url('/learn/learn-cover-background.jpg')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="absolute xl1:text-cover1-semibold lg:text-cover2-semibold sm:text-cover3-semibold text-cover4-semibold text-white px-3 xxs:px-4 sm:px-6  md:pl-[28rem] md1:pl-[30rem] md2:pl-[36rem] lg:pl-[38rem] lg2:pl-[44rem] xl:pl-[42rem] xl1:pl-[48rem] xxl:pl-[58rem] xxxl:pl-[66rem] xxxxl:pl-[84rem] xxxxxl:pl-[120rem] top-[55%] sm:top-[50%] md:top-[15%] xl:top-[8%]">
          {t("learn")} <br />
          {t("about-chronic")} <br />
          {t("pain")}
          <br />
        </h1>
      </article>
    </>
  );
};

export default LearnCover;

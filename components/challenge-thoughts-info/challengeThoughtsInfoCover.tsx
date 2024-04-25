"use client";

import { useTranslation } from "react-i18next";

const ChallengeThoughtsInfoCover = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-dark sm:h-20 h-14"></div>
      <article
        className="bg-dark bg-cover bg-center pr-10 xxl:h-[53.12rem] lg:h-[43.75rem] md:h-[37.5rem] sm:h-[31.25rem] xs:h-[29.37rem] h-[28.12rem] relative"
        style={{
          backgroundImage: "url('/thoughts/thoughts-cover-background.jpg')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="absolute xl:text-cover1-semibold lg:text-cover2-semibold sm:text-cover3-semibold text-cover4-semibold text-white px-3 xxs:px-4 sm:px-6 md:px-10 lg:px-16 top-[57%] xs:top-[60%] sm:top-[55%] sm1:top-[55%] md:top-[70%] lg:top-[70%] xl:top-[60%] xxl:top-[70%] xxxl:top-[65%]">
          {t("challenge")} <br className="md:hidden" />
          {t("negative")} <br />
          {t("thought")}
          <br />
        </h1>
      </article>
    </>
  );
};

export default ChallengeThoughtsInfoCover;

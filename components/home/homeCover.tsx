"use client";

import { useAppSelector } from "@/redux/hooks";
import { selectAuth } from "@/redux/features/authSlice";
import { useTranslation } from "react-i18next";
import CtaButton from "../commons/ctaButton";

const HomeCover = () => {
  const { t } = useTranslation();
  const { name } = useAppSelector(selectAuth);

  return (
    <>
      <div className="bg-dark h-20"></div>
      <article
        className="bg-dark bg-cover bg-center pr-10 xxl:h-[850px] lg:h-[700px] md:h-[600px] sm:h-[500px] h-[450px] relative "
        style={{
          backgroundImage: "url('/home/home-cover-background.jpg')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-[13%] xs:top-[15%] sm:top-[18%] sm2:top-[20%] xxxl:left-[10%] xxxxl:left-[15%] xxxxxl:left-[20%]  md:top-[15%] lg:top-[20%] xl:top-[25%] xxl:top-[30%] ">
          <h1 className="md:text-cover1-semibold text-cover2-semibold capitalize text-white pl-[10%] lg:pl-[13%] ">
            {t("hello")}
            <br />
            {name}
          </h1>
          <h2 className="md:text-heading3-thin text-base-thin text-white pl-[10%] lg:pl-[13%] max-w-[60%] sm:max-w-[50%] lg:max-w-[55%] xxl:max-w-[60%] font-source">
            {t("welcome")}
          </h2>
          <div className="pl-[10%] lg:pl-[13%] mt-6">
            <CtaButton type="button">{t("start")}</CtaButton>
          </div>
        </div>
      </article>
    </>
  );
};

export default HomeCover;

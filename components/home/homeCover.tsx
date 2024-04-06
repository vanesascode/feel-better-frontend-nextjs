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
      <div className="bg-dark sm:h-20 h-14"></div>
      <article
        className={`bg-dark bg-cover bg-center pr-10 xxl:h-[850px] lg:h-[700px] md:h-[600px] sm:h-[500px] ${
          name ? "h-[480px]" : "xs:h-[470px] h-[450px] "
        }  relative`}
        style={{
          backgroundImage: "url('/home/home-cover-background.jpg')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className={`absolute ${
            name
              ? "top-[12%] xxs:top-[15%] sm:top-[20%] md:top-[15%] lg:top-[20%] xl:top-[25%] xxl:top-[30%]"
              : "top-[17%] xxs:top-[20%] sm:top-[26%] sm2:top-[30%] md:top-[32%] lg:top-[36%] xl:top-[38%] xxl:top-[42%]"
          }  xxxl:left-[10%] xxxxl:left-[15%] xxxxxl:left-[20%]`}
        >
          <h1 className="md:text-cover1-semibold xs:text-cover2-semibold text-cover3-semibold capitalize text-white pl-[10%] lg:pl-[13%] mb-2">
            {t("hello")}
            <br />
            {name && name?.length >= 17 && name?.length <= 20 && (
              <div
                style={{
                  whiteSpace: "nowrap",
                  fontSize: "clamp(16px, 5vw, 96px)",
                }}
              >
                {name}
              </div>
            )}
            {name && name?.length >= 15 && name?.length < 17 && (
              <div
                style={{
                  whiteSpace: "nowrap",
                  fontSize: "clamp(10px, 10vw, 96px)",
                }}
              >
                {name}
              </div>
            )}
            {name && name?.length >= 9 && name?.length < 15 && (
              <div
                style={{
                  whiteSpace: "nowrap",
                  fontSize: "clamp(10px, 10vw, 96px)",
                }}
              >
                {name}
              </div>
            )}
            {name && name?.length <= 8 && <div>{name}</div>}
          </h1>
          <h2 className="md:text-heading3-thin text-base-thin text-white pl-[10%] lg:pl-[13%] max-w-[50%] lg:max-w-[55%] xxl:max-w-[60%]">
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

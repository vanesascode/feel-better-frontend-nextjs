"use client";

import { useAppSelector } from "@/redux/hooks";
import { selectAuth } from "@/redux/features/authSlice";
import { useTranslation } from "react-i18next";
import CtaButton from "../commons/ctaButton";
import Link from "next/link";

const HomeCover = () => {
  const { t } = useTranslation();
  const { name } = useAppSelector(selectAuth);

  return (
    <>
      <div className="bg-dark sm:h-20 h-14"></div>
      <article
        className={`bg-dark bg-cover bg-center pr-10 xxl:h-[53.12rem] lg:h-[43.75rem] md:h-[37.5rem] sm:h-[31.25rem] ${
          name ? "h-[30rem]" : "xs:h-[29.37rem] h-[28.12rem] "
        }  relative`}
        style={{
          backgroundImage: "url('/home/home-cover-background.jpg')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className={`absolute ${
            name
              ? "top-[25%] xxs:top-[27%] md:top-[15%] lg:top-[20%] xl:top-[25%] xxl:top-[30%]"
              : "top-[25%] xxs:top-[30%]  sm:top-[35%] sm2:top-[30%] md:top-[32%] lg:top-[36%] xl:top-[38%] xxl:top-[42%]"
          }  xxxl:left-[10%] xxxxl:left-[15%] xxxxxl:left-[20%]`}
        >
          <h1 className="md:text-cover1-semibold xs:text-cover2-semibold text-cover3-semibold capitalize text-white pl-[5%] sm:pl-[10%] lg:pl-[13%] mb-2">
            {t("hello")}
            <br />
            {name && name?.length >= 17 && name?.length <= 20 && (
              <div
                style={{
                  whiteSpace: "nowrap",
                  fontSize: "clamp(1rem, 5vw, 6rem)",
                }}
              >
                {name}
              </div>
            )}
            {name && name?.length >= 15 && name?.length < 17 && (
              <div
                style={{
                  whiteSpace: "nowrap",
                  fontSize: "clamp(0.62rem, 10vw, 6rem)",
                }}
              >
                {name}
              </div>
            )}
            {name && name?.length >= 9 && name?.length < 15 && (
              <div
                style={{
                  whiteSpace: "nowrap",
                  fontSize: "clamp(0.62rem, 10vw, 6rem)",
                }}
              >
                {name}
              </div>
            )}
            {name && name?.length <= 8 && <div>{name}</div>}
          </h1>
          <h2 className="md:text-heading3-thin text-base-thin text-white pl-[5%] sm:pl-[10%] lg:pl-[13%] max-w-[70%] sm:max-w-[50%] xxl:max-w-[60%]">
            {t("welcome")}
          </h2>
          <div className="pl-[5%] sm:pl-[10%] lg:pl-[13%] mt-6">
            <Link href="#start">
              <CtaButton type="button" green>
                {t("start")}
              </CtaButton>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default HomeCover;

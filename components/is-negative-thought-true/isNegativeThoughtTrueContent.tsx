"use client";

import CtaButton from "../commons/ctaButton";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import BreathingBall from "./breathingBall";
import NegativeThoughtChosen from "./negativeThoughtChosen";

const IsNegativeThoughtTrueContent = () => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <section className="flex flex-col justify-center items-center w-full gap-2">
      <h2 className="md:text-heading3-thin text-body-thin text-center text-white mb-5">
        {t("relax")}{" "}
        <Link href="/cbt-info" target="_blank">
          <span className="md:text-heading3-bold text-body-bold hover:text-light-green cursor-pointer underline">
            {t("distorted-thought")}
          </span>
        </Link>
      </h2>
      <NegativeThoughtChosen />
      <BreathingBall />
      <CtaButton darkerShadow type="button" onClick={() => router.push("/")}>
        {t("continue")}
      </CtaButton>
      <p className="text-body-thin text-center text-gray pt-10 max-w-[1024px]">
        {t("take-your-time")}
      </p>
    </section>
  );
};

export default IsNegativeThoughtTrueContent;
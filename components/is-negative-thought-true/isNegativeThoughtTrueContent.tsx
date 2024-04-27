"use client";

import CtaButton from "../commons/ctaButton";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

import BreathingBall from "./breathingBall";
import { useAppSelector } from "@/redux/hooks";
import { selectThought } from "@/redux/features/thoughtSlice";
import ThoughtChosen from "../commons/thoughtChosen";
import Link from "next/link";

const IsNegativeThoughtTrueContent = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { negativeThought } = useAppSelector(selectThought);

  return (
    <section className="flex flex-col justify-center items-center w-full gap-2">
      <h2 className="md:text-heading3-thin text-body-thin text-center text-white mb-5">
        {t("relax")}{" "}
        <Link href="/challenge-thoughts-info#identify-negative-thoughts">
          <span className="md:text-heading3-bold text-body-bold hover:text-light-green cursor-pointer underline">
            {t("distorted-thought")}
          </span>
        </Link>
      </h2>
      <ThoughtChosen thought={negativeThought} />
      <BreathingBall />
      <p className="md:text-body-thin text-base-thin text-center text-gray mb-10 max-w-[64rem]">
        {t("take-your-time")}
      </p>
      <CtaButton
        darkerShadow
        type="button"
        onClick={() => router.push("/write-alternative-thought")}
        green
      >
        {t("continue")}
      </CtaButton>
    </section>
  );
};

export default IsNegativeThoughtTrueContent;

"use client";

import { useAppSelector } from "@/redux/hooks";
import { selectAuth } from "@/redux/features/authSlice";
import { useTranslation } from "react-i18next";

function HomeContent() {
  const { t } = useTranslation();
  const { name } = useAppSelector(selectAuth);

  return (
    <>
      <div className="bg-dark pt-96">
        <p className="text-heading2-bold text-white">
          {t("hello")} {name}
        </p>
      </div>
    </>
  );
}

export default HomeContent;

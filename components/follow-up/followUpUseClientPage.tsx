"use client";

import Link from "next/link";
import ContentFrame from "../commons/contentFrame";
import Header from "../commons/header";
import Navbar from "../navbar/navbar";
import { useGetThoughtsByUser } from "@/hooks/useGetThoughtsByUser";
import { useTranslation } from "react-i18next";
import LoadingCircle from "../commons/loadingCircle";
import { useShowLoadingCircle } from "@/hooks/useShowLoadingCircle";
import CalendarUi from "./calendarUi";

const FollowUpUseClientPage = () => {
  const { t } = useTranslation();
  const { showLoadingCircle } = useShowLoadingCircle();
  const { thoughts } = useGetThoughtsByUser();

  return (
    <>
      <header>
        <Navbar />
        <Header>
          <div className="px-3 text-center">
            <h1 className="md:text-heading2-bold text-heading3-bold xs:mb-6 mb-3">
              {t("follow-up-title")}
            </h1>
            {thoughts.length === 0 && !showLoadingCircle && (
              <Link
                href="/choose-negative-thought"
                className="sm:mb-0 mb-3 text-base-bold md:text-body-bold text-cta-green"
              >
                {t("no-thoughts-yet")}
              </Link>
            )}{" "}
            {thoughts.length > 0 && !showLoadingCircle && (
              <p className="sm:mb-0 mb-3 text-base-thin md:text-body-thin">
                {t("congrats")}{" "}
                <span className="text-cta-green font-bold">
                  {thoughts.length}{" "}
                  {thoughts.length === 1 ? t("time") : t("times")}
                </span>
              </p>
            )}
          </div>
        </Header>
      </header>
      {showLoadingCircle && <LoadingCircle />}
      {!showLoadingCircle && (
        <main>
          <ContentFrame>
            <CalendarUi />
          </ContentFrame>
        </main>
      )}
    </>
  );
};

export default FollowUpUseClientPage;

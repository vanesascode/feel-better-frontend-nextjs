"use client";

import Link from "next/link";
import ContentFrame from "../commons/contentFrame";
import Header from "../commons/header";
import Navbar from "../navbar/navbar";
import FollowUpContent from "./followUpContent";
import { useGetThoughtsByUser } from "@/hooks/useGetThoughtsByUser";
import { useTranslation } from "react-i18next";

const FollowUpUseClientPage = () => {
  const { thoughts } = useGetThoughtsByUser();
  const { t } = useTranslation();

  return (
    <>
      <header>
        <Navbar />
        <Header>
          <div className="px-3 text-center">
            <h1 className="md:text-heading2-bold text-heading3-bold  xs:mb-6 mb-3">
              {t("follow-up-title")}
            </h1>
            {thoughts.length === 0 ? (
              <Link
                href="/choose-negative-thought"
                className="sm:mb-0 mb-3 text-base-bold md:text-body-bold text-cta-green"
              >
                {t("no-thoughts-yet")}
              </Link>
            ) : (
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
      <main>
        <ContentFrame>
          <FollowUpContent />
        </ContentFrame>
      </main>
    </>
  );
};

export default FollowUpUseClientPage;

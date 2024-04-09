import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import NegativeThoughtSelectorLogic from "@/components/choose-negative-thought/negativeThoughtSelectorLogic";
import ContentFrame from "@/components/commons/contentFrame";
import Header from "@/components/commons/header";
import TokenMaintainer from "@/components/commons/tokenMaintainer";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";

const i18nNamespaces = ["choose-negative-thought", "navbar"];

export default async function ChooseNegativeThought({
  params,
}: {
  params: { locale: string };
}) {
  const { t, resources } = await initTranslations(
    params.locale,
    i18nNamespaces,
    null,
    null
  );

  return (
    <>
      <TokenMaintainer />
      <TranslationsProvider
        resources={resources}
        locale={params.locale}
        namespaces={i18nNamespaces}
      >
        <header>
          <Navbar />
          <Header>
            <h1 className="md:text-heading2-bold text-heading3-bold text-center px-3 mb-6">
              {t("choose-negative-thought")}
            </h1>

            <div className="max-w-[400px] sm:mb-0 mb-3">
              <Image
                src="/thoughts/thoughts-step-1.png"
                alt="step 1: choose a negative thought"
                className="w-full bg-cover px-12"
                width={1000}
                height={1000}
              />
            </div>
          </Header>
        </header>
        <main>
          <ContentFrame>
            <NegativeThoughtSelectorLogic />
          </ContentFrame>
        </main>
      </TranslationsProvider>
    </>
  );
}

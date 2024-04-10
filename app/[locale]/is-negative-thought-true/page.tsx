import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import ContentFrame from "@/components/commons/contentFrame";
import Header from "@/components/commons/header";
import ThoughtsMaintainer from "@/components/commons/thoughtsMaintainer";
import TokenMaintainer from "@/components/commons/tokenMaintainer";
import IsNegativeThoughtTrueContent from "@/components/is-negative-thought-true/isNegativeThoughtTrueContent";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";

const i18nNamespaces = ["is-negative-thought-true", "navbar"];

export default async function IsNegativeThoughtTrue({
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
      <ThoughtsMaintainer />
      <TranslationsProvider
        resources={resources}
        locale={params.locale}
        namespaces={i18nNamespaces}
      >
        <header>
          <Navbar />
          <Header>
            <h1 className="md:text-heading2-bold text-heading3-bold text-center px-3 mb-6">
              {t("is-thought-true")}
            </h1>
            <div className="max-w-[400px] sm:mb-0 mb-3">
              <Image
                src="/thoughts/thoughts-step-2.png"
                alt="step 2: think if that thought is true"
                className="w-full bg-cover px-12"
                width={1000}
                height={1000}
              />
            </div>
          </Header>
        </header>
        <main>
          <ContentFrame>
            <IsNegativeThoughtTrueContent />
          </ContentFrame>
        </main>
      </TranslationsProvider>
    </>
  );
}

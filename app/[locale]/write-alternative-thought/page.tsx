import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import ContentFrame from "@/components/commons/contentFrame";
import Header from "@/components/commons/header";
import ThoughtsMaintainer from "@/components/commons/thoughtsMaintainer";
import TokenMaintainer from "@/components/commons/tokenMaintainer";
import Navbar from "@/components/navbar/navbar";
import WriteAlternativeThoughtLogic from "@/components/write-alternative-thought/writeAlternativeThoughtLogic";
import Image from "next/image";

const i18nNamespaces = ["write-alternative-thought", "navbar"];

export default async function WriteAlternativeThought({
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
              {t("write-alternative-thought")}
            </h1>
            <div className="max-w-[400px] sm:mb-0 mb-3">
              <Image
                src="/thoughts/thoughts-step-3.png"
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
            <WriteAlternativeThoughtLogic />
          </ContentFrame>
        </main>
      </TranslationsProvider>
    </>
  );
}

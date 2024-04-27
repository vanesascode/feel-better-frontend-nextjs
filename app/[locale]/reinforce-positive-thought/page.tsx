import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import ContentFrame from "@/components/commons/contentFrame";
import Header from "@/components/commons/header";
import ThoughtsMaintainer from "@/components/commons/thoughtsMaintainer";
import TokenMaintainer from "@/components/commons/tokenMaintainer";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import ReinforcePositiveThoughtLogic from "@/components/reinforce-positive-thought/reinforcePositiveThoughtLogic";
import Image from "next/image";

const i18nNamespaces = ["reinforce-positive-thought", "navbar", "footer"];

export default async function ReinforcePositiveThought({
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
              {t("reinforce-positive-thought")}
            </h1>
            <div className="max-w-[25rem] sm:mb-0 mb-3">
              <Image
                src="/thoughts/thoughts-step-4.png"
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
            <ReinforcePositiveThoughtLogic />
          </ContentFrame>
        </main>
        <footer>
          <Footer />
        </footer>
      </TranslationsProvider>
    </>
  );
}

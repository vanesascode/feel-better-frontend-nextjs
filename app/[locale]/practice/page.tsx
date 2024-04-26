import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import Header from "@/components/commons/header";
import TokenMaintainer from "@/components/commons/tokenMaintainer";
import Navbar from "@/components/navbar/navbar";
import PracticeContent from "@/components/practice/practiceContent";

const i18nNamespaces = ["practice", "navbar"];

export default async function Practice({
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
            <h1 className="md:text-heading2-bold xs:text-heading3-bold text-body-bold text-center px-3">
              {t("2-activities")}
            </h1>
          </Header>
        </header>
        <main>
          <PracticeContent />
        </main>
      </TranslationsProvider>
    </>
  );
}

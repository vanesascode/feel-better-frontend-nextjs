import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import Header from "@/components/commons/header";
import TokenMaintainer from "@/components/commons/tokenMaintainer";
import GuidedMeditations from "@/components/meditation/guidedMeditations";
import Navbar from "@/components/navbar/navbar";

const i18nNamespaces = ["meditation", "navbar"];

export default async function Meditation({
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
            <h1 className="text-heading2-bold text-center px-3">
              {t("meditations")}
            </h1>
          </Header>
        </header>
        <main>
          <GuidedMeditations />
        </main>
      </TranslationsProvider>
    </>
  );
}

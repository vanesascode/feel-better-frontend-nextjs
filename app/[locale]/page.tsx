import Navbar from "@/components/navbar/navbar";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import TokenMaintainer from "@/components/commons/tokenMaintainer";
import HomeContent from "@/components/home/homeContent";

const i18nNamespaces = ["home", "navbar"];

export default async function Home({ params }: { params: { locale: string } }) {
  const { resources } = await initTranslations(
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
        <Navbar />
        <HomeContent />
      </TranslationsProvider>
    </>
  );
}

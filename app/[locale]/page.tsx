import Navbar from "@/components/navbar/navbar";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import TokenMaintainer from "@/components/commons/tokenMaintainer";
import HomeCover from "@/components/home/homeCover";
import HomeActivities from "@/components/home/homeActivities";
import HomeExplanationActivities from "@/components/home/homeExplanationActivities";
import ContentFrame from "@/components/commons/contentFrame";

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
        <header>
          <Navbar />
        </header>
        <main>
          <HomeCover />
          <HomeActivities />
          <ContentFrame>
            <HomeExplanationActivities />
          </ContentFrame>
        </main>
      </TranslationsProvider>
    </>
  );
}

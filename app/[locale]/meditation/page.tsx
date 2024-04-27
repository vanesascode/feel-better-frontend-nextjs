import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import Header from "@/components/commons/header";
import TokenMaintainer from "@/components/commons/tokenMaintainer";
import Footer from "@/components/footer/footer";
import AdviceToMeditateLink from "@/components/meditation/adviceToMeditateLink";
import GuidedMeditations from "@/components/meditation/guidedMeditations";
import Navbar from "@/components/navbar/navbar";

const i18nNamespaces = ["meditation", "navbar", "footer"];

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
            <div className="px-3 text-center">
              <h1 className="md:text-heading2-bold text-heading3-bold xs:mb-6 mb-3">
                {t("meditations")}
              </h1>
              <AdviceToMeditateLink />
            </div>
          </Header>
        </header>
        <main>
          <GuidedMeditations />
        </main>
        <footer>
          <Footer />
        </footer>
      </TranslationsProvider>
    </>
  );
}

import Navbar from "@/components/navbar/navbar";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import TokenMaintainer from "@/components/commons/tokenMaintainer";
import ContentFrame from "@/components/commons/contentFrame";
import FollowUpContent from "@/components/follow-up/followUpContent";
import Header from "@/components/commons/header";

const i18nNamespaces = ["home", "navbar"];

export default async function FollowUp({
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
              {t("is-thought-true")}
            </h1>
            <div className="max-w-[400px] sm:mb-0 mb-3">sdfsdf</div>
          </Header>
        </header>
        <main>
          <ContentFrame>
            <FollowUpContent />
          </ContentFrame>
        </main>
      </TranslationsProvider>
    </>
  );
}

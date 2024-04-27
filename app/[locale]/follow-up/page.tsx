import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import TokenMaintainer from "@/components/commons/tokenMaintainer";
import FollowUpUseClientPage from "@/components/follow-up/followUpUseClientPage";
import Footer from "@/components/footer/footer";

const i18nNamespaces = ["follow-up", "navbar", "footer"];

export default async function FollowUp({
  params,
}: {
  params: { locale: string };
}) {
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
        <FollowUpUseClientPage />
        <footer>
          <Footer />
        </footer>
      </TranslationsProvider>
    </>
  );
}

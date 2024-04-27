import Navbar from "@/components/navbar/navbar";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import TokenMaintainer from "@/components/commons/tokenMaintainer";
import ChallengeThoughtsInfoContent from "@/components/challenge-thoughts-info/challengeThoughtsInfoContent";
import Footer from "@/components/footer/footer";

const i18nNamespaces = ["practice", "navbar", "footer"];

export default async function ChallengeThoughtsInfo({
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
        <header>
          <Navbar />
        </header>
        <main>
          <ChallengeThoughtsInfoContent />
        </main>
        <footer>
          <Footer />
        </footer>
      </TranslationsProvider>
    </>
  );
}

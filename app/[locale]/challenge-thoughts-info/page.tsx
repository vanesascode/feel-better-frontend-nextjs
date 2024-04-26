import Navbar from "@/components/navbar/navbar";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import TokenMaintainer from "@/components/commons/tokenMaintainer";
import ChallengeThoughtsInfoContent from "@/components/challenge-thoughts-info/challengeThoughtsInfoContent";

const i18nNamespaces = ["practice", "navbar"];

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
          <ChallengeThoughtsInfoContent />
        </main>
      </TranslationsProvider>
    </>
  );
}
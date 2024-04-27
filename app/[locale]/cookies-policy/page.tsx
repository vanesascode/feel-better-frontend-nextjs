import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import ContentFrame from "@/components/commons/contentFrame";
import Header from "@/components/commons/header";
import TokenMaintainer from "@/components/commons/tokenMaintainer";
import CookiesPolicyText from "@/components/cookies-policy/cookiesPolicyText";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

const i18nNamespaces = ["cookies-policy", "navbar", "footer"];

export default async function CookiesPolicy({
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
              {t("cookies-policy")}
            </h1>
          </Header>
        </header>
        <main>
          <ContentFrame>
            <CookiesPolicyText />
          </ContentFrame>
        </main>
        <footer>
          <Footer />
        </footer>
      </TranslationsProvider>
    </>
  );
}

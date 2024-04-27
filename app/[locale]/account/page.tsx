import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import AccountLogic from "@/components/account/accountLogic";
import ContentFrame from "@/components/commons/contentFrame";
import Header from "@/components/commons/header";
import TokenMaintainer from "@/components/commons/tokenMaintainer";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

const i18nNamespaces = ["account", "navbar", "footer"];

export default async function Account({
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
              {t("your-account")}
            </h1>
          </Header>
        </header>
        <main>
          <ContentFrame>
            <AccountLogic />
          </ContentFrame>
        </main>
        <footer>
          <Footer />
        </footer>
      </TranslationsProvider>
    </>
  );
}

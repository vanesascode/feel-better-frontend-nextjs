import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import ContentFrame from "@/components/commons/contentFrame";
import Header from "@/components/commons/header";
import TokenMaintainer from "@/components/commons/tokenMaintainer";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import RecoveryLogic from "@/components/recovery/recoveryLogic";

const i18nNamespaces = ["recovery", "navbar", "footer"];

export default async function Recovery({
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
    <div>
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
              {t("forgot-password")}
            </h1>
          </Header>
        </header>
        <main>
          <ContentFrame>
            <RecoveryLogic />
          </ContentFrame>
        </main>
        <footer>
          <Footer />
        </footer>
      </TranslationsProvider>
    </div>
  );
}

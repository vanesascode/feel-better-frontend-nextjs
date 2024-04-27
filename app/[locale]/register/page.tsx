import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import ContentFrame from "@/components/commons/contentFrame";
import Header from "@/components/commons/header";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import RegisterLogic from "@/components/register/registerLogic";

const i18nNamespaces = ["register", "navbar", "footer"];

export default async function Register({
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
      <TranslationsProvider
        resources={resources}
        locale={params.locale}
        namespaces={i18nNamespaces}
      >
        <header>
          <Navbar />
          <Header>
            <h1 className="text-heading2-bold text-center px-3">
              {t("create-an-account")}
            </h1>
          </Header>
        </header>
        <main>
          <ContentFrame>
            <RegisterLogic />
          </ContentFrame>
        </main>
        <footer>
          <Footer />
        </footer>
      </TranslationsProvider>
    </>
  );
}

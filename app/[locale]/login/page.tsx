import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import ContentFrame from "@/components/commons/contentFrame";
import Header from "@/components/commons/header";
import LoginLogic from "@/components/login/loginLogic";
import Navbar from "@/components/navbar/navbar";

const i18nNamespaces = ["login", "navbar"];

export default async function Login({
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
              {t("access-to-your-account")}
            </h1>
          </Header>
        </header>
        <main>
          <ContentFrame>
            <LoginLogic />
          </ContentFrame>
        </main>
      </TranslationsProvider>
    </>
  );
}

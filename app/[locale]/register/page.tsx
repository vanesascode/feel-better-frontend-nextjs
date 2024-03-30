import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import ContentFrame from "@/components/commons/contentFrame";
import Header from "@/components/commons/header";
import Navbar from "@/components/navbar/navbar";
import RegisterLogic from "@/components/register/registerLogic";

const i18nNamespaces = ["register"];

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
        <Navbar />
        <Header>
          <h1 className="text-heading2-bold">{t("create-an-account")}</h1>
        </Header>
        <ContentFrame>
          <RegisterLogic />
        </ContentFrame>
      </TranslationsProvider>
    </>
  );
}

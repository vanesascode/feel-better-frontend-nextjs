import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import ContentFrame from "@/components/commons/contentFrame";
import Header from "@/components/commons/header";
import TokenMaintainer from "@/components/commons/tokenMaintainer";
import Navbar from "@/components/navbar/navbar";
import ResetPasswordLogic from "@/components/reset-password/resetPasswordLogic";

const i18nNamespaces = ["reset-password", "navbar"];

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
              {t("reset-password")}
            </h1>
          </Header>
        </header>
        <main>
          <ContentFrame>
            <ResetPasswordLogic />
          </ContentFrame>
        </main>
      </TranslationsProvider>
    </div>
  );
}

import { useTranslation } from "react-i18next";
import CtaButton from "../commons/ctaButton";

interface LogoutButtonProps {
  handleLogout: () => void;
}

const LogoutButton = ({ handleLogout }: LogoutButtonProps) => {
  const { t } = useTranslation();

  return (
    <article className="mt-16 account-boxes-shadow p-5 rounded-lg">
      <h2 className="text-heading3-bold text-center text-light-green mb-3">
        {t("logout-your-session")}
      </h2>
      <div className="flex justify-center">
        <CtaButton onClick={handleLogout} darkerShadow type="button" white>
          {t("logout")}
        </CtaButton>
      </div>
    </article>
  );
};

export default LogoutButton;

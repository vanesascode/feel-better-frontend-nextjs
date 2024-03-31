import { useTranslation } from "react-i18next";

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
        <button
          onClick={handleLogout}
          className="py-2 rounded-full bg-white md:text-heading3-bold text-body-bold md:w-[250px] w-[180px] hover:bg-gray text-dark shadow-md  shadow-black transition duration-500 ease-in-out"
        >
          {t("logout")}
        </button>
      </div>
    </article>
  );
};

export default LogoutButton;

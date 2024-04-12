import { useTranslation } from "react-i18next";
import { useState } from "react";
import DeleteAccountConfirmation from "./deleteAccountConfirmation";
import CtaButton from "../commons/ctaButton";

interface DeleteAccountButtonProps {
  handleDeleteAccount: () => void;
  serverErrorForDeletingAccount?: boolean;
  handleLogout: () => void;
}

const DeleteAccountButton = ({
  handleDeleteAccount,
  serverErrorForDeletingAccount,
  handleLogout,
}: DeleteAccountButtonProps) => {
  const [showDeleteAccountConfirmation, setShowDeleteAccountConfirmation] =
    useState<boolean>(false);
  const { t } = useTranslation();

  const handleLogoutAndDeleteAccount = () => {
    try {
      handleDeleteAccount();
      if (!serverErrorForDeletingAccount) {
        handleLogout();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <DeleteAccountConfirmation
        handleLogoutAndDeleteAccount={handleLogoutAndDeleteAccount}
        showDeleteAccountConfirmation={showDeleteAccountConfirmation}
        setShowDeleteAccountConfirmation={setShowDeleteAccountConfirmation}
      />
      <article className="text-center mt-16 account-boxes-shadow p-5 rounded-lg">
        <h2 className="text-heading3-bold text-light-green  ">
          {t("delete-your-account")}
        </h2>
        <p className="text-base-regular text-white">
          {t("your-data-will-be-deleted")}
        </p>
        {serverErrorForDeletingAccount && (
          <div className="flex justify-center text-center">
            <p className="text-red-500 text-base-regular">
              {t("sorry-server-error")}
            </p>
          </div>
        )}
        <div className="flex justify-center mt-5">
          <CtaButton
            onClick={() => setShowDeleteAccountConfirmation(true)}
            darkerShadow
            type="button"
            red
          >
            {t("delete")}
          </CtaButton>
        </div>
      </article>
    </>
  );
};

export default DeleteAccountButton;

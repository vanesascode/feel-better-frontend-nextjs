import { FormFields } from "@/components/register/registerLogic";
import { SubmitHandler, useForm } from "react-hook-form";
import CtaButton from "../commons/ctaButton";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@/redux/hooks";
import { selectAuth } from "@/redux/features/authSlice";
import LogoutButton from "./logoutButton";
import DeleteAccountButton from "./deleteAccountButton";

interface AccountFormProps {
  handleSubmitAccountChanges: SubmitHandler<FormFields>;
  existingUsersEmails: string[];
  handleLogout: () => void;
  serverErrorForModifyingAccount?: string;
  handleDeleteAccount: () => void;
  serverErrorForDeletingAccount?: string;
}

const AccountForm = ({
  handleSubmitAccountChanges,
  existingUsersEmails,
  handleLogout,
  serverErrorForModifyingAccount,
  handleDeleteAccount,
  serverErrorForDeletingAccount,
}: AccountFormProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRepeatedPassword, setShowRepeatedPassword] =
    useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const { name, email } = useAppSelector(selectAuth);
  const { t } = useTranslation();

  return (
    <section className="w-[250px] sm:w-[350px] xs:w-[300px]">
      <article>
        <h2 className="text-heading3-bold text-center text-light-green mb-5">
          {t("modify-account-details")}
        </h2>
        <form
          className="flex flex-col gap-2 text-body-regular text-white "
          onSubmit={handleSubmit(handleSubmitAccountChanges)}
        >
          <label>{t("name")}</label>
          <input
            {...register("name", {
              minLength: {
                value: 3,
                message: t("name-at-least-3-letter"),
              },
            })}
            type="text"
            placeholder={name ?? ""}
            className="login-register-input"
          />
          {errors.name && (
            <p className="text-red-500 text-base-regular">
              {errors.name.message}
            </p>
          )}
          <label className="mt-4">{t("Email")}</label>
          <input
            {...register("email", {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: t("invalid-email"),
              },
              validate: (fieldValue) => {
                if (existingUsersEmails.includes(fieldValue)) {
                  return t("email-already-exists");
                }
                return true;
              },
            })}
            type="text"
            placeholder={email ?? ""}
            className="login-register-input"
            onChange={(e) => (e.target.value = e.target.value.toLowerCase())}
          />
          {errors.email && (
            <p className="text-red-500 text-base-regular">
              {errors.email.message}
            </p>
          )}
          <label className="mt-4">{t("password")}</label>
          <div className="login-register-input flex justify-between items-center">
            <input
              {...register("password", {
                minLength: {
                  value: 8,
                  message: t("password-must-be-at-least-8-characters"),
                },
              })}
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="bg-dark outline-none w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeIcon className="h-6 w-6 text-white" />
              ) : (
                <EyeSlashIcon className="h-6 w-6 text-white" />
              )}
            </span>
          </div>
          {errors.password && (
            <p className="text-red-500 text-base-regular">
              {errors.password.message}
            </p>
          )}
          <label className="mt-4">{t("repeat-password")}</label>
          <div className="login-register-input flex justify-between items-center ">
            <input
              {...register("repeatPassword", {
                validate: (value) =>
                  value === password || t("passwords-dont-match"),
              })}
              type={showRepeatedPassword ? "text" : "password"}
              placeholder="password"
              className="bg-dark outline-none w-full"
            />
            <span
              className="cursor-pointer"
              onClick={() => setShowRepeatedPassword(!showRepeatedPassword)}
            >
              {showRepeatedPassword ? (
                <EyeIcon className="h-6 w-6 text-white" />
              ) : (
                <EyeSlashIcon className="h-6 w-6 text-white" />
              )}
            </span>
          </div>
          {errors.repeatPassword && (
            <p className="text-red-500 text-base-regular">
              {errors.repeatPassword.message}
            </p>
          )}
          {serverErrorForModifyingAccount && (
            <div className="flex justify-center text-center">
              <p className="text-red-500 text-base-regular">
                {t("sorry-server-error")}
              </p>
            </div>
          )}
          <div className="flex justify-center mt-8">
            <CtaButton disabled={isSubmitting} type="submit" darkerShadow green>
              {isSubmitting ? t("saving") : t("save")}
            </CtaButton>
          </div>
        </form>
      </article>
      <LogoutButton handleLogout={handleLogout} />
      <DeleteAccountButton
        handleDeleteAccount={handleDeleteAccount}
        serverErrorForDeletingAccount={serverErrorForDeletingAccount}
        handleLogout={handleLogout}
      />
    </section>
  );
};

export default AccountForm;

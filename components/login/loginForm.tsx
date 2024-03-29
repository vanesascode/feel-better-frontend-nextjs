import { FormFields } from "@/components/login/loginLogic";
import { SubmitHandler, useForm } from "react-hook-form";
import CtaButton from "../commons/ctaButton";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

interface LoginFormProps {
  handleSubmitLoginForm: SubmitHandler<FormFields>;
  isLoginError: boolean;
}

const LoginForm = ({ handleSubmitLoginForm, isLoginError }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();
  const { t } = useTranslation();

  return (
    <form
      className="flex flex-col gap-2 font-source
      text-body-regular text-white w-[350px]"
      onSubmit={handleSubmit(handleSubmitLoginForm)}
    >
      <label>{t("Email")}</label>
      <input
        {...register("email", {
          required: t("email-is-mandatory"),
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: t("invalid-email"),
          },
        })}
        type="text"
        placeholder="example@example.com"
        className="login-register-input"
      />
      {errors.email && (
        <p className="text-red-500 text-base-regular">{errors.email.message}</p>
      )}
      <label className="mt-4">{t("password")}</label>
      <div className="login-register-input flex justify-between items-center">
        <input
          {...register("password", {
            required: t("password-is-required"),
            minLength: {
              value: 8,
              message: t("password-must-be-at-least-8-characters"),
            },
          })}
          type={showPassword ? "text" : "password"}
          placeholder="password"
          className="bg-dark outline-none w-full"
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
      <p className="text-base-bold self-end mb-6">
        {t("did-you-forget-your-password")}
      </p>
      {isLoginError && (
        <div className="flex justify-center">
          <p className="text-red-500 text-base-regular">
            {t("email-or-password-are-incorrect")}
          </p>
        </div>
      )}
      <div className="flex justify-center">
        <CtaButton disabled={isSubmitting} type="submit">
          {isSubmitting ? t("loading") : t("continue")}
        </CtaButton>
      </div>
    </form>
  );
};

export default LoginForm;

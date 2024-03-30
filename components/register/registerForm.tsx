import { FormFields } from "@/components/register/registerLogic";
import { SubmitHandler, useForm } from "react-hook-form";
import CtaButton from "../commons/ctaButton";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import Link from "next/link";

interface RegisterFormProps {
  handleSubmitRegisterForm: SubmitHandler<FormFields>;
  isRegisterError: boolean;
  existingUsersEmails: string[];
}

const RegisterForm = ({
  handleSubmitRegisterForm,
  isRegisterError,
  existingUsersEmails,
}: RegisterFormProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRepeatedPassword, setShowRepeatedPassword] =
    useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const { t } = useTranslation();

  return (
    <>
      <form
        className="flex flex-col gap-2 font-source
      text-body-regular text-white w-[350px]"
        onSubmit={handleSubmit(handleSubmitRegisterForm)}
      >
        <label>{t("name")}</label>
        <input
          {...register("name", {
            required: t("name-is-mandatory"),
            minLength: {
              value: 3,
              message: t("name-at-least-3-letter"),
            },
          })}
          type="text"
          placeholder="example"
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
            required: t("email-is-mandatory"),
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
          placeholder="example@example.com"
          className="login-register-input"
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
              required: t("password-is-required"),
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
              required: t("password-is-required"),
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

        {isRegisterError && (
          <div className="flex justify-center text-center">
            <p className="text-red-500 text-base-regular">
              {t("sorry-server-error")}
            </p>
          </div>
        )}
        <div className="flex justify-center mt-8">
          <CtaButton disabled={isSubmitting} type="submit" darkerShadow>
            {isSubmitting ? t("loading") : t("continue")}
          </CtaButton>
        </div>
      </form>
      <div className="mt-5">
        <Link href="/login">
          <p className="text-base-bold self-end mb-6 text-white font-source cursor-pointer">
            {t("do-you-have-an-account")}{" "}
            <span className="text-cta-green">{t("access-here")}</span>
          </p>
        </Link>
      </div>
    </>
  );
};

export default RegisterForm;

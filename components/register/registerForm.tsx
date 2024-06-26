import { FormFields } from "@/components/register/registerLogic";
import { SubmitHandler, useForm } from "react-hook-form";
import CtaButton from "../commons/ctaButton";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import LoginGoogle from "../login/loginGoogle";

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
    <section>
      <form
        className="flex flex-col gap-2 text-body-regular text-white w-[15.6rem] sm:w-[23.1rem] xs:w-[18.75rem]"
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
          className="white-green-input"
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
              if (existingUsersEmails.length > 0) {
                if (existingUsersEmails.includes(fieldValue)) {
                  return t("email-already-exists");
                }
                return true;
              }
            },
          })}
          type="text"
          placeholder="example@example.com"
          className="white-green-input"
          onChange={(e) => (e.target.value = e.target.value.toLowerCase())}
        />
        {errors.email && (
          <p className="text-red-500 text-base-regular">
            {errors.email.message}
          </p>
        )}
        <label className="mt-4">{t("password")}</label>
        <div className="white-green-input flex justify-between items-center">
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
        <div className="white-green-input flex justify-between items-center ">
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
          <CtaButton disabled={isSubmitting} type="submit" darkerShadow green>
            {isSubmitting ? t("loading") : t("continue")}
          </CtaButton>
        </div>
      </form>
      <p className="text-base-bold self-end mb-6 text-white cursor-pointer text-center pt-5">
        {t("or-register-with")}
      </p>
      <div className="w-full justify-center flex">
        <LoginGoogle />
      </div>
      <div className="mt-10">
        <Link href="/login">
          <p className="text-base-bold self-end mb-6 text-white cursor-pointer text-center">
            {t("do-you-have-an-account")}{" "}
            <span className="text-light-green">{t("access-here")}</span>
          </p>
        </Link>
      </div>
    </section>
  );
};

export default RegisterForm;

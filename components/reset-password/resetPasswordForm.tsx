"use client";

import CtaButton from "../commons/ctaButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import ResetPasswordConfirmation from "./resetPasswordConfirmation";
import { FormFields } from "./resetPasswordLogic";

interface ResetPasswordFormProps {
  showPasswordResetConfirmation: boolean;
  handleOkAnswerFromUser: () => void;
  handleSubmitResetPasswordForm: SubmitHandler<FormFields>;
  existingUsersEmails: string[];
  resetingPasswordError: boolean;
}

const ResetPasswordForm = ({
  showPasswordResetConfirmation,
  handleOkAnswerFromUser,
  handleSubmitResetPasswordForm,
  existingUsersEmails,
  resetingPasswordError,
}: ResetPasswordFormProps) => {
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
    <section className="flex flex-col justify-center items-center">
      <form
        className="flex flex-col gap-2
    text-body-regular text-white w-[250px] sm:w-[350px] xs:w-[300px]"
        onSubmit={handleSubmit(handleSubmitResetPasswordForm)}
      >
        <label>{t("Email")}</label>
        <input
          {...register("email", {
            required: t("email-is-mandatory"),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t("invalid-email"),
            },
            validate: (fieldValue) => {
              if (existingUsersEmails.length > 0) {
                if (!existingUsersEmails.includes(fieldValue)) {
                  return t("email-not-registered");
                }
                return true;
              }
            },
          })}
          type="text"
          placeholder="example@example.com"
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
        {resetingPasswordError && (
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
      <ResetPasswordConfirmation
        showPasswordResetConfirmation={showPasswordResetConfirmation}
        handleOkAnswerFromUser={handleOkAnswerFromUser}
      />
    </section>
  );
};

export default ResetPasswordForm;

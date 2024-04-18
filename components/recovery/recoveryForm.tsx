"use client";

import CtaButton from "../commons/ctaButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import EmailSentForRecoveryConfirmation from "./emailSentForRecoveryConfirmation";
import { FormFields } from "./recoveryLogic";

interface RecoveryFormProps {
  existingUsersEmails: string[];
  handleSubmitRecoveryForm: SubmitHandler<FormFields>;
  sendingRecoveryEmailError: boolean;
  showRecoveryEmailSentConfirmation: boolean;
}

const RecoveryForm = ({
  existingUsersEmails,
  handleSubmitRecoveryForm,
  sendingRecoveryEmailError,
  showRecoveryEmailSentConfirmation,
}: RecoveryFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();
  const { t } = useTranslation();

  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="text-base-regular md:text-body-regular text-center text-white mb-8">
        {t("no-problem")}
      </h2>
      <form
        className="flex flex-col gap-2 text-body-regular text-white w-[15.6rem] sm:w-[23.1rem] xs:w-[18.75rem]"
        onSubmit={handleSubmit(handleSubmitRecoveryForm)}
      >
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
          className="white-green-input"
          onChange={(e) => (e.target.value = e.target.value.toLowerCase())}
        />
        {errors.email && (
          <p className="text-red-500 text-base-regular">
            {errors.email.message}
          </p>
        )}
        {sendingRecoveryEmailError && (
          <p className="text-red-500 text-base-regular">
            {t("sorry-server-error")}
          </p>
        )}
        <div className="flex justify-center mt-8">
          <CtaButton disabled={isSubmitting} type="submit" darkerShadow green>
            {isSubmitting ? t("loading") : t("continue")}
          </CtaButton>
        </div>
      </form>
      <EmailSentForRecoveryConfirmation
        showRecoveryEmailSentConfirmation={showRecoveryEmailSentConfirmation}
      />
    </section>
  );
};

export default RecoveryForm;

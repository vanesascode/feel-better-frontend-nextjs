"use client";

import CtaButton from "../commons/ctaButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { postRecoveryEmail } from "@/api/emails/emails";
import { fetchExistingUsersEmails } from "@/api/users/users";
import { useEffect, useState } from "react";

export interface FormFields {
  email: string;
}

const RecoveryForm = () => {
  const [existingUsersEmails, setExistingUsersEmails] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();
  const { t } = useTranslation();

  useEffect(() => {
    const getExistingUsersEmails = async () => {
      const emails = await fetchExistingUsersEmails();
      setExistingUsersEmails(emails);
    };
    getExistingUsersEmails();
  }, []);

  const handleSubmitLoginForm: SubmitHandler<FormFields> = async (data) => {
    await postRecoveryEmail(data.email);
    console.log(data);
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="text-base-regular md:text-body-regular text-center text-white mb-8">
        {t("no-problem")}
      </h2>
      <form
        className="flex flex-col gap-2 font-source
    text-body-regular text-white w-[250px] sm:w-[350px] xs:w-[300px]"
        onSubmit={handleSubmit(handleSubmitLoginForm)}
      >
        <input
          {...register("email", {
            required: t("email-is-mandatory"),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t("invalid-email"),
            },
            validate: (fieldValue) => {
              if (!existingUsersEmails.includes(fieldValue)) {
                return t("email-not-registered");
              }
              return true;
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
        <div className="flex justify-center mt-8">
          <CtaButton disabled={isSubmitting} type="submit" darkerShadow>
            {isSubmitting ? t("loading") : t("continue")}
          </CtaButton>
        </div>
      </form>
    </section>
  );
};

export default RecoveryForm;

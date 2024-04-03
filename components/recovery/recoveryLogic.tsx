"use client";

import { SubmitHandler } from "react-hook-form";
import { postRecoveryEmail } from "@/api/emails/emails";
import { fetchExistingUsersEmails } from "@/api/users/users";
import { useEffect, useState } from "react";
import RecoveryForm from "./recoveryForm";

export interface FormFields {
  email: string;
}

const RecoveryLogic = () => {
  const [existingUsersEmails, setExistingUsersEmails] = useState<string[]>([]);
  const [
    showRecoveryEmailSentConfirmation,
    setShowRecoveryEmailSentConfirmation,
  ] = useState<boolean>(false);
  const [sendingRecoveryEmailError, setSendingRecoveryEmailError] =
    useState<boolean>(false);

  useEffect(() => {
    const getExistingUsersEmails = async () => {
      const emails = await fetchExistingUsersEmails();
      setExistingUsersEmails(emails);
    };
    getExistingUsersEmails();
  }, []);

  const handleSubmitRecoveryForm: SubmitHandler<FormFields> = async (data) => {
    try {
      await postRecoveryEmail(data.email);
      setShowRecoveryEmailSentConfirmation(true);
      setSendingRecoveryEmailError(false);
    } catch (error) {
      setSendingRecoveryEmailError(true);
    }
  };
  return (
    <RecoveryForm
      existingUsersEmails={existingUsersEmails}
      handleSubmitRecoveryForm={handleSubmitRecoveryForm}
      sendingRecoveryEmailError={sendingRecoveryEmailError}
      showRecoveryEmailSentConfirmation={showRecoveryEmailSentConfirmation}
    />
  );
};

export default RecoveryLogic;

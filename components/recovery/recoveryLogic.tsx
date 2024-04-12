"use client";

import { SubmitHandler } from "react-hook-form";
import { postRecoveryEmail } from "@/api/emails/emails";
import { useState } from "react";
import RecoveryForm from "./recoveryForm";
import { useExistingUsersEmails } from "@/hooks/useExistingUsersEmails";

export interface FormFields {
  email: string;
}

const RecoveryLogic = () => {
  const [
    showRecoveryEmailSentConfirmation,
    setShowRecoveryEmailSentConfirmation,
  ] = useState<boolean>(false);
  const [sendingRecoveryEmailError, setSendingRecoveryEmailError] =
    useState<boolean>(false);
  const { existingUsersEmails } = useExistingUsersEmails();

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

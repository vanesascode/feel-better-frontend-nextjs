"use client";

import { SubmitHandler } from "react-hook-form";
import { resetPassword } from "@/api/users/users";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/authSlice";
import ResetPasswordForm from "./resetPasswordForm";
import { useExistingUsersEmails } from "@/hooks/useExistingUsersEmails";

export interface FormFields {
  email: string;
  password: string;
  repeatPassword: string;
}

const ResetPasswordLogic = () => {
  const [resetingPasswordError, setResetingPasswordError] =
    useState<boolean>(false);
  const [showPasswordResetConfirmation, setShowPasswordResetConfirmation] =
    useState<boolean>(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { existingUsersEmails } = useExistingUsersEmails();

  const handleSubmitResetPasswordForm: SubmitHandler<FormFields> = async (
    data
  ) => {
    try {
      await resetPassword(data);
      setResetingPasswordError(false);
      setShowPasswordResetConfirmation(true);
    } catch (error) {
      setResetingPasswordError(true);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  const handleOkAnswerFromUser = () => {
    setShowPasswordResetConfirmation(false);
    handleLogout();
  };

  return (
    <ResetPasswordForm
      handleSubmitResetPasswordForm={handleSubmitResetPasswordForm}
      handleOkAnswerFromUser={handleOkAnswerFromUser}
      showPasswordResetConfirmation={showPasswordResetConfirmation}
      existingUsersEmails={existingUsersEmails}
      resetingPasswordError={resetingPasswordError}
    />
  );
};

export default ResetPasswordLogic;

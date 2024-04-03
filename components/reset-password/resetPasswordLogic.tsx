"use client";

import { SubmitHandler } from "react-hook-form";
import { resetPassword } from "@/api/users/users";
import { fetchExistingUsersEmails } from "@/api/users/users";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/authSlice";
import ResetPasswordForm from "./resetPasswordForm";

export interface FormFields {
  email: string;
  password: string;
  repeatPassword: string;
}

const ResetPasswordLogic = () => {
  const [existingUsersEmails, setExistingUsersEmails] = useState<string[]>([]);
  const [resetingPasswordError, setResetingPasswordError] =
    useState<boolean>(false);
  const [showPasswordResetConfirmation, setShowPasswordResetConfirmation] =
    useState<boolean>(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getExistingUsersEmails = async () => {
      const emails = await fetchExistingUsersEmails();
      setExistingUsersEmails(emails);
    };
    getExistingUsersEmails();
  }, []);

  const handleSubmitResetPasswordForm: SubmitHandler<FormFields> = async (
    data
  ) => {
    try {
      await resetPassword(data);
      setResetingPasswordError(false);
      setShowPasswordResetConfirmation(true);
    } catch (error) {
      console.log(error);
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

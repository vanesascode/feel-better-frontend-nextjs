"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { SubmitHandler } from "react-hook-form";
import AccountForm from "./accountForm";
import { useAppSelector } from "@/redux/hooks";
import { selectAuth } from "@/redux/features/authSlice";
import { logout } from "@/redux/features/authSlice";
import {
  deleteCurrentUserAccount,
  editCurrentUserAccountDetails,
  fetchExistingUsersEmails,
} from "@/api/users/users";

export interface FormFields {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const AccountLogic = () => {
  const [existingUsersEmails, setExistingUsersEmails] = useState<string[]>([]);
  const [serverErrorForModifyingAccount, setServerErrorForModifyingAccount] =
    useState<boolean>(false);
  const [serverErrorForDeletingAccount, setServerErrorForDeletingAccount] =
    useState<boolean>(false);
  const [
    showConfirmationAccountDetailsSavedCorrectly,
    setShowConfirmationAccountDetailsSavedCorrectly,
  ] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { _id } = useAppSelector(selectAuth);

  const handleSubmitAccountChanges: SubmitHandler<FormFields> = async (
    data
  ) => {
    try {
      const filteredData = {
        ...Object.fromEntries(
          Object.entries(data).filter(([key, value]) => value !== "")
        ),
        _id: _id,
      };
      await editCurrentUserAccountDetails(filteredData);
      setShowConfirmationAccountDetailsSavedCorrectly(true);
    } catch (error) {
      setServerErrorForModifyingAccount(true);
    }
  };

  useEffect(() => {
    const getExistingUsersEmails = async () => {
      const emails = await fetchExistingUsersEmails();
      setExistingUsersEmails(emails);
    };

    getExistingUsersEmails();
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  const handleDeleteAccount = async () => {
    try {
      await deleteCurrentUserAccount(_id);
      handleLogout();
    } catch (error) {
      console.error("Error:", error);
      setServerErrorForDeletingAccount(true);
    }
  };

  return (
    <>
      <AccountForm
        handleSubmitAccountChanges={handleSubmitAccountChanges}
        existingUsersEmails={existingUsersEmails}
        handleLogout={handleLogout}
        serverErrorForModifyingAccount={serverErrorForModifyingAccount}
        handleDeleteAccount={handleDeleteAccount}
        serverErrorForDeletingAccount={serverErrorForDeletingAccount}
        showConfirmationAccountDetailsSavedCorrectly={
          showConfirmationAccountDetailsSavedCorrectly
        }
        setShowConfirmationAccountDetailsSavedCorrectly={
          setShowConfirmationAccountDetailsSavedCorrectly
        }
      />
    </>
  );
};

export default AccountLogic;

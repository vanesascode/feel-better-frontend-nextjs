"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { SubmitHandler } from "react-hook-form";
import AccountForm from "./accountForm";
import { useAppSelector } from "@/redux/hooks";
import { selectAuth } from "@/redux/features/authSlice";
import { logout } from "@/redux/features/authSlice";
import EditedAccountDetailsConfirmation from "./editedAccountDetailsConfirmation";

export interface FormFields {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const AccountLogic = () => {
  const [existingUsersEmails, setExistingUsersEmails] = useState<string[]>([]);
  const [serverErrorForModifyingAccount, setServerErrorForModifyingAccount] =
    useState<string>("");
  const [serverErrorForDeletingAccount, setServerErrorForDeletingAccount] =
    useState<string>("");
  const [
    showConfirmationAccountDetailsSavedCorrectly,
    setShowConfirmationAccountDetailsSavedCorrectly,
  ] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { _id } = useAppSelector(selectAuth);

  interface currentUserAccountDetailsProps {
    name?: string;
    email?: string;
    password?: string;
  }

  const editCurrentUserAccountDetails = async ({
    name,
    email,
    password,
  }: currentUserAccountDetailsProps) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  const handleSubmitAccountChanges: SubmitHandler<FormFields> = async (
    data
  ) => {
    try {
      const filteredData = Object.fromEntries(
        Object.entries(data).filter(([key, value]) => value !== "")
      );
      console.log(filteredData);
      await editCurrentUserAccountDetails(filteredData);
      setShowConfirmationAccountDetailsSavedCorrectly(true);
    } catch (error) {
      setServerErrorForModifyingAccount("Server error");
    }
  };

  useEffect(() => {
    async function fetchExistingUsersEmails() {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/users"
        );
        const data = await response.json();
        const emails = data.map((user: any) => user.email);
        setExistingUsersEmails(emails);
      } catch (error) {
        setServerErrorForModifyingAccount("Server error");
      }
    }

    fetchExistingUsersEmails();
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  const handleDeleteAccount = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${_id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        setServerErrorForDeletingAccount("Server error");
      }
      return response;
    } catch (error) {
      console.error("Error:", error);
      setServerErrorForDeletingAccount("Server error");
    }
  };

  return (
    <>
      <EditedAccountDetailsConfirmation
        handleLogout={handleLogout}
        showConfirmationAccountDetailsSavedCorrectly={
          showConfirmationAccountDetailsSavedCorrectly
        }
        setShowConfirmationAccountDetailsSavedCorrectly={
          setShowConfirmationAccountDetailsSavedCorrectly
        }
      />
      <AccountForm
        handleSubmitAccountChanges={handleSubmitAccountChanges}
        existingUsersEmails={existingUsersEmails}
        handleLogout={handleLogout}
        serverErrorForModifyingAccount={serverErrorForModifyingAccount}
        handleDeleteAccount={handleDeleteAccount}
        serverErrorForDeletingAccount={serverErrorForDeletingAccount}
      />
    </>
  );
};

export default AccountLogic;

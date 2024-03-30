"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useRegisterUserMutation } from "@/redux/services/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/authSlice";
import { SubmitHandler, useForm } from "react-hook-form";
import RegisterForm from "./registerForm";

export interface FormFields {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const RegisterLogic = () => {
  const [existingUsersEmails, setExistingUsersEmails] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { setError } = useForm<FormFields>();
  const handleSubmitRegisterForm: SubmitHandler<FormFields> = async (data) => {
    await registerUser(data);
  };
  const [
    registerUser,
    {
      data: registerData,
      isSuccess: isRegisterSuccess,
      isError: isRegisterError,
    },
  ] = useRegisterUserMutation();

  useEffect(() => {
    if (isRegisterSuccess) {
      dispatch(
        setUser({
          _id: registerData.user._id,
          name: registerData.user.name,
          token: registerData.token,
        })
      );
      router.push("/");
    } else if (isRegisterError) {
      setError("root", {
        message: "Lo sentimos, ha habido un problema con el servidor",
      });
    }
  }, [isRegisterSuccess, isRegisterError]);

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
        console.error("Error fetching existing users' emails:", error);
      }
    }

    fetchExistingUsersEmails();
  }, []);

  return (
    <>
      <RegisterForm
        handleSubmitRegisterForm={handleSubmitRegisterForm}
        isRegisterError={isRegisterError}
        existingUsersEmails={existingUsersEmails}
      />
    </>
  );
};

export default RegisterLogic;

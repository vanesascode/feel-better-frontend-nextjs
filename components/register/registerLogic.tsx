"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRegisterUserMutation } from "@/redux/services/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/authSlice";
import { SubmitHandler } from "react-hook-form";
import RegisterForm from "./registerForm";
import { useExistingUsersEmails } from "@/hooks/useExistingUsersEmails";

export interface FormFields {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const RegisterLogic = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { existingUsersEmails } = useExistingUsersEmails();
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
          email: registerData.user.email,
          token: registerData.token,
        })
      );
      router.push("/");
    }
  }, [isRegisterSuccess]);

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

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLoginUserMutation } from "@/redux/services/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/authSlice";
import LoginForm from "@/components/login/loginForm";
import { SubmitHandler, useForm } from "react-hook-form";

export interface FormFields {
  email: string;
  password: string;
}

const LoginLogic = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleSubmitLoginForm: SubmitHandler<FormFields> = async (data) => {
    await loginUser(data);
  };
  const [
    loginUser,
    { data: loginData, isSuccess: isLoginSuccess, isError: isLoginError },
  ] = useLoginUserMutation();

  useEffect(() => {
    if (isLoginSuccess) {
      dispatch(
        setUser({
          _id: loginData.user._id,
          name: loginData.user.name,
          email: loginData.user.email,
          token: loginData.token,
        })
      );
      router.push("/");
    }
  }, [isLoginSuccess, isLoginError]);

  return (
    <>
      <LoginForm
        handleSubmitLoginForm={handleSubmitLoginForm}
        isLoginError={isLoginError}
      />
    </>
  );
};

export default LoginLogic;

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
  const { setError } = useForm<FormFields>();
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
          token: loginData.token,
        })
      );
      router.push("/");
    } else if (isLoginError) {
      setError("root", { message: "El email o la contraseña son incorrectos" });
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
